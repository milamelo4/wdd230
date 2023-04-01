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

// Get all images with data-src attribute. The 'img[data-src]' will look at ever img that has the data-src attribute. Anything inside a bracket means is looking for a attribute.
const imagesToLoad = document.querySelectorAll("img[data-src]");

//Optional parameter for IntersectionalObserver
const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 50px 0px"
};

const loadImages = (image) => {
    image.setAttribute("src", image.getAttribute("data-src"));
    image.onload = () => {
        image.removeAttribute("data-src")
    };
};

// Check if Intersection Observer is supported
if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((items, observer) => {
        items.forEach(item => {
            if (item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        });
    }, imgOptions);

    imagesToLoad.forEach(img => {
        observer.observe(img)
    });
}else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    })
}