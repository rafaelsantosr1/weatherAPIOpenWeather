function renderWeather(weather){

    var cityContainer = document.querySelector("#city");
    var tempContainer = document.querySelector("#temp");
    var humidityContainer = document.querySelector("#humidity");
    var cloudContainer = document.querySelector("#cloud");
    var windContainer = document.querySelector("#wind");
    // create h2 for name
    var city = document.createElement("h2");
    city.textContent = weather.name;
    cityContainer.append(city);

    //creat p for humidity, wind, description, temp
    var temp = document.createElement("p");
    temp.textContent = "Temperatura: " + parseInt(weather.main.temp) + " C°";
    tempContainer.append(temp);

    var humidity = document.createElement("p");
    humidity.textContent = "Humidade: " + weather.main.humidity + " %";
    humidityContainer.append(humidity);

    var cloud = document.createElement("p");
    cloud.textContent = "Nuvens: " + weather.weather[0].description;
    cloudContainer.append(cloud);

    var wind = document.createElement("p");
    wind.textContent = "Velocidade do vento: " + weather.wind.speed + " mph, " + weather.wind.deg + "°";
    windContainer.append(wind);

    details.append("")
}

function fetchWeather(query) {
    var url = 
     "https://api.openweathermap.org/data/2.5/weather?q=Petrolina&lang=pt_br&units=metric&appid=067d4dae945d37427ec32fd756c13f7d"

    fetch(url)
       .then((response) => response.json())
       .then((data) => renderWeather(data));
}

fetchWeather();