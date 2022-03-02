const photographers = [
    {
        "name": "Mimi Keel",
        "id": 243,
        "city": "London",
        "country": "UK",
        "tagline": "See the beauty of daily moments",
        "price": 400,
        "portrait": "MimiKeel.jpg"
    },
    {
        "name": "Ellie-Rose Wilkens",
        "id": 930,
        "city": "Paris",
        "country": "France",
        "tagline": "Capture complexe compositions",
        "price": 250,
        "portrait": "EllieRoseWilkens.jpg"
    },
    {
        "name": "Tracy Galindo",
        "id": 82,
        "city": "Montreal",
        "country": "Canada",
        "tagline": "Freelance photographer",
        "price": 500,
        "portrait": "TracyGalindo.jpg"
    },
    {
        "name": "Nabeel Bradford",
        "id": 527,
        "city": "Mexico City",
        "country": "Mexico",
        "tagline": "Always produce better photography",
        "price": 350,
        "portrait": "NabeelBradford.jpg"
    },
    {
        "name": "Rhode Dubois",
        "id": 925,
        "city": "Barcelona",
        "country": "Spain",
        "tagline": "Memory factory",
        "price": 275,
        "portrait": "RhodeDubois.jpg"
    },
    {
        "name": "Marcel Nikolic",
        "id": 195,
        "city": "Berlin",
        "country": "Germany",
        "tagline": "Eternal pusrsuit of the one great photo",
        "price": 300,
        "portrait": "MarcelNikolic.jpg"
    }
];


// for(starting; condition; incrementOrDecrement) {
//     // Your code.
// }

// i++ -> i = i+1;
// i-- -> i = i-1;

/**


<div class="photographer_section">
  <article>
    <img src="assets/photographers/account.png">
    <h2>My test data</h2>
  </article>
</div>

 */



/**
 * DOM Manipulation
 * 1. Create OR Select if created from HTML
 * 2. Manipulate
 * 3. Append (IF NEEDED)
 */

const photographersWrapper = document.querySelector('.photographer_section');

for(let i = 0; i < photographers.length; i++) {
    const wrapper = document.createElement('a');

    const photographerCard = document.createElement('article');
    

    const image = document.createElement('img');
    image.setAttribute("src","/assets/photographers/Photographers ID Photos/" + photographers[i].portrait);

    const heading = document.createElement('h2');
    heading.innerHTML = photographers[i].name;

    const tagline = document.createElement('p');
    tagline.innerHTML = photographers[i].tagline;
    tagline.classList.add('tagline');
    
    const price = document.createElement('p');
    price.innerHTML = "$" + photographers[i].price + "/day";
    price.classList.add('price');

    const location = document.createElement('p');
    location.innerHTML = photographers[i].city + ', ' + photographers[i].country;
    location.classList.add('location');


    // Append all inner elements to single wrapper
    photographerCard.appendChild(image);
    photographerCard.appendChild(heading);
    photographerCard.appendChild(location);
    photographerCard.appendChild(tagline);
    photographerCard.appendChild(price);

    // Append the card iself to the photogprahers list
    photographersWrapper.appendChild(wrapper);
    wrapper.appendChild(photographerCard);
    

    //redirection to photographer page
    wrapper.addEventListener("click", function(){
        document.location.href = "photographer.html" + "?id=" + photographers[i].id;
    });
};
