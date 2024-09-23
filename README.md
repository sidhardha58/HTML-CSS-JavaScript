"# HTML-CSS-JavaScript" 
import requests

# Define the API URL and your API key
API_KEY = 'your_openweather_api_key'  # Replace with your OpenWeather API key
CITY = 'London'
URL = f'http://api.openweathermap.org/data/2.5/weather?q={CITY}&appid={API_KEY}'

try:
    # Make a GET request to the API
    response = requests.get(URL)
    # Check if the request was successful
    if response.status_code == 200:
        # Convert the response to JSON
        data = response.json()

        # Extract useful information
        main = data['main']
        temperature = main['temp']
        humidity = main['humidity']
        weather = data['weather'][0]['description']

        # Print the weather information
        print(f"City: {CITY}")
        print(f"Temperature: {temperature}K")
        print(f"Humidity: {humidity}%")
        print(f"Weather: {weather}")

    else:
        print(f"Error: Unable to fetch data. Status code: {response.status_code}")
except Exception as e:
    print(f"An error occurred: {e}")
