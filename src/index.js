const loadingN = document.querySelector('.loading-n');
const loadingW = document.querySelector('.loading-w');
const loadingC = document.querySelector('.loading-c');

const newsBody = document.querySelector('.newsbody');
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('e1abb009438d41dcb85f13e77d61ed43');

const weatherBody = document.querySelector('.weatherbody');
const weatherApi = 'https://api.openweathermap.org/data/2.5/weather?';

const currencyBody = document.querySelector('.currencybody');
const currencyApi = 'http://data.fixer.io/api/latest?access_key=b6cc872dbfff7e279a6e5a6da73abb3b' + '&symbols=USD,AUD,CAD,PLN,MXN';

newsapi.v2.topHeadlines({
  category: 'business',
  language: 'en, uk',
  country: 'us',
  // pageSize: 50
}).then(response => {
  // console.log(response);
  loadingN.style.display = "none";
  for (let i = 0; i < response.articles.length; i++) {
    postNews(response.articles[i]);
  }
});

function postNews(response) {
  const div = document.createElement('div');
  div.className = 'article';

  const title = document.createElement('a');
  title.textContent = response.title.toUpperCase();
  title.setAttribute('href', response.url);
  title.setAttribute('target', '_blank');
  title.className = 'article-title';

  const description = document.createElement('p');
  description.textContent = response.description.toLowerCase();
  description.className = 'article-description';

  const line = document.createElement('hr');
  line.className = 'article-line';

  div.appendChild(title);
  div.appendChild(description);
  div.appendChild(line);
  newsBody.appendChild(div);
  return newsBody;
}

function postWeather(weather) {
  const city = document.createElement('b');
  city.textContent = weather.name.toUpperCase() + ', ' + weather.sys.country.toUpperCase();
  city.className = 'weather-city';

  const main = document.createElement('p');
  main.textContent = weather.weather[0].main.toLowerCase();
  main.className = 'weather-main';

  // const icon = document.createElement('img');
  // icon.setAttribute('src', 'http://openweathermap.org/img/wn/' + weather.weather[0].icon + '@2x.png');
  // icon.className = 'weather-icon';

  const temp = document.createElement('p');
  temp.textContent = weather.main.temp.toString().toUpperCase().substring(0, weather.main.temp.toString().length - 3) + ' °F';
  temp.className = 'weather-temp';

  weatherBody.appendChild(city);
  // weatherBody.appendChild(icon);
  weatherBody.appendChild(temp);
  weatherBody.appendChild(main);
  
  return weatherBody;
}

function postCurrency(rates) {
  const cur = document.createElement('p');
  cur.textContent = rates[0] + ': ' + rates[1];
  cur.className = 'currency-rate';
  currencyBody.appendChild(cur);
  return currencyBody;
}

function ajaxRequest(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.onload = function () {
    var response = JSON.parse(xhr.response);
    callback(response);
  }
  xhr.send();
}

navigator.geolocation.getCurrentPosition(function(position) {
  var weatherApiGeo = weatherApi + 'lat=' + position.coords.latitude + '&lon=' + position.coords.longitude + '&appid=27c032c960d68469abac96a14e79efe2'; 
  // console.log(weatherApiGeo);
  ajaxRequest(weatherApiGeo, function (weather) {
    loadingW.style.display = "none";    
    postWeather(weather);
  });
});

ajaxRequest(currencyApi, function (currency) {
  var mvalue = document.createElement('b');
  mvalue.textContent = '1 ' + currency.base;
  mvalue.className = 'currency-main';
  currencyBody.appendChild(mvalue);

  var rates = Object.entries(currency.rates);
  for (let i = 0; i < rates.length; i++) {
    postCurrency(rates[i]);
  }
  loadingC.style.display = "none";
});