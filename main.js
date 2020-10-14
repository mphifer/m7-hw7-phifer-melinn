var weatherMessage = document.getElementById('weather');

var headerCity = document.getElementById('city');


var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var apiResult = JSON.parse(this.responseText);

  //print city name in header text
        function showCity() {
          var cityName = document.createElement('h1');
          headerCity.appendChild(cityName);
          var cityText = document.createTextNode(apiResult.name);
          cityName.appendChild(cityText);
        };
        showCity();

  //print weather at the end of main section text
        function showWeather() {
          var displayWeather = document.createElement('p');
          weatherMessage.appendChild(displayWeather);
          var weatherToday = document.createTextNode(apiResult.weather[0].description);
          displayWeather.appendChild(weatherToday);
        };
        showWeather();
    }
};
xmlhttp.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=32804,us&appid=6efff70fe1477748e31c17d1c504635f', true);
xmlhttp.send();
