const newsBody = document.querySelector('.newsbody');
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('e1abb009438d41dcb85f13e77d61ed43');
// To query /v2/top-headlines
// All options passed to topHeadlines are optional, but you need to include at least one of them
newsapi.v2.topHeadlines({
//   sources: 'bbc-news,the-verge',
//   q: 'bitcoin',
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

  const title = document.createElement('p');
  title.textContent = response.title.toLowerCase();
  title.className = 'article-title';

  const description = document.createElement('p');
  description.textContent = response.description.toLowerCase();
  description.className = 'article-description';

  const link = document.createElement('a');
  link.textContent = 'Read more...'.toLowerCase();
  link.setAttribute('href', response.url);
  link.className = 'article-link';

  const line = document.createElement('hr');
  line.className = 'article-line';

  div.appendChild(title);
  div.appendChild(description);
  div.appendChild(link);
  div.appendChild(line);
  newsBody.appendChild(div);
  return newsBody;
}