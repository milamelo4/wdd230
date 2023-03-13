const date = new Date();
const week = date.getDay()
//Weekday
let message = document.querySelector('#message')
let weekday;
if (week === 0) {
    weekday = 'Sunday 🍎'
} else if (week == 1) {
    weekday = 'Monday 🍋'
} else if (week == 2) {
    weekday = 'Tuesday 🍓'
} else if (week == 3) {
    weekday = 'Wednesday 🍹'
} else if (week == 4) {
    weekday = 'Thursday 🍍'
} else if (week == 5) {
    weekday = 'Friday 🥑 '
} else if (week == 6) {
    weekday = 'Saturday 🍒 '
}    
message.innerHTML = `Happy ${weekday}`

//Last Modified
const date2 = document.querySelector("#date2");
date2.innerHTML = new Date(document.lastModified).toLocaleDateString("en-US");

// Hamburger menu
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}
const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;