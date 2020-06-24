const loadingW = document.querySelector('.loading-w');
const loadingC = document.querySelector('.loading-c');

const news1Body = document.querySelector('.news1');
const news2Body = document.querySelector('.news2');
const news3Body = document.querySelector('.news3');

const nTitle = document.querySelector('.ntitle');

const weatherBody = document.querySelector('.weatherbody');
const weatherApi = 'https://api.openweathermap.org/data/2.5/weather?';

const widgetBody = document.querySelector('.body3');

const currencyApi = 'https://api.exchangeratesapi.io/latest' + '?base=USD';
const musicApi = 'https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=7475c75abe79ec1543d3587b1c852cdd&format=json';
const geolocationApi = 'https://api.ipdata.co/?api-key=5ada641ee74885059907bcb7d03f99459aa7f97fffd9cdf8ab808406'
const NASAApi = 'https://api.nasa.gov/planetary/apod?api_key=iDq6S8fa97TmvV7NWikXz0V9IGwKdqnb0MK3OC3m';

var currencyBody;
const dateBody = document.querySelector('.date');

var months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
var weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
var category = new Array('business', 'technology', 'entertainment', 'science', 'sports', 'health');

var btn = document.querySelector('.button')

var urlB = 'https://newsapi.org/v2/top-headlines?' + 'country=us&' + 'category=business&' + 'apiKey=e1abb009438d41dcb85f13e77d61ed43';
var urlT = 'https://newsapi.org/v2/top-headlines?' + 'country=us&' + 'category=technology&' + 'apiKey=e1abb009438d41dcb85f13e77d61ed43';
var urlE = 'https://newsapi.org/v2/top-headlines?' + 'country=us&' + 'category=entertainment&' + 'apiKey=e1abb009438d41dcb85f13e77d61ed43';
var urlS = 'https://newsapi.org/v2/top-headlines?' + 'country=us&' + 'category=science&' + 'apiKey=e1abb009438d41dcb85f13e77d61ed43';
var urlSp = 'https://newsapi.org/v2/top-headlines?' + 'country=us&' + 'category=sports&' + 'apiKey=e1abb009438d41dcb85f13e77d61ed43';
var urlH = 'https://newsapi.org/v2/top-headlines?' + 'country=us&' + 'category=health&' +  'apiKey=e1abb009438d41dcb85f13e77d61ed43';

async function getData(url) {
    let response = await fetch(url);
    let data = await response.json()
    
    return data;
}

if (window.innerWidth <= 1080) {
    nTitle.style.fontSize = '44px';

    document.querySelector('.logo').src = 'design/logom.png';
    document.querySelector('.logo').style.height = 'auto';
    document.querySelector('.logo').style.width = '70%';
}

btn.onmousemove = function (e) {
    var x = e.pageX - btn.offsetLeft - btn.offsetParent.offsetLeft
    var y = e.pageY - btn.offsetTop - btn.offsetParent.offsetTop
    btn.style.setProperty('--x', x + 'px')
    btn.style.setProperty('--y', y + 'px')
}

getData(urlB)
    .then(response => {
        news1Body.innerHTML = "";
        news2Body.innerHTML = "";
        news3Body.innerHTML = "";
        widgetBody.innerHTML = "";
        widgetBody.style.display = 'none';

        getCurrency();

        var n = response.articles.length / 3;
        n = Math.round(n);

        for (let i = 0; i < n; i++) {
            if (response.articles[i] != undefined) {
                postNews(response.articles[i], 1);
            }
        }
        for (let i = n; i < n + n; i++) {
            if (response.articles[i] != undefined) {
                postNews(response.articles[i], 2);
            }
        }
        for (let i = n + n; i < n + n + n; i++) {
            if (response.articles[i] != undefined) {
                postNews(response.articles[i], 3);
            }
        }
    });

document.getElementById("business").onclick = function () {
    nTitle.textContent = 'BUSINESS NEWS';
    getData(urlB)
        .then(response => {
            news1Body.innerHTML = "";
            news2Body.innerHTML = "";
            news3Body.innerHTML = "";
            widgetBody.innerHTML = "";
            widgetBody.style.display = 'none';

            getCurrency();

            var n = response.articles.length / 3;
            n = Math.round(n);

            for (let i = 0; i < n; i++) {
                if (response.articles[i] != undefined) {
                    postNews(response.articles[i], 1);
                }
            }
            for (let i = n; i < n + n; i++) {
                if (response.articles[i] != undefined) {
                    postNews(response.articles[i], 2);
                }
            }
            for (let i = n + n; i < n + n + n; i++) {
                if (response.articles[i] != undefined) {
                    postNews(response.articles[i], 3);
                }
            }
        });
};

document.getElementById("technology").onclick = function () {
    nTitle.textContent = 'TECHNOLOGY NEWS';
    getData(urlT)
        .then(response => {
            news1Body.innerHTML = "";
            news2Body.innerHTML = "";
            news3Body.innerHTML = "";
            widgetBody.innerHTML = "";
            widgetBody.style.display = 'none';

            var n = response.articles.length / 3;
            n = Math.round(n);

            for (let i = 0; i < n; i++) {
                if (response.articles[i] != undefined) {
                    postNews(response.articles[i], 1);
                }
            }
            for (let i = n; i < n + n; i++) {
                if (response.articles[i] != undefined) {
                    postNews(response.articles[i], 2);
                }
            }
            for (let i = n + n; i < n + n + n; i++) {
                if (response.articles[i] != undefined) {
                    postNews(response.articles[i], 3);
                }
            }
        });
};

document.getElementById("entertainment").onclick = function () {
    nTitle.textContent = 'ENTERTAINMENT NEWS';
    getData(urlE)
        .then(response => {
            news1Body.innerHTML = "";
            news2Body.innerHTML = "";
            news3Body.innerHTML = "";
            widgetBody.innerHTML = "";
            widgetBody.style.display = 'none';

            getMusic();

            var n = response.articles.length / 3;
            n = Math.round(n);

            for (let i = 0; i < n; i++) {
                if (response.articles[i] != undefined) {
                    postNews(response.articles[i], 1);
                }
            }
            for (let i = n; i < n + n; i++) {
                if (response.articles[i] != undefined) {
                    postNews(response.articles[i], 2);
                }
            }
            for (let i = n + n; i < n + n + n; i++) {
                if (response.articles[i] != undefined) {
                    postNews(response.articles[i], 3);
                }
            }
        });
};

document.getElementById("science").onclick = function () {
    nTitle.textContent = 'SCIENCE NEWS';
    getData(urlS)
        .then(response => {
            news1Body.innerHTML = "";
            news2Body.innerHTML = "";
            news3Body.innerHTML = "";
            widgetBody.innerHTML = "";
            widgetBody.style.display = 'none';

            getNASA();

            var n = response.articles.length / 3;
            n = Math.round(n);

            for (let i = 0; i < n; i++) {
                if (response.articles[i] != undefined) {
                    postNews(response.articles[i], 1);
                }
            }
            for (let i = n; i < n + n; i++) {
                if (response.articles[i] != undefined) {
                    postNews(response.articles[i], 2);
                }
            }
            for (let i = n + n; i < n + n + n; i++) {
                if (response.articles[i] != undefined) {
                    postNews(response.articles[i], 3);
                }
            }
        });
};

document.getElementById("sports").onclick = function () {
    nTitle.textContent = 'SPORTS NEWS';
    getData(urlSp)
        .then(response => {
            news1Body.innerHTML = "";
            news2Body.innerHTML = "";
            news3Body.innerHTML = "";
            widgetBody.innerHTML = "";
            widgetBody.style.display = 'none';

            var n = response.articles.length / 3;
            n = Math.round(n);

            for (let i = 0; i < n; i++) {
                if (response.articles[i] != undefined) {
                    postNews(response.articles[i], 1);
                }
            }
            for (let i = n; i < n + n; i++) {
                if (response.articles[i] != undefined) {
                    postNews(response.articles[i], 2);
                }
            }
            for (let i = n + n; i < n + n + n; i++) {
                if (response.articles[i] != undefined) {
                    postNews(response.articles[i], 3);
                }
            }
        });
};

document.getElementById("health").onclick = function () {
    nTitle.textContent = 'HEALTH NEWS';
    getData(urlH)
        .then(response => {
            news1Body.innerHTML = "";
            news2Body.innerHTML = "";
            news3Body.innerHTML = "";
            widgetBody.innerHTML = "";
            widgetBody.style.display = 'none';

            var n = response.articles.length / 3;
            n = Math.round(n);

            for (let i = 0; i < n; i++) {
                if (response.articles[i] != undefined) {
                    postNews(response.articles[i], 1);
                }
            }
            for (let i = n; i < n + n; i++) {
                if (response.articles[i] != undefined) {
                    postNews(response.articles[i], 2);
                }
            }
            for (let i = n + n; i < n + n + n; i++) {
                if (response.articles[i] != undefined) {
                    postNews(response.articles[i], 3);
                }
            }
        });
};

function postNews(response, number) {
    const div = document.createElement('div');
    div.className = 'article';

    if (response.urlToImage != undefined && response.urlToImage.complete != false) {
        const img = document.createElement('img');
        img.src = response.urlToImage;
        img.className = 'article-img';
        img.setAttribute('alt', '.');
        div.appendChild(img);
    }

    const title = document.createElement('a');
    title.textContent = response.title.toUpperCase();
    title.setAttribute('href', response.url);
    title.setAttribute('target', '_blank');
    title.className = 'article-title';

    div.appendChild(title);

    if (response.description != null) {
        const description = document.createElement('p');
        description.textContent = response.description;
        description.className = 'article-description';
        div.appendChild(description);
    }

    const hr = document.createElement('hr');
    hr.className = 'article-hr';
    div.appendChild(hr);

    if (response.source.name != 'Seekingalpha.com' && response.source.name != 'Wolfstreet.com') {
        if (number === 1) {
            news1Body.appendChild(div);
            return news1Body;
        } else if (number === 2) {
            news2Body.appendChild(div);
            return news2Body;
        } else if (number === 3) {
            news3Body.appendChild(div);
            return news3Body;
        }
    }
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
    if (weather.sys.country == 'US') {
        var tempF = 9 / 5 * (weather.main.temp - 273) + 32;
        temp.textContent = tempF.toString().toUpperCase().substring(0, weather.main.temp.toString().length - 4) + ' °F';
    } else {
        var tempF = weather.main.temp - 273;
        tempF = tempF.toString().toUpperCase().substring(0, weather.main.temp.toString().length - 5);

        if (tempF == '-0') {
            tempF = 0;
        }
        temp.textContent = tempF + ' °C';
    }

    temp.className = 'weather-temp';

    const hr = document.createElement('hr');
    hr.className = 'article-hr';

    weatherBody.appendChild(city);
    // weatherBody.appendChild(icon);
    weatherBody.appendChild(temp);
    weatherBody.appendChild(main);
    weatherBody.appendChild(hr);

    return weatherBody;
}

function postCurrency(rates) {
    
    const cur = document.createElement('p');
    cur.textContent = rates[0] + ': ' + rates[1];
    cur.className = 'currency-rate';
    currencyBody.appendChild(cur);
    return currencyBody;
}

function getCurrency() {
    widgetBody.style.display = 'block';
    ajaxRequest(currencyApi, function (currency) {

        currencyBody = document.createElement('div');
        currencyBody.className = 'currencybody';

        var mvalue = document.createElement('b');
        mvalue.textContent = '1 ' + currency.base;
        mvalue.className = 'currency-main';
        currencyBody.appendChild(mvalue);

        var arrow = document.createElement('img');
        arrow.setAttribute('src', 'design/svg/arrow.svg');
        arrow.className = 'currency-arrow';
        currencyBody.appendChild(arrow);

        var rates = Object.entries(currency.rates);
        postCurrency(rates[0]);
        postCurrency(rates[7]);
        postCurrency(rates[18]);

        const hr = document.createElement('hr');
        hr.className = 'article-hr';

        currencyBody.appendChild(hr);

        widgetBody.appendChild(currencyBody);
    });
}

function postMusic(response) {
    const div = document.createElement('div');
    div.className = 'music';

    const name = document.createElement('a');
    name.textContent = response.name.toUpperCase();
    name.setAttribute('href', response.url);
    name.setAttribute('target', '_blank');
    name.className = 'music-name';
    div.appendChild(name);

    const artist = document.createElement('p');
    artist.textContent = response.artist.name.toLowerCase();
    artist.setAttribute('href', response.artist.url);
    artist.setAttribute('target', '_blank');
    artist.className = 'music-artist';
    div.appendChild(artist);

    const hr = document.createElement('hr');
    hr.className = 'hr';
    div.appendChild(hr);

    widgetBody.appendChild(div);
    return widgetBody;
}

function getMusic(params) {
    widgetBody.style.display = 'block';
    ajaxRequest(musicApi, function (music) {
        var headline = document.createElement('b');
        headline.textContent = 'LAST.FM : TOP 10 SONGS';
        headline.className = 'music-headline';
        widgetBody.appendChild(headline);

        for (let i = 0; i < 10; i++) {
            postMusic(music.tracks.track[i]);
        }
        return widgetBody;
    });
}

function getNASA(params) {
    widgetBody.style.display = 'block';
    ajaxRequest(NASAApi, function (response) {
        var headline = document.createElement('b');
        headline.textContent = 'ASTRONOMY PICTURE OF THE DAY';
        headline.className = 'nasa-headline';
        widgetBody.appendChild(headline);

        var a = document.createElement('a');
        a.className = 'nasa-a';
        a.setAttribute('href', response.hdurl);

        var img = document.createElement('img');
        img.src = response.url;
        img.className = 'nasa-img';
        img.setAttribute('alt', response.explanation);
        a.appendChild(img);
        widgetBody.appendChild(a);

        var title = document.createElement('p');
        title.textContent = response.title.toLowerCase();
        title.className = 'nasa-title';
        widgetBody.appendChild(title);

        const hr = document.createElement('hr');
        hr.className = 'article-hr';
        widgetBody.appendChild(hr);

        return widgetBody;
    });
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

ajaxRequest(geolocationApi, function (response) {
    var weatherApiGeo = weatherApi + 'lat=' + response.latitude + '&lon=' + response.longitude + '&appid=27c032c960d68469abac96a14e79efe2';

    var ccode = response.country_code.toLowerCase();

    var countries = ['ar', 'au', 'at', 'be', 'br', 'bg', 'ca', 'cn', 'co', 'cu', 'cz', 'eg', 'fr', 'de', 'gr', 'hk', 'hu', 'in', 'id', 'ie', 'il', 'it', 'jp', 'lv', 'lt', 'my', 'mx', 'ma', 'nl', 'nz', 'ng', 'no', 'ph', 'pl', 'pt', 'ro', 'ru', 'sa', 'rs', 'sg', 'sk', 'si', 'za', 'kr', 'se', 'ch', 'tw', 'th', 'tr', 'ae', 'ua', 'gb', 'us', 've'];
    
    for (let i = 0; i < countries.length; i++) {
        if (ccode != countries[i]) {
            ccode = 'us';
        }
    }

    urlB = 'https://newsapi.org/v2/top-headlines?' + 'country=' + ccode + '&category=business&' + 'apiKey=e1abb009438d41dcb85f13e77d61ed43';
    urlT = 'https://newsapi.org/v2/top-headlines?' + 'country=' + ccode + '&category=technology&' + 'apiKey=e1abb009438d41dcb85f13e77d61ed43';
    urlE = 'https://newsapi.org/v2/top-headlines?' + 'country=' + ccode + '&category=entertainment&' + 'apiKey=e1abb009438d41dcb85f13e77d61ed43';
    urlS = 'https://newsapi.org/v2/top-headlines?' + 'country=' + ccode + '&category=science&' + 'apiKey=e1abb009438d41dcb85f13e77d61ed43';
    urlSp = 'https://newsapi.org/v2/top-headlines?' + 'country=' + ccode + '&category=sports&' + 'apiKey=e1abb009438d41dcb85f13e77d61ed43';
    urlH = 'https://newsapi.org/v2/top-headlines?' + 'country=' + ccode + '&category=health&' +  'apiKey=e1abb009438d41dcb85f13e77d61ed43';
    
    widgetBody.innerHTML = "";

    getData(urlB)
        .then(response => {
        news1Body.innerHTML = "";
        news2Body.innerHTML = "";
        news3Body.innerHTML = "";
        widgetBody.innerHTML = "";
        widgetBody.style.display = 'none';

        getCurrency();

        if (response.articles != undefined) {
            var n = response.articles.length / 3;
            n = Math.round(n);    
        }

        for (let i = 0; i < n; i++) {
            if (response.articles[i] != undefined) {
                postNews(response.articles[i], 1);
            }
        }
        for (let i = n; i < n + n; i++) {
            if (response.articles[i] != undefined) {
                postNews(response.articles[i], 2);
            }
        }
        for (let i = n + n; i < n + n + n; i++) {
            if (response.articles[i] != undefined) {
                postNews(response.articles[i], 3);
            }
        }
    });

    ajaxRequest(weatherApiGeo, function (weather) {
        loadingW.style.display = "none";
        postWeather(weather);
    });
});

setInterval(function postDate() {
    const now = new Date();
    dateBody.innerHTML = "";
    const date = document.createElement('p');
    date.textContent = months[now.getMonth()].toLowerCase() + ' ' + now.getDate() + ', ' + weekday[now.getDay()].toLowerCase();
    date.className = 'date-text';
    dateBody.appendChild(date);
}, 1000);
