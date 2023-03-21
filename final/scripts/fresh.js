const url = "https://brotherblazzard.github.io/canvas-content/fruit.json"

async function getApi() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data)
            displayInfo(data)
        } else {
            throw Error (await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}
getApi();

const displayInfo = (information) => {
    const cards = document.querySelector('#fruit1');
    const card2 = document.querySelector('#fruit2');
    const card3 = document.querySelector('#fruit3');

    information.forEach((info) => {
        createOptions(info, cards, card2, card3);
    });

    const form = document.getElementById('myForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        updateInfo(information);
        const selectElements = document.querySelectorAll("select");
        const selectedOptions = [];
        for (let i = 0; i < selectElements.length; i++) {
            const selectElement = selectElements[i];
            const selectedOption = selectElement.options[selectElement.selectedIndex].value;
            selectedOptions.push(selectedOption);
        }
        displaySelectedFruits(selectedOptions, information);
        scrollToBottom();
    });
};
const createOptions = (info, cards, card2, card3) => {
    const names = document.createElement('option');
    const name2 = document.createElement('option');
    const name3 = document.createElement('option');

    names.textContent = info.name;
    name2.textContent = info.name;
    name3.textContent = info.name;

    names.setAttribute('value', info.name);
    name2.setAttribute('value', info.name);
    name3.setAttribute('value', info.name);

    const group3 = document.createElement('option');
    const group2 = document.createElement('option');
    const group = document.createElement('option');

    group3.append(name3);
    group2.appendChild(name2);
    group.appendChild(names);

    cards.appendChild(group);
    card2.appendChild(group2);
    card3.appendChild(group3);
};
const updateInfo = (information) => {
    const thankYou = document.getElementById('thankYou');
    const fname = document.getElementById('fname').value;
    const iemail = document.getElementById('iemail').value;
    const imessage = document.getElementById('instructions').value;
    const iphone = document.getElementById('iphone').value;

    const name = document.getElementById('firstName');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const message = document.getElementById('instr');
    const theDate = document.getElementById('orderDate');

    const now = Date.now();
    const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now)

    thankYou.innerHTML = `Thank you for your order`
    theDate.innerHTML = `<strong>Order placed on:</strong> ${fulldate}`
    name.innerHTML = `<strong>Name:</strong> ${fname}`
    email.innerHTML = `<strong>Email:</strong> ${iemail}`
    phone.innerHTML = `<strong>Phone:</strong> ${iphone}`
    message.innerHTML = `<strong>Special Instructions:</strong> ${imessage}`
};
const displaySelectedFruits = (selectedOptions, information) => {
    const h2 = document.getElementById('nutritionH2')
    h2.innerHTML = `Nutrition per fruit`

    const selectedFruits = [];
    const selecCarbs = []
    const selecFat = []
    const selecProtein = []
    const selecCalories = []
    const selecSugar = []
    const selecNames = []

    const drinkChoice = document.getElementById('drinkName');
    for (let s = 0; s < selectedOptions.length; s++) {
        const selectedFruit = information.find(fruit => fruit.name === selectedOptions[s]);
        selectedFruits.push(selectedFruit);
    };
    
    const cartao = document.createElement('ul');
    for (let j = 0; j < selectedFruits.length; j++) {
        const selectedFruit = selectedFruits[j];
        const nutrition = selectedFruit.nutritions;

        const fruitsName = selectedFruit.name
        const carbs = nutrition.carbohydrates
        const fat = nutrition.fat
        const protein = nutrition.protein
        const calorie = nutrition.calories
        const sugar = nutrition.sugar
        
        const result = document.getElementById('result');
        result.innerHTML = ''

        const theCarb = document.createElement('li');
        const theFat = document.createElement('li');
        const theProtein = document.createElement('li');
        const theCalorie = document.createElement('li');
        const theSugar = document.createElement('li');
        const theFruit = document.createElement('div')

        theFruit.classList.add('selectedFruit')
        
        theFruit.textContent = `--- ${selectedFruit.name} ---`
        theCarb.textContent = `Carbohydrates: ${nutrition.carbohydrates}g`;
        theFat.textContent = `Fat: ${nutrition.fat}g`;
        theProtein.textContent = `Protein: ${nutrition.protein}g`;
        theCalorie.textContent = `Calories: ${nutrition.calories}kcal`;
        theSugar.textContent = `Sugar: ${nutrition.sugar}g`;
        
        theCarb.style.marginTop = '10px';
        theFruit.style.marginTop = '10px'

        selecNames.push(fruitsName)
        selecCarbs.push(carbs)
        selecFat.push(fat)
        selecCalories.push(calorie)
        selecProtein.push(protein)
        selecSugar.push(sugar)

        cartao.appendChild(theFruit)
        cartao.appendChild(theCarb);
        cartao.appendChild(theFat);
        cartao.appendChild(theProtein);
        cartao.appendChild(theCalorie);
        cartao.appendChild(theSugar);
        
    }
result.appendChild(cartao);     
const totalCarbs = document.getElementById('totalCarb');   
const totalFat = document.getElementById('totalFat');
const totalProtein = document.getElementById('totalProtein');
const totalCalories = document.getElementById('totalCalories');
const totalSugar = document.getElementById('totalSugar');

let sumCarbs = sum(selecCarbs);
let sumFat = sum(selecFat);
let sumProtein = sum(selecProtein);
let sumCalories = sum(selecCalories);
let sumSugar = sum(selecSugar);

drinkChoice.innerHTML = `Drink choice: "${selecNames.join(' ')}"`
totalCarbs.innerHTML = `<strong>Total carbohydrates:</strong> ${sumCarbs}g`
totalFat.innerHTML = `<strong>Total fat:</strong> ${sumFat}g`
totalProtein.innerHTML = `<strong>Total protein:</strong> ${sumProtein}g`
totalCalories.innerHTML = `<strong>Total calories:</strong> ${sumCalories}kcal`
totalSugar.innerHTML = `<strong>Total sugar:</strong> ${sumSugar}g`            


   
    


    
}
const sum = function(selection) {
    const num = selection.reduce((acc, cur) => acc + cur, 0) 
    return `${num.toFixed(2)}`
};

const scrollToBottom = function() {
    const element = document.querySelector('.theOrder')
    const position = element.offsetTop
    window.scrollTo({
        top: position,
        behavior: 'smooth'
    });
    return position

}
