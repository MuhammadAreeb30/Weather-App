const weatherInput = document.querySelector(".weather-input");
const searchBtn = document.querySelector("#searchBtn");
const weatherImage = document.querySelector(".weather-image");
const temp = document.querySelector(".temp");
const des = document.querySelector(".des");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind-speed");
const location_not_found = document.querySelector(".location-not-found");
const weather_body = document.querySelector(".weather-body");

async function checkWeather(city) {
	const api_key = "291ce3439d6ae39cbcce0d880dd9c510";
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
	const weather_data = await fetch(`${url}`).then(response => response.json());
	if (weather_data.cod === '404') {
		location_not_found.style.display = "flex";
		weather_body.style.display = "none";
		return;
	}
	else {
		location_not_found.style.display = "none";
		weather_body.style.display = "flex";
	}


	temp.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`
	des.innerHTML = `${weather_data.weather[0].description}`
	humidity.innerHTML = `${weather_data.main.humidity}%`
	wind.innerHTML = `${weather_data.wind.speed}Km/H`

	switch (weather_data.weather[0].main) {
		case "Clouds":
			weatherImage.src = 'images/cloud.png';
			break;
		case "Clear":
			weatherImage.src = 'images/clear.png';
			break;
		case "Mist":
			weatherImage.src = 'images/mist.png';
			break;
		case "Rain":
			weatherImage.src = 'images/rain.png';
			break;
		case "Snow":
			weatherImage.src = 'images/snow.png';
			break;
	}
};

searchBtn.addEventListener('click', () => {
	checkWeather(weatherInput.value)
});

// dark mode js code
const container = document.querySelector('.container');
const darkBtn = document.querySelector('.darkBtn');
const darkImg = document.querySelector('.darkImg');
let isDarkMode = true; // Toggle variable

darkBtn.addEventListener('click', () => {
	if(isDarkMode){
		container.classList.remove("container");
		container.classList.add("darkTheme");
		darkImg.src = "images/sun.png";
	}
	else{
		container.classList.add("container");
		container.classList.remove("darkTheme");
		darkImg.src = "images/mooon.png";
	}
	isDarkMode = !isDarkMode;
});
