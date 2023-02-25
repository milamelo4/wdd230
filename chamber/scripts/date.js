//Thank you time
let subTime = document.getElementById('dateTime');
subTime.innerHTML = date.toLocaleString();

//Get user's first name and last from the form. Since we use a method action 'get' on the form we can search any info entered that shows up un the URL window.Then use the method URLSearchParams.
let fname = document.getElementById('fname');


const params = new
URLSearchParams(window.location.search)
const naMe = params.get('fname')
const last = params.get('lname')
fname.innerHTML = `${naMe} ${last},`