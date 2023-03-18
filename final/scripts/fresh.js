const url = "https://brotherblazzard.github.io/canvas-content/fruit.json"

async function getApi() {
    try {
        const response = await fetch(url)
        if (response.ok) {
            const data = await response.json()
            //console.log(data)
            displayInfo(data)
        } else {
            throw Error (await response.text())
        }
    } catch (error) {
        console.log(error)
    }
}
getApi()

const displayInfo = (information) => {
    const cards = document.querySelector('#fruit1')
    const card2 = document.querySelector('#fruit2')
    const card3 = document.querySelector('#fruit3')
    //const theOption = document.getElementById('options')
    information.forEach((info) => {
        let names = document.createElement('option')
        let name2 = document.createElement('option')

        let name3 = document.createElement('option')
        let group3 = document.createElement('option')

        let group = document.createElement('option')
        let group2 = document.createElement('option')

        names.textContent = info.name
        name2.textContent = info.name
        name3.textContent = info.name

        names.setAttribute('value', info.name)
        name2.setAttribute('value', info.name)
        name3.setAttribute('value', info.name)

        group3.append(name3)
        group2.appendChild(name2)
        group.appendChild(names)

        cards.appendChild(group)
        card2.appendChild(group2)
        card3.appendChild(group3)

        //Get date and time
        const now = Date.now(); // derive the current date using a date object
        const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);



        //Get info from form
        const form = document.getElementById('myForm');

        form.addEventListener('submit', function(event) {
            event.preventDefault(); // prevent form from submitting
            


            const thankYou = document.getElementById('thankYou')
            const fname = document.getElementById('fname').value;
            const iemail = document.getElementById('iemail').value;
            const imessage = document.getElementById('instructions').value;
            const iphone = document.getElementById('iphone').value
            

            const name = document.getElementById('firstName')
            const email = document.getElementById('email')
            const phone = document.getElementById('phone')
            const message = document.getElementById('instr')
            const theDate = document.getElementById('orderDate')

           
            thankYou.innerHTML = `Thank you for your order`
            theDate.innerHTML = `<strong>Order placed on:</strong> ${fulldate}`
            name.innerHTML = `<strong>Name:</strong> ${fname}`
            email.innerHTML = `<strong>Email:</strong> ${iemail}`
            phone.innerHTML = `<strong>Phone:</strong> ${iphone}`
            message.innerHTML = `<strong>Special Instructions:</strong> ${imessage}`
            

            const selectElements = document.querySelectorAll("select");
            const output = document.getElementById('selectFruit1')
            const selectedOptions = [];
            // Loop through each select element and get the selected option
            for (let i = 0; i < selectElements.length; i++) {
                const selectElement = selectElements[i];
                const selectedOption = selectElement.options[selectElement.selectedIndex].value;
                selectedOptions.push(selectedOption);
                output.innerHTML = `Selected options: <strong>${selectedOptions.join(', ')}</strong>`;

                const h2 = document.getElementById('nutritionH2')
                h2.innerHTML = `Nutrition per fruit selected`

                const selectedFruits = [];
                
                for (let s = 0; s < selectedOptions.length; s++) {
                    const selectedFruit = information.find(fruit => fruit.name === selectedOptions[s]);
                    selectedFruits.push(selectedFruit);
                    
                    
                const cartao = document.createElement('ul');
                    for (let j = 0; j < selectedFruits.length; j++) {
                        const selectedFruit = selectedFruits[j];
                        const nutrition = selectedFruit.nutritions;

                        
                        const result = document.getElementById('result')
                        result.innerHTML = ''
                        // create elements to display nutrition information
                        
                        const theCarb = document.createElement('li');
                        const theFat = document.createElement('li');
                        const theProtein = document.createElement('li');
                        const theCalorie = document.createElement('li');
                        const theSugar = document.createElement('li');
                        const theFruit = document.createElement('div')

                        theFruit.classList.add('selectedFruit')
                        
                        
                        
                        // set the text content of each element to the nutrition information
                        theFruit.textContent = `--- ${selectedFruit.name} ---`
                        theCarb.textContent = `Carbohydrates: ${nutrition.carbohydrates}g`;
                        theFat.textContent = `Fat: ${nutrition.fat}g`;
                        theProtein.textContent = `Protein: ${nutrition.protein}g`;
                        theCalorie.textContent = `Calories: ${nutrition.calories}kcal`;
                        theSugar.textContent = `Sugar: ${nutrition.sugar}g`;
                        
                        //theFruit.textContent = `${selectedOptions[s]}`

                        theCarb.style.marginTop = '10px';
                        theFruit.style.marginTop = '10px'
                        // append the nutrition information elements to the card
                        
                        //cartao.appendChild(theFruit)
                        cartao.appendChild(theFruit)
                        cartao.appendChild(theCarb);
                        cartao.appendChild(theFat);
                        cartao.appendChild(theProtein);
                        cartao.appendChild(theCalorie);
                        cartao.appendChild(theSugar);

                        // const formData = new FormData(form);

                        // scroll down to the bottom of the page
                        //Get the element i want to auto scroll to
                        const element = document.querySelector('.theOrder')
                        const position = element.offsetTop
                        window.scrollTo({
                            top: position,
                            behavior: 'smooth'
                        });

                        
                    }      

        result.appendChild(cartao);
        
        
}
        }
})
    }
    )}

// const form = document.querySelector('form');
// const submitButton = form.querySelector('button[type="submit"]');

// submitButton.addEventListener('click', (event) => {
//   // prevent the form from submitting
//   event.preventDefault();

//   // get the form information and print it
//   const formData = new FormData(form);
//   console.log(formData);

//   // scroll down to the bottom of the page
//   window.scrollTo({
//     top: document.body.scrollHeight,
//     behavior: 'smooth'
//   });
// });





// const visitDisplay = document.getElementById('visits');
// let numVisits = Number(window.localStorage.getItem('visits-ls'));

// if (numVisits !== 0) {
//     visitDisplay.textContent = numVisits;

// }else {
//     visitDisplay.textContent = `This is your first visit!`
// }
// numVisits++;
// localStorage.setItem('visits-ls', numVisits);