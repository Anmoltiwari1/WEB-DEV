/* When we use another server remember these 2 thing:
1.Server may through you some error.
2.DataBase is always in another continent(means it will take time)

//this api key will ask for city id
   const url = `https://api.openweathermap.org/data/2.5/weather?id=${city}&appid=${API_KEY}`;
//and this api key will ask for city name
   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
*/


document.addEventListener("DOMContentLoaded",()=>{
    let cityInput=document.getElementById("city-input");
    let getWeatherBtn = document.getElementById("get-weather-btn");
    let WeatherInfo = document.getElementById("weather-info");
    let cityNameDisplay = document.getElementById("city-name");
    let tempratureDisplay = document.getElementById("temprature");
    let descriptionDisplay = document.getElementById("description");
    let errorMessage = document.getElementById("error-message");

    const API_KEY = "ee69bee9ff368d73d65b28b2e768ba6d"; //env variable

    getWeatherBtn.addEventListener('click',async ()=>{
        const city=cityInput.value.trim();
        if(!city) return;


        try{
            const weatherData=await fetchWeatherData(city);
            displayWeatherData(weatherData);
        }catch(error){
            showError();
        }


    })
    async function fetchWeatherData(city){
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
        const response =await fetch(url);
        console.log(typeof(response));
        console.log(response);

        if(!response.ok){
            throw new Error("City not found")
        }
        const data=await response.json();
        return data;
    };

    function displayWeatherData(data){
        console.log(data);
        const {name,main,weather}=data;
        cityNameDisplay.textContent=name;
        tempratureDisplay.textContent = `Temprature: ${main.temp}`;
        descriptionDisplay.textContent = `Weather: ${weather[0].description}`;

        //unlock the display
        WeatherInfo.classList.remove('hidden')

    }


    function showError(){
        WeatherInfo.classList.add('hidden');
        errorMessage.classList.remove('hidden');
    }

})