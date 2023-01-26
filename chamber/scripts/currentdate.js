// Getting the current year
const date1 = document.querySelector("#date1");
date1.innerHTML = new Date().getFullYear();


const date2 = document.querySelector("#date2");
date2.innerHTML = new Date(document.lastModified).toLocaleDateString("en-US");

const datefield = document.querySelector("#date"); // Select the element to manipulate

const now = Date.now(); // derive the current date using a date object
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);

datefield.innerHTML = `Today is ${fulldate}`;

