const loadingN = document.querySelector('.loading-n');
const loadingW = document.querySelector('.loading-w');
const loadingC = document.querySelector('.loading-c');

const newsBody = document.querySelector('.newsbody');
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('e1abb009438d41dcb85f13e77d61ed43');
const nTitle = document.querySelector('.ntitle');

const weatherBody = document.querySelector('.weatherbody');
const weatherApi = 'https://api.openweathermap.org/data/2.5/weather?';

const currencyBody = document.querySelector('.currencybody');
const currencyApi = 'http://data.fixer.io/api/latest?access_key=b6cc872dbfff7e279a6e5a6da73abb3b' + '&symbols=USD,CAD,PLN';

const dateBody = document.querySelector('.date');
const timeBody = document.querySelector('.time');


newsapi.v2.topHeadlines({
  category: 'business',
  language: 'en',
  country: 'us',
  // pageSize: 50
}).then(response => {
  // console.log(response);
  newsBody.innerHTML = "";
  loadingN.style.display = "none";
  for (let i = 0; i < response.articles.length; i++) {
    postNews(response.articles[i]);
  }
});  

document.getElementById("business").onclick = function () {
  nTitle.textContent = 'BUSINESS NEWS';
  newsapi.v2.topHeadlines({
    category: 'business',
    language: 'en',
    country: 'us',
    // pageSize: 50
  }).then(response => {
    // console.log(response);
    newsBody.innerHTML = "";
    loadingN.style.display = "none";
    for (let i = 0; i < response.articles.length; i++) {
      postNews(response.articles[i]);
    }
  });  
};

document.getElementById("technology").onclick = function () {
  nTitle.textContent = 'TECHNOLOGY NEWS';
  newsapi.v2.topHeadlines({
    category: 'technology',
    language: 'en',
    country: 'us',
    // pageSize: 50
  }).then(response => {
    // console.log(response);
    newsBody.innerHTML = "";
    loadingN.style.display = "none";
    for (let i = 0; i < response.articles.length; i++) {
      postNews(response.articles[i]);
    }
  });  
};

document.getElementById("entertainment").onclick = function () {
  nTitle.textContent = 'ENTERTAINMENT NEWS';
  newsapi.v2.topHeadlines({
    category: 'entertainment',
    language: 'en',
    country: 'us',
    // pageSize: 50
  }).then(response => {
    // console.log(response);
    newsBody.innerHTML = "";
    loadingN.style.display = "none";
    for (let i = 0; i < response.articles.length; i++) {
      postNews(response.articles[i]);
    }
  });  
};

document.getElementById("science").onclick = function () {
  nTitle.textContent = 'SCIENCE NEWS';
  newsapi.v2.topHeadlines({
    category: 'science',
    language: 'en',
    country: 'us',
    // pageSize: 50
  }).then(response => {
    // console.log(response);
    newsBody.innerHTML = "";
    loadingN.style.display = "none";
    for (let i = 0; i < response.articles.length; i++) {
      postNews(response.articles[i]);
    }
  });  
};

document.getElementById("sports").onclick = function () {
  nTitle.textContent = 'SPORTS NEWS';
  newsapi.v2.topHeadlines({
    category: 'sports',
    language: 'en',
    country: 'us',
    // pageSize: 50
  }).then(response => {
    // console.log(response);
    newsBody.innerHTML = "";
    loadingN.style.display = "none";
    for (let i = 0; i < response.articles.length; i++) {
      postNews(response.articles[i]);
    }
  });  
};

document.getElementById("health").onclick = function () {
  nTitle.textContent = 'HEALTH NEWS';
  newsapi.v2.topHeadlines({
    category: 'health',
    language: 'en',
    country: 'us',
    // pageSize: 50
  }).then(response => {
    // console.log(response);
    newsBody.innerHTML = "";
    loadingN.style.display = "none";
    for (let i = 0; i < response.articles.length; i++) {
      postNews(response.articles[i]);
    }
  });  
};

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

  const tempF =  9 / 5 * (weather.main.temp - 273) + 32;

  const temp = document.createElement('p');
  temp.textContent = tempF.toString().toUpperCase().substring(0, weather.main.temp.toString().length - 4) + ' °F';
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

  var arrow = document.createElement('img');
  arrow.setAttribute('src', 'design/svg/arrow.svg');
  arrow.className = 'currency-arrow';
  currencyBody.appendChild(arrow);

  var rates = Object.entries(currency.rates);
  for (let i = 0; i < rates.length; i++) {
    postCurrency(rates[i]);
  }
  loadingC.style.display = "none";
});



var months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');

var weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');

setInterval(function postDate() {
  const now = new Date();
  dateBody.innerHTML = "";
  const date = document.createElement('p');
  date.textContent = months[now.getMonth()].toLowerCase() + ' ' + now.getDate() + ', ' + weekday[now.getDay()].toLowerCase();
  date.className = 'date-text';
  dateBody.appendChild(date);
}, 1000);

const time = document.createElement('p');

setInterval(function postTime() {
  const now = new Date();
  timeBody.innerHTML = "";
  time.textContent = now.getHours() + ':' + now.getMinutes();
  time.className = 'time-text';
  timeBody.appendChild(time);
}, 1000);