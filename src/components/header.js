const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  // header
  const headerDiv = document.createElement('div');
  headerDiv.classList.add('header');

  // date
  const newDate = document.createElement('span');
  newDate.classList.add('date');
  newDate.textContent = date;
  headerDiv.appendChild(newDate);

  // title
  const newTitle = document.createElement('h1');
  newTitle.textContent = title;
  headerDiv.appendChild(newTitle);

  // temp
  const newTemperture = document.createElement('span');
  newTemperture.classList.add('temp');
  newTemperture.textContent = temp;
  headerDiv.appendChild(newTemperture);

  return headerDiv;
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  const headerContainer = document.querySelector(selector);
  headerContainer.appendChild(Header('Lambda Times', 'JANUARY 6, 2021', '26°'));
  return headerContainer;
}

export { Header, headerAppender }
