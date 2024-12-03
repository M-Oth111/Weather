var searchInput = document.getElementById('search');
var day1Name = document.getElementById('day1Name');
var day2Name = document.getElementById('day2Name');
var day3Name = document.getElementById('day3Name');
var day1Country = document.getElementById('day1Country');
var day1temp = document.getElementById('day1temp');
var day2temp = document.getElementById('day2temp');
var day3temp = document.getElementById('day3temp');
var day1icon = document.getElementById('day1icon');
var day2icon = document.getElementById('day2icon');
var day3icon = document.getElementById('day3icon');
var day1condition = document.getElementById('day1condition');
var day2condition = document.getElementById('day2condition');
var day3condition = document.getElementById('day3condition');
var day1humidity = document.getElementById('day1humidity');
var day1wind = document.getElementById('day1wind');

document.getElementById('find').addEventListener('click', function (e) {
  e.preventDefault();
  var city = searchInput.value;
  if (city) {
    getData(city);
  } else {
    alert("Please enter a city name!");
  }
});

async function getData(city) {
  var weather = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=c6dbaaff82cb4f99a0d11302240212&q=${city}&days=3`);
  var final = await weather.json();

  console.log(final);

  day1(final);
  day2(final);
  day3(final);
}

function day1(data) {
  day1Name.innerHTML = data.forecast.forecastday[0].date;
  day1Country.innerHTML = data.location.country;
  day1temp.innerHTML = `${data.forecast.forecastday[0].day.avgtemp_c}°C`;
  day1icon.src = `http:${data.forecast.forecastday[0].day.condition.icon}`;
  day1condition.innerHTML = data.forecast.forecastday[0].day.condition.text;
 
}

function day2(data) {
  day2Name.innerHTML = data.forecast.forecastday[1].date;
  day2temp.innerHTML = `${data.forecast.forecastday[1].day.avgtemp_c}°C`;
  day2icon.src = `http:${data.forecast.forecastday[1].day.condition.icon}`;
  day2condition.innerHTML = data.forecast.forecastday[1].day.condition.text;
}

function day3(data) {
  day3Name.innerHTML = data.forecast.forecastday[2].date;
  day3temp.innerHTML = `${data.forecast.forecastday[2].day.avgtemp_c}°C`;
  day3icon.src = `http:${data.forecast.forecastday[2].day.condition.icon}`;
  day3condition.innerHTML = data.forecast.forecastday[2].day.condition.text;
}





