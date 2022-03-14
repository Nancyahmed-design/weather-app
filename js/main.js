
var weather = [];
var finalResult =[];
async function getWeather(){
  var apiResponce =await fetch(`https://api.weatherapi.com/v1/forecast.json?key=72beb792947646c9b67135146222101&q=egypt&days=3`)
  weather =await apiResponce.json(); 
   finalResult = weather.forecast.forecastday;
  console.log(finalResult);
}


function dispalyWeather(){
  var weatherInfo =``;
  for(var i=0 ;i<finalResult.length;i++){
      weatherInfo +=`  <div class="card text-white">
      <div class="card-header bg-card border-secondary border-bottom 
        border-light">${finalResult[i].date}</div>
      <div class="card-body bg-card ">
        <h5 class="card-title">Cairo</h5>
        <div><img src="${finalResult[i].day.condition.icon == null ?'img/img/sunny.png': finalResult[i].day.condition.icon}"></div>
        <h3 class="card-text">${finalResult[i].day.maxtemp_c}<sup>o</sup>C</h3>
        <p class="card-text"><small class="text-primary">${finalResult[i].day.condition.text}</small></p>
        <span><img src="img/routeegypt_com/icon-umberella.png">${finalResult[i].day.daily_chance_of_rain}%</span>
        <span><img src="img/routeegypt_com/icon-wind.png">${finalResult[i].day.maxwind_kph}km/h</span>
        <span><img src="img/routeegypt_com/icon-compass.png">East</span>

      </div>
    </div>
   `
  }
  document.getElementById('weather-card').innerHTML=weatherInfo;
}



(async function(){

  await getWeather();
  dispalyWeather();
}());

// 