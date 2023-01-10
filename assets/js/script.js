//api key for openweather
var APIKey = "9695d701e522f2ef687386464a455171"

//document variables

var pastCitys = document.querySelector("#prev-citys")
var cityInput = document.querySelector("#city-input")
var search = document.querySelector("#go-btn")
var currentCity = document.querySelector("#city")
var theDate = document.querySelector("#the-date")
var weatherPic = document.querySelector("#weather-pic")
var temp = document.querySelector("#temp")
var wind = document.querySelector("#wind")
var humidity = document.querySelector("#humidity")



//adds current weather data on click
search.addEventListener('click', () => {
    
    let city =cityInput.value

    var weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9695d701e522f2ef687386464a455171&units=imperial`
    fetch(weatherURL).then(function (response) {
        return response.json();
    }).then(function (data) {
        console.log(data)
        var todaysDate = dayjs().format("MM/DD/YYYY")
        
        currentCity.textContent= `${data.name}`
        theDate.textContent = `Today is: ${todaysDate}`
        weatherPic.innerHTML =`<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">`
        temp.textContent = `It's Currently ${data.main.temp}°F out`
        wind.textContent =`The Wind speed is ${data.wind.speed} knots`
        humidity.textContent =`The Humidity is currently ${data.main.humidity}%`
        
      
    });

})



