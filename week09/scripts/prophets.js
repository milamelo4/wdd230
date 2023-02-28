const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

async function getProphetData() {
  const response = await fetch(url);
  const data = await response.json();
  //console.table(data.prophets);
  displayProphets(data.prophets);
}

getProphetData();


const displayProphets = (prophets) => {
  const cards = document.querySelector('div.cards'); // select the output container element

  prophets.forEach((prophet) => {
    // Create elements to add to the div.cards element
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');
    let bday = document.createElement('p');
    let placeBirth = document.createElement('p')
    let order = document.createElement('p')
    

    // Build the h2 content out to show the prophet's full name - finish the template string
    h2.textContent = `${prophet.name} ${prophet.lastname}`;
    bday.textContent = `Date of Birth: ${prophet.birthdate}`;
    placeBirth.textContent = `Place of Birth: ${prophet.birthplace}`
    order.textContent = `${prophet.order} `
    // let ordering;
    if (prophet.order == 1) {
      prophet.ordering = 'st Latter-day President`'

    }else if (prophet.order == 2) {
      prophet.ordering = 'nd Latter-day President`'

    }else if (prophet.order == 3) {
      prophet.ordering = 'rd Latter-day President`'

    }else {
      prophet.ordering = 'th Latter-day President`'
    }


    // Build the image portrait by setting all the relevant attribute
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname} ${prophet.order}${prophet.ordering} `);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '340');
    portrait.setAttribute('height', '440');

    // Append the section(card) with the created elements
    card.appendChild(h2);
    card.appendChild(portrait);
    card.appendChild(bday)
    card.appendChild(placeBirth)

    cards.appendChild(card);
  } // end of forEach loop
)} // end of function expression


