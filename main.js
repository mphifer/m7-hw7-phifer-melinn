var headerCity = document.getElementById('city');

var weatherMessage = document.getElementById('weather');


var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var apiResult = JSON.parse(this.responseText);

      //print city name in header text
        function showCity() {
          var cityText = document.createTextNode(apiResult.name);
          headerCity.appendChild(cityText);
        };
        showCity();

      //print weather at the end of main section text
        function showWeather() {
          var weatherText = document.createTextNode(apiResult.weather[0].description);
          weatherMessage.appendChild(weatherText);
        };
        showWeather();
    }
};
xmlhttp.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=32804,us&appid=6efff70fe1477748e31c17d1c504635f', true);
xmlhttp.send();
