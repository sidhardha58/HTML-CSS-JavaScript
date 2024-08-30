const dropList = document.querySelectorAll(".dropdown select"),
fromCurr = document.querySelector(".from select"),
toCurr = document.querySelector(".to select"),
getBtn = document.querySelector("form button");

for(let i=0;i<dropList.length;i++){
  for(currCode in countryList) {
    let seleted;
    if(i==0) {
      seleted = currCode == "USD" ? "selected" : "";
    }
    else if(i==1) {
      seleted = currCode == "INR" ? "selected" : "";
    }
    let optionTag = `<option value=${currCode} ${seleted}>${currCode}</option>`;
    dropList[i].insertAdjacentHTML("beforeend",optionTag)
  }
  dropList[i].addEventListener("change", e => {
    loadFlag(e.target);
  });
}

function loadFlag(element) {
  let newCode = element.value;
  let countryCode = countryList[newCode];
  let newSrc = `https://flagsapi.com/${countryCode}/shiny/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src=newSrc;
};

const exchnageIcon = document.querySelector(".dropdown i");
exchnageIcon.addEventListener("click", ()=>{
  let tempCode = fromCurr.value;
  fromCurr.value=  toCurr.value;
  toCurr.value= tempCode;
  loadFlag(fromCurr);
  loadFlag(toCurr);
  getExchange();
})

window.addEventListener("load", () => {
  getExchange();
})

getBtn.addEventListener("click", e => {
  e.preventDefault();
  getExchange();
})

function getExchange() {
  const amount = document.querySelector(".amount input");
  const displayMsg = document.querySelector(".msg");
  let amountval = amount.value;
  if(amountval=="" || amountval=="0") {
    amount.value="1";
    amountval=1;
  }
displayMsg.innerHTML=`Getting Exchange Rate...`;
const url = `https://v6.exchangerate-api.com/v6/811286de7fac3a0bc5721748/latest/${fromCurr.value}`
fetch(url).then(response => response.json()).then(result => {
  let excahngeRate = result.conversion_rates[toCurr.value];
  let totalExchangeRate = (amountval * excahngeRate).toFixed(2);
  console.log(totalExchangeRate);
  setTimeout(() => {
    displayMsg.innerHTML = `${amountval} ${fromCurr.value} = ${totalExchangeRate} ${toCurr.value} `
  },500)
});
}