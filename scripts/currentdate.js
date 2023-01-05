// const options = {
//   month: 'short', day: 'numeric', year: 'numeric'
// };
// const newdate = new Date().toLocaleDateString('en-us', options);
// console.log(newdate)

// document.getElementById('date').innerHTML = `Last Updated: ${newdate}`

//alert(document.lastModified);
// returns: Tuesday, December 16, 2017 11:09:42

let oLastModif = new Date(document.lastModified);
let nLastModif = Date.parse(document.lastModified);
const lastVisit = parseFloat(document.cookie.replace(/(?:(?:^|.*;)\s*last_modif\s*=\s*([^;]*).*$)|^.*$/, "$1"));
const lastModif = Date.parse(document.lastModified);

if (isNaN(lastVisit) || lastModif > lastVisit) {
  document.cookie = `last_modif=${Date.now()}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=${location.pathname}`;

  if (isFinite(lastVisit)) {
    alert("This page has been changed!");
  }
}

document.getElementById('date').innerHTML = `Last Updated: ${oLastModif}`

