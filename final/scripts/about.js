//Set parallax img to loading lazy
const img = document.getElementById('img01');

img.setAttribute('loading', 'lazy');
img.setAttribute('width', '900');

const reply = document.querySelector('.contact-form');
const answer = document.getElementById('contact-form');

//Add a reply for contact form
reply.addEventListener('submit', (event) => {
    event.preventDefault();
    answer.textContent = 'Thank you for contacting us! You should hear from us soon.'

});