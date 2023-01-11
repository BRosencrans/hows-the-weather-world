//api key for openweather
var key ="fd42e5c39841481b33ef3122a8fc8959"

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

//adds five day forecast on button click
function fiveDayForecast(userCity) {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${userCity}&appid=${key}&units=imperial`).then(function (response) {
        return response.json();
    }).then((tableCreate) => {
        var newFiveday = document.querySelector('#five-day')
        newFiveday .innerHTML = ''
        for (let i = 0; i < tableCreate.list.length; i = i + 8) {
            console.log(tableCreate.list[i])
            var WeatherInfo = document.createElement('div')
            WeatherInfo.setAttribute("class", 'card col-2')
            WeatherInfo.innerHTML =
             `
            <ul class="list-group list-group-flush">
            <li class="list-group-item">Date: ${tableCreate.list[i].dt_txt.split(' ')[0]}</li>
            <li class="list-group-item"><img src="http://openweathermap.org/img/wn/${tableCreate.list[i].weather[0].icon}@2x.png"></li>
            <li class="list-group-item">The tempeture will be: ${tableCreate.list[i].main.temp}°F</li>
            <li class="list-group-item">The wind will be at: ${tableCreate.list[i].wind.speed} knots</li>
            <li class="list-group-item">The humidity will be at: ${tableCreate.list[i].main.humidity}%</li>
        </ul>`
        newFiveday.append(WeatherInfo)
        }
    })
}

//adds current weather data on click
search.addEventListener('click', () => {
    
    let city =cityInput.value

    var weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=imperial`
   
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
        fiveDayForecast(data.name)
      
    });

})



