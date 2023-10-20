let navLinks = document.getElementById("navLinks");
let menuIcon = document.querySelector(".fa-bars");

menuIcon.addEventListener("click", showMenu);
document.querySelector(".fa-times").addEventListener("click", hideMenu);

function showMenu() {
  navLinks.style.right = "0";
  navLinks.style.display = "block";
}

function hideMenu() {
  navLinks.style.right = "-200px";
  navLinks.style.display = "none";
}

// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

function myFunction() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  // let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let height = document.documentElement.scrollHeight - window.innerHeight;
  let onEstOu = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = onEstOu + "%";
}

// Formulaire de contact

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Empêche le comportement par défaut du formulaire

    // Récupère les valeurs des champs du formulaire
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;


    // Pour cet exemple, nous affichons simplement les données dans la console.
    console.log("Nom:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    // Réinitialise le formulaire après soumission
    contactForm.reset();
});


// Weather app

const apiKey = "96893200dc43f59922d08608c085adbc";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");




async function checkWeather(city){
  const response = await fetch(apiUrl + city + `&appid=${apiKey}` );
  
  if(response.status == 404){
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  }else{
    var data = await response.json();

console.log(data);

document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temp").innerHTML = Math.round(data.main.temp)  + "°c";
document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

// const weatherMain = data.weather[0].main.toLowerCase();

if(data.weather[0].main == "Clouds"){
  weatherIcon.src = "images/clouds.png";
}
else if (data.weather[0].main == "Clear"){
  weatherIcon.src = "images/clear.png";
} else if (data.weather[0].main == "Rain"){
  weatherIcon.src = "images/rain.png";
} else if (data.weather[0].main == "Drizzle"){
  weatherIcon.src = "images/drizzle.png";
}
else if (data.weather[0].main == "Mist"){
  weatherIcon.src = "images/mist.png";
 }
//  else {
// //   weatherIcon.src = "images/default.png"; 
// // }

document.querySelector(".weather").style.display = "block";
document.querySelector(".error").style.display = "none";
  }
  


}
searchBtn.addEventListener("click", ()=>{
  checkWeather(searchBox.value);
})
