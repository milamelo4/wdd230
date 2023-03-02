// Grid and List button
const gridbutton = document.querySelector('#grid');
const listbutton = document.querySelector('#list');
const display = document.querySelector('div.grid')

gridbutton.addEventListener('click', () => {
    display.classList.add('grid');
    display.classList.remove('list');
})

listbutton.addEventListener('click', showList);

function showList() {
    display.classList.add('list');
    display.classList.remove('grid')
}

// API
const url = "https://milamelo4.github.io/wdd230/chamber/json/data.json";

async function getBusiness() {
    const response = await fetch(url)
    const data = await response.json()
    console.log(data.business)
    displayInfo(data.business)
};
getBusiness() 

const displayInfo = (information) => {
    const cards = document.querySelector('div.grid');
    information.forEach((element) => {
        let card = document.createElement('section');
        let picture = document.createElement('img');
        let h3 = document.createElement('h3');
        let info = document.createElement('p');
        let contact = document.createElement('p');
        let site = document.createElement('a');
        let member = document.createElement('p')

        h3.textContent = `${element.name}`;
        info.textContent = `${element.info}`;
        contact.textContent = `${element.contact}`;
        site.textContent = `${element.website}`;
        member.textContent = `Membership Level: ${element.membership}`

        card.classList.add('direc-page')
        site.setAttribute('href', element.website)
        picture.setAttribute('src', element.image);
        picture.setAttribute('alt', `Business picture ${element.name}`);
        picture.setAttribute('loading', 'lazy');
        picture.setAttribute('width', '64')

        card.appendChild(picture)
        card.appendChild(h3);
        card.appendChild(info);
        card.appendChild(contact);
        card.appendChild(site)
        card.appendChild(member)

        cards.appendChild(card)
    })
}