
var currentTime = moment().format('HH');

var cities = JSON.parse(localStorage.getItem("City_History")) || [];

function getInputValue(){ document.getElementById("searchBtn").value;} 



//capture current day/time
function getHeaderDate() {
    var currentHeaderDate = moment().format('MMMM Do YYYY, hh:mm:');
    $("#currentDay").text(currentHeaderDate);
}
// loads header date
getHeaderDate();


    // This is our API key
    var APIKey = '41e4cf88afde56f4a3760262d80139d5';

    //captures text value
    $(".submitBtn").click(function(e) {
    e.preventDefault();
    // $("#searchCity").val(localStorage.getItem('City_History'));
    
    //Stores it in local storage
   

    //document.getElementById('entry1').value = localStorage.getItem('entries');
 

    var getInputValue = document.getElementById("searchCity").value; 
    cities.push(getInputValue);
    localStorage.setItem('City_History', JSON.stringify(cities))

    // Here we are building the URL we need to query the database
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
      "q="+getInputValue+"&appid=" + APIKey;

    // Here we run our AJAX call to the OpenWeatherMap API
    $.ajax({
      url: queryURL,
      method: "GET"
    })
      // We store all of the retrieved data inside of an object called "response"
      .then(function(response) {
        
        // Log the resulting object
        console.log(response);

        // Transfer content to HTML
        $(".city").html("<h2>" + response.name);
        $(".wind").text("Wind Speed: " + response.wind.speed);
        $(".humidity").text("Humidity: " + response.main.humidity);
        $("#weather-img").attr("src",'http://openweathermap.org/img/wn/'+ response.weather[0].icon+'@2x.png');
        $(".description").text('Weather Details: ' + response.weather[0].description);
        $(".latitude").text('Latitute is: ' + response.coord.lat);
        $(".longitude").text('Longitude is: ' + response.coord.lon);
        // $("#forecast").html("<h3>" + response.name + " 5 day Forecast</h3>");
            

        // Convert the temp to fahrenheit
        var tempF = (response.main.temp - 273.15) * 1.80 + 32;
        // add temp content to html
        $(".temp").text("Temperature (K) " + response.main.temp);
        $(".tempF").text("Temperature (F) " + tempF.toFixed(2));

        var lat = (response.coord.lat);
        var lon = (response.coord.lon);
        var queryURL = 'https://api.openweathermap.org/data/2.5/onecall?lat='+lat+'&lon='+lon+'&appid='+APIKey;
        
        $.ajax({
      url: queryURL,
      method: "GET"
      })
      .then (function (response){

          console.log (response);
        for (var i = 0; i < 5; i++) {
            var dailyForecast = $("#forecast");
          
            var temp =  (response.daily[i].temp.day - 273.15) * 1.80 +32;
            var p = $("<p>").text("Temperature: " + temp.toFixed(2) + 'F');
            var image = $ ('<img>')

             $(image).attr("src",'http://openweathermap.org/img/wn/' + response.daily[i].weather[0].icon + '@2x.png');
            // console.log(forecastImg);
            console.log(response.daily[i].weather[0].icon);
            
            
            dailyForecast.append(image);
              dailyForecast.append(p);
            

            $("#searchResults").append(dailyForecast);
          }
     
     });
      });
    });

    
