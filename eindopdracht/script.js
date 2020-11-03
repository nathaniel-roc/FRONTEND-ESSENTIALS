//voornaam
var voornaam = prompt("Wat is je voornaam?");
var element = document.getElementById("id01");
element.innerHTML = voornaam;

//achternaam
var achternaam = prompt("Wat is je achternaam?");
var element = document.getElementById("id02");
element.innerHTML = achternaam;

//email
var email = prompt("Wat is je email?");
var element = document.getElementById("id03");
element.innerHTML = email;

//woonplaats
var woonplaats = prompt("Wat is je woonplaats?");
var element = document.getElementById("id04");
element.innerHTML = woonplaats;

// achtergrond
var leeftijdBezoeker = prompt("Wat is je leeftijd?");
if (leeftijdBezoeker == 16){
    document.body.style.backgroundColor = "orange";
}
if (leeftijdBezoeker == 17){
    document.body.style.backgroundColor = "blue";
}
if (leeftijdBezoeker == 18){
    document.body.style.backgroundColor = "gold";
}
if (leeftijdBezoeker == 19){
    document.body.style.backgroundColor = "green";
}
if (leeftijdBezoeker == null){
    document.body.style.backgroundColor = "red";
}

//maker
let admin = true;
let adminTeken = "ADMIN = TRUE"
if (admin == true){
    var element = document.getElementById("admin");
    element.innerHTML = adminTeken;
}

//weet ik veel waarom dit erin moet...
let iets = null;

//database
let bezoeker = {
  voornaam: voornaam,
  achternaam: achternaam,
  email: email,
  woonplaats: woonplaats,
  leeftijd: leeftijdBezoeker
}

//log
console.log(bezoeker);
console.log(iets);