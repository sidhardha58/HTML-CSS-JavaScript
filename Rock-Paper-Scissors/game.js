const msg = document.querySelector("#msg");
const user = document.querySelector("#user");
const comp = document.querySelector("#comp");

let user_score=0;
let comp_score=0;

msg.classList.remove("highlight1");
msg.classList.remove("highlight2");
msg.classList.remove("highlight3");


const choices = document.querySelectorAll(".choice");

const genCompChoice = () => {
    const options = ["rock" , "paper" , "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const darw = () => {
    console.log(`It's a Draw!!`);
    msg.classList.add("highlight2");
    msg.classList.remove("highlight1");
    msg.classList.remove("highlight3");
    msg.innerHTML = `It's a Draw..!!`;
}

const showWinner = (userWin) => {
    if(userWin) {
        user_score++;
        user.innerHTML=user_score;
        console.log(`You Won!!`);
        msg.classList.add("highlight1");
        msg.classList.remove("highlight2");
        msg.classList.remove("highlight3");
        msg.innerHTML=`You Won..!!`;
    }
    else {
        comp_score++;
        comp.innerHTML=comp_score;
        console.log(`You Lost!!`);
        msg.classList.add("highlight3");
        msg.classList.remove("highlight2");
        msg.classList.remove("highlight1");
        msg.innerHTML=`You Lost..!!`;
    }
}

const playGame = (userChoice) => {
    console.log(`User Choice : ${userChoice}`);
    //Generate Comp Choice
    const compChoice = genCompChoice();
    console.log(`Comp Choice : ${compChoice}`);

    if(userChoice === compChoice) darw();
    else {
        let userWin = true;
        if(userChoice === "rock") {
            userWin = compChoice==="paper" ? false : true;
        }
        else if(userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        }
        else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})