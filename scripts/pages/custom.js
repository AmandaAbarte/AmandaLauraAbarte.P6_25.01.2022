const photographers = [
  {
    name: "Mimi Keel",
    id: 243,
    city: "London",
    country: "UK",
    tagline: "See the beauty of daily moments",
    price: 400,
    portrait: "MimiKeel.jpg",
  },
  {
    name: "Ellie-Rose Wilkens",
    id: 930,
    city: "Paris",
    country: "France",
    tagline: "Capture complexe compositions",
    price: 250,
    portrait: "EllieRoseWilkens.jpg",
  },
  {
    name: "Tracy Galindo",
    id: 82,
    city: "Montreal",
    country: "Canada",
    tagline: "Freelance photographer",
    price: 500,
    portrait: "TracyGalindo.jpg",
  },
  {
    name: "Nabeel Bradford",
    id: 527,
    city: "Mexico City",
    country: "Mexico",
    tagline: "Always produce better photography",
    price: 350,
    portrait: "NabeelBradford.jpg",
  },
  {
    name: "Rhode Dubois",
    id: 925,
    city: "Barcelona",
    country: "Spain",
    tagline: "Memory factory",
    price: 275,
    portrait: "RhodeDubois.jpg",
  },
  {
    name: "Marcel Nikolic",
    id: 195,
    city: "Berlin",
    country: "Germany",
    tagline: "Eternal pusrsuit of the one great photo",
    price: 300,
    portrait: "MarcelNikolic.jpg",
  },
];

const photographersWrapper = document.querySelector(".photographer_section");

//for each phototgrapher create card
for (let i = 0; i < photographers.length; i++) {
  const photographerCard = document.createElement("article");
  const photographerFocus = document.createElement("a");
  photographerFocus.setAttribute("tabindex", "0");

  const image = document.createElement("img");
  image.setAttribute(
    "src",
    "/assets/photographers/Photographers ID Photos/" + photographers[i].portrait
  );
  image.setAttribute("alt", photographers[i].name);

  const heading = document.createElement("h2");
  heading.innerHTML = photographers[i].name;

  const tagline = document.createElement("p");
  tagline.innerHTML = photographers[i].tagline;
  tagline.classList.add("tagline");

  const price = document.createElement("p");
  price.innerHTML = "$" + photographers[i].price + "/day";
  price.classList.add("price");

  const location = document.createElement("p");
  location.innerHTML = photographers[i].city + ", " + photographers[i].country;
  location.classList.add("location");

  // Append the card iself to the photogprahers list
  photographersWrapper.appendChild(photographerCard);
  photographerCard.appendChild(photographerFocus);

  // Append all inner elements to single wrapper
  photographerFocus.appendChild(image);
  photographerFocus.appendChild(heading);
  photographerCard.appendChild(location);
  photographerCard.appendChild(tagline);
  photographerCard.appendChild(price);


  //redirects to photographer's page according to id
  function openPhotographer() {
    document.location.href = "photographer.html" + "?id=" + photographers[i].id;
  }
  
  //redirection to photographer page
  photographerFocus.addEventListener("click", () => {
    openPhotographer();
  });
  photographerFocus.addEventListener("keyup", (event) => {
    var name = event.key;
    if (name === "Enter") {
      openPhotographer();
    }
  });
}
