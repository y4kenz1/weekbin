const newsBody = document.querySelector('.newsbody');
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('e1abb009438d41dcb85f13e77d61ed43');

newsapi.v2.topHeadlines({
  category: 'business',
  language: 'en',
  country: 'us',
  pageSize: 50
}).then(response => {
  console.log(response);
  // postNews(response);
  for (var i = 0; i < response.articles.length; i++) {
    postNews(response.articles[i]);
  }
});

function postNews(response) {
  const div = document.createElement('div');
  div.className = 'article';

  const title = document.createElement('a');
  title.textContent = response.title.toLowerCase();
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