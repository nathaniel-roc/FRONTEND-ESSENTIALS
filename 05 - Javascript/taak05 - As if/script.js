let nathaniel = {
voornaam: "nathaniel",
achternaam: "de Waal",
leeftijd: "16",
ikBenStemGerechtig: "false",
ikMagLegaalAlcoholKopen: "false",
ikMagBrommerRijden: "false",
SoftwareOntwikkeling: "true"};
let stemGerechtigeleeftijd = 18;
if (nathaniel.leeftijd == stemGerechtigeleeftijd){
    alert("Jij bent mag stemmen met de verkiezingen");
}
if (nathaniel.leeftijd != stemGerechtigeleeftijd){
    alert("Jij bent mag niet stemmen met de verkiezingen");
}