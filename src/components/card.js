import { articles } from "../mocks/data";

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  // card
  const card = document.createElement('div');
  card.classList.add('card');

  // headline
  const newHeadline = document.createElement('div');
  newHeadline.classList.add('headline');
  newHeadline.textContent = article.headline;
  card.appendChild(newHeadline);

  // author
  const newAuthor = document.createElement('div')
  newAuthor.classList.add('author');
  card.appendChild(newAuthor);

  // img-container
  const newImageContainer = document.createElement('div');
  newImageContainer.classList.add('img-container');
  newAuthor.appendChild(newImageContainer);

  // img
  const newAuthorPhoto = document.createElement('img');
  newAuthorPhoto.src = article.authorPhoto;
  newImageContainer.appendChild(newAuthorPhoto);

  // authorName
  const newAuthorName = document.createElement('span');
  newAuthorName.textContent = `By ${article.authorName}`;
  newAuthor.appendChild(newAuthorName);

  // addEventListener
  card.addEventListener('click', () => {
    console.log(article.headline);
  })

  return card;

}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  const cardContainer = document.querySelector(selector);
  axios.get('http://localhost:5000/api/articles')
    .then(res => {
      res.data.articles.javascript.forEach(item => {
        cardContainer.appendChild(Card(item));
      });
      res.data.articles.bootstrap.forEach(item => {
        cardContainer.appendChild(Card(item));
      });
      res.data.articles.technology.forEach(item => {
        cardContainer.appendChild(Card(item));
      });
      res.data.articles.jquery.forEach(item => {
        cardContainer.appendChild(Card(item));
      });
      res.data.articles.node.forEach(item => {
        cardContainer.appendChild(Card(item));
      });

      // filter

      let javascriptLink = document.querySelector('.tab:nth-child(1)');
      let bootstrapLink = document.querySelector('.tab:nth-child(2)');
      let technologyLink = document.querySelector('.tab:nth-child(3)');
      let jqueryLink = document.querySelector('.tab:nth-child(4)');
      let nodejsLink = document.querySelector('.tab:nth-child(5)');

      javascriptLink.addEventListener('click', () => {
        cardContainer.textContent = "";
        res.data.articles.javascript.forEach(item => {
          cardContainer.appendChild(Card(item));
        });
      })
      bootstrapLink.addEventListener('click', () => {
        cardContainer.textContent = "";
        res.data.articles.bootstrap.forEach(item => {
          cardContainer.appendChild(Card(item));
        });
      })
      technologyLink.addEventListener('click', () => {
        cardContainer.textContent = "";
        res.data.articles.technology.forEach(item => {
          cardContainer.appendChild(Card(item));
        });
      })
      jqueryLink.addEventListener('click', () => {
        cardContainer.textContent = "";
        res.data.articles.jquery.forEach(item => {
          cardContainer.appendChild(Card(item));
        });
      })
      nodejsLink.addEventListener('click', () => {
        cardContainer.textContent = "";
        res.data.articles.node.forEach(item => {
          cardContainer.appendChild(Card(item));
        });
      })
    }).catch(err => { console.error(err); })
  return cardContainer;
}

export { Card, cardAppender }
