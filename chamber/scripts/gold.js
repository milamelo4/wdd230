const urls = "https://milamelo4.github.io/wdd230/chamber/json/data.json";
//const spotlight = document.getElementById('spotlight')
async function getMember() {
    try {
        const response = await fetch(urls)
        if (response.ok) {
            const data = await response.json()
            display(data)
        } else {
            throw Error(await response.text())
        }
    } catch (error) {
        console.log(error)
    }
}
getMember() 

const display = (data) => {
    const cards = document.querySelector('#spotlight');
   
        const special = data.business.filter((memb) => memb.membership === 'Gold' || memb.membership === 'Silver')
        //console.log(special)
        for (let i = 0; i < 3; i++) {
            const randomIndex = Math.floor(Math.random() * special.length);  
            //const randomCompany = special[randomIndex];
            
            let icon = document.createElement("img"); 
			let card = document.createElement("section");
			let name = document.createElement("h2");
			let website = document.createElement("a");
			let info = document.createElement("p");
			let contact = document.createElement("p");
            let member = document.createElement("p");
            let addr = document.createElement("p")
            let list = spotlight.classList

            name.textContent = special[randomIndex].name
            info.textContent = special[randomIndex].info
            website.textContent = special[randomIndex].website
            contact.textContent = special[randomIndex].contact
            member.textContent = `Membership Level: ${special[randomIndex].membership}`
            addr.textContent = special[randomIndex].address
            list.add('spots')
            

            icon.setAttribute('src',special[randomIndex].image)
            icon.setAttribute('alt',`${special[randomIndex].image}'s icon`)
            icon.setAttribute('loading', 'lazy')
            icon.setAttribute('width', '64')
            website.setAttribute('href', special[randomIndex].website)
            
            card.appendChild(icon)
            card.appendChild(name)
            //card.appendChild(info)
            card.appendChild(addr)
            card.appendChild(contact)
            card.appendChild(website)
            card.appendChild(member)

            cards.appendChild(card)
            special.splice(randomIndex,1);

        }
    };



            

            


 
      
   
  
 
    
    

