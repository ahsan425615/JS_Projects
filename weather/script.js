// Get references to HTML elements
const cityInput = document.getElementById('cityInput');
const getWeatherBtn = document.getElementById('getWeatherBtn');
const weatherInfo = document.getElementById('weatherInfo');

// Function to fetch weather data from OpenWeatherMap API
async function getWeather(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY&units=metric`);
        const data = await response.json();

        if (data.cod !== 200) {
            throw new Error(data.message);
        }

        const weatherDescription = data.weather[0].description;
        const temperature = data.main.temp;

        weatherInfo.innerHTML = `
            <p>Weather: ${weatherDescription}</p>
            <p>Temperature: ${temperature}°C</p>
        `;
    } catch (error) {
        weatherInfo.textContent = `Error: ${error.message}`;
    }
}

// Event listener for fetching weather data
getWeatherBtn.addEventListener('click', () => {
    const city = cityInput.value.trim();

    if (city === '') {
        alert('Please enter a city!');
        return;
    }

    getWeather(city);
});
