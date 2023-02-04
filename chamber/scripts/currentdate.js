// Getting the current year
const date1 = document.querySelector("#date1");
date1.innerHTML = new Date().getFullYear();


const date2 = document.querySelector("#date2");
date2.innerHTML = new Date(document.lastModified).toLocaleDateString("en-US");

const datefield = document.querySelector("#date"); // Select the element to manipulate

const now = Date.now(); // derive the current date using a date object
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);

datefield.innerHTML =  fulldate;

//Display a banner on Mondays or Tuesdays only at the very top of the page that says "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m. 
// Sunday = 0
// Monday = 1
// Tuesday = 2
// Wednesday = 3
// Thursday = 4
// Friday = 5
// Saturday = 6

const date = new Date();
const week = date.getDay()
let message = document.querySelector('#message')

if (week === 1 || week === 6) {
    message.style.display = 'flex'

}
else {
    message.style.display = 'none'
}


// Hamburger menu
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}
const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;

