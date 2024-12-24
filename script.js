document.getElementById('searchBtn').addEventListener('click', function() {
    const city = document.getElementById('city').value.toUpperCase().trim();
    if (city === "") {
        document.getElementById('errortext').innerText = "Please enter a city";
        return;
    }

    fetchWeather(city);
});

function fetchWeather(city) {
    const weatherinfo = {
        "BENGALURU": {
            "temperature": 28,
            "conditions": "Rainy",
            "humidity": 85,
            "windSpeed": 15,
            "pressure": 1012,
            "icon": "🌧️"
        }, 
        "DELHI": {
            "temperature": 17,
            "conditions": "Smoggy",
            "humidity": 65,
            "windSpeed": 9,
            "pressure": 1001,
            "icon": "☁️"
        },
        "HYDERABAD": {
            "temperature": 34,
            "conditions": "Clear Sky",
            "humidity": 76,
            "windSpeed": 15,
            "pressure": 1010,
            "icon": "☀️"
        },
        "KOLKATA": {
            "temperature": 20,
            "conditions": "Cloudy",
            "humidity": 90,
            "windSpeed": 20,
            "pressure": 1014,
            "icon": "☁️"
        },
        "MUMBAI": {
            "temperature": 27,
            "conditions": "Rainy",
            "humidity": 83,
            "windSpeed": 19,
            "pressure": 1020,
            "icon": "🌧️"
        },
    };

    const data = weatherinfo[city];
    if (!data) {
        document.getElementById('errortext').innerText = "City not found.";
        document.getElementById('weatherinfo').innerHTML = "";
        return;
    }

    document.getElementById('errortext').innerText = "";
    document.getElementById('weatherinfo').innerHTML = `
        <h3 align="center">${city}</h3>
        <div align="center">${new Date().toLocaleDateString()}</div>
        <div align="center"><strong>Temperature:</strong> ${data.temperature}°C</div>
        <div align="center"><strong>Conditions:</strong> ${data.conditions}</div>
        <div align="center"><strong>Humidity:</strong> ${data.humidity}%</div>
        <div align="center"><strong>Wind Speed:</strong> ${data.windSpeed} km/h</div>
        <div align="center"><strong>Pressure:</strong> ${data.pressure} hPa</div>
        <div align="center">${data.icon}</div>
    `;
}

document.getElementById('backToTop').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
