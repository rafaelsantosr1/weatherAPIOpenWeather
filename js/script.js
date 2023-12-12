function renderWeather(weather){

    var cityContainer = document.querySelector(".city");
    var tempContainer = document.querySelector(".temp");
    var humidityContainer = document.querySelector(".humidity");
    var cloudContainer = document.querySelector(".cloud");
    var windContainer = document.querySelector(".wind");
    var feelslikeContainer = document.querySelector(".feelslike");
    var cloudIconElement = document.querySelector("#cloud-icon");

    
    // create h2 for name
    var city = document.createElement("p");
    city.textContent = weather.name;
    cityContainer.append(city);

    //creat p for humidity, wind, description, temp
    var temp = document.createElement("p");
    temp.textContent = parseInt(weather.main.temp) + " C°";
    tempContainer.append(temp);
    

    var humidity = document.createElement("p");
    humidity.textContent = "Umidade: " + weather.main.humidity + " %";
    humidityContainer.append(humidity);

    var cloud = document.createElement("p");
    cloud.textContent = "Nuvens: " + weather.weather[0].description;
    cloudContainer.append(cloud);
    cloudIconElement.setAttribute(
        "src",
        'http://openwearthermap.org/img/wn/${weather.weather[0].icon}.png'
    );

    


    var wind = document.createElement("p");
    wind.textContent = "Velocidade do vento: " + weather.wind.speed + " mph, " + weather.wind.deg + "°";
    windContainer.append(wind);

    var feelslike = document.createElement("p");
    feels.textContent = "Sensação térmica: " + weather.main.feels_like + " C°";
    feelslikeContainer.append(feelslike);

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


//Add zero in time < 10
function addZero(i) {
    if (i < 10) {i = "0" + i}
    return i;
  }

function time()
{
today=new Date();
h=addZero(today.getHours());
m=addZero(today.getMinutes());
s=addZero(today.getSeconds());
document.getElementById('timer').innerHTML=h+":"+m+":"+s;
setTimeout('time()',500);
}

// Refresh the page after a delay of 10 minutes
setTimeout(function(){
    location.reload();
}, 600000); // 600000 milliseconds = 10 minutes
