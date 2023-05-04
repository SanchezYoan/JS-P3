
  //---------------------------- //
 // Rappel des types de données //
//---------------------------- //

let string = "Chaine";
let number = 25;
let boolean = true;

// type > object
let maVariable; // undifined

// typeof > savoir le type

let array = ["Bordeaux", "Toulouse", "Nantes"];
// array[0] Premier élément de l'objet

let array2 = ["Bordeaux", 24, true, [1,2], { nom: "Denis" }];
// console.log(array[4].nom) > "Denis"

let object = {
    pseudo: "Denis",
    age: 33,
    technos: ["Javascript", "React", "Nodejs"],
    admin: false
}

// console.log(object.technos[0]) > "Javascript"

// ajouter ou remplacer une donnée
// object.adresse =  "22 rue du code";

let data = [
    {
        pseudo: "Denis",
        age: 33,
        technos: ["Javascript", "React", "Nodejs"],
        admin: false,
    },
    {
        pseudo: "Samia",
        age: 24,
        technos: ["Css", "React", "Nodejs"],
        admin: false,
    },
    {
        pseudo: "Nicolas",
        age: 42,
        technos: ["Php", "React", "Nodejs"],
        admin: true,
    },
]

// data[2].technos[0] > "Php"


  //---------------------------- //
 // Les structures de controle  //
//---------------------------- //

if(data[0].age > data[1].age) {
    // console.log(data[0].pseudo + " est plus agé que " + data[1].pseudo);
} else {
    // valeur si faux
}

// if (valeur si vrai) 
//     valeur si vrai
// else
//     valeur si faux

// valeur à tester ? si vrai : si faux

let w = 0;

// while > tant que ...
while (w < 10) {
    w++
    // console.log("la valeur de w est de " + w)
}

// Do while
let d = 0;

do {
    d++
    // console.log(d)
} while (d < 5);

// Les boucle for
for (const user of data) {
    document.body.innerHTML += `<li>${user.pseudo} - ${user.age} ans</li>`
}

// on déclare la valeur de i | jusqu'ou on boucle | on incrémente i si la condition n'est pas remplie
for (i = 0;  i < data.length; i++) {
    // console.log(data[i].technos[0]);
    document.body.innerHTML += "<h2>" + data[i].pseudo + "</h2>";
}

// Switch
document.body.addEventListener("click", (e) => {
    console.log(e.target.id);

    switch (e.target.id) {
        case "javascript":
            document.body.style.background = "yellow";
            break;
        case "php":
            document.body.style.background = "blue";
            break;
        case "python":
            document.body.style.background = "red";
            break;
        default: null;
    }
});

  //---------------- //
 // Méthodes String //
//---------------- //

let string2 = "Javascript est un language orienté objet"

// eval > concaténation | parseInt > converti en string
// console.log(eval(parseInt("1") + 2));
// Not a number > renboi true ; false
// console.log(isNaN(""));
// console.log(string2[string2.length - 1]);

// Chercher l'index > retourn -1 si inconnu
// console.log(string2.indexOf("x"));

// Slice > couper de 5 à 17
let newString = string2.slice(5, 17)
// console.log(newString);

// Split > découpe entre chaque "i"
// console.log(string2.split("i"))

// mettre en minuscule et en ..
// console.log(string2.toLowerCase());
// Majuscule.
// console.log(string2.toUpperCase());
// Remplace Javascrit par php
// console.log(string2.replace("Javascript", "PHP"));

  //----------------- //
 // Méthodes Numbers //
//----------------- //

let number2 = 42.1234
let numberString = "42.12 est un chiffre."

// Garde les deux chiffres après la virgule
// console.log(number2.toFixed(2));
// Transforme un nombre les chiffres
// console.log(parseInt(numberString));
// Récupère des nombres avec une virgule
// console.log(parseFloat(numberString));

// Math
// console.log(MAth.PI)
// Arrondie au plus proche
// console.log(Math.round(4.6))
// au plus bas
// console.log(Math.floor(4.2));
// au plus haut
// console.log(Math.ceil(4.9));
// Genere un chiffre en 0 et 100
// console.log(Math.random() * 50);


  //---------------- //
 // Méthodes Arrays //
//---------------- //

let array3 = ["Javascript", "Php", "Python"];
let array4 = ["Ruby", "Solidity"];

// concatene array3 avec array 4
// let newArray = array3.concat(array4);
// console.log(newArray)

// Destructure un tableau
let newArray = [...array3, ...array4]
// console.log(newArray)

// Permet de destructurer un tableau et séparer les éléments avec "&"
// console.log(array3.join("&"))

// Enumerer en nommant chaques éléments "languages"
// array3.forEach((languages) => console.log(languages));

// Vérifier si ils sont tous "Php"
// console.log(array3.every((language) => language === "Php"));
// Un seul
// console.log(array3.some((language) => language === "Php"));

// Enlever le premier element du tableau
let shift = array3.shift()
// retirer le dernier element
let pop = array3.pop()

// Remplace à partir de l'index "1", nombre d'element "2", "new element"
const restArray = array3.splice(1, 2, "C++")

// IMPORTANT //
let arrayNumber = [4, 14, 25, 12, 1];
// additionne tous les elements d'un tableau selon opérateur
// console.log(arrayNumber.reduce((x, y) => x + y ));

let addElement = arrayNumber.push("Coucou")
// Range dans l'ordre croissant "a - b" ou décroissant "b - a"
// console.log(arrayNumber.sort((a, b) => a - b));
// Filtrer
let filter = arrayNumber.filter((number) => number > 10);
// MAP > liste les élement
// arrayNumber.map((number) => document.body.innerHTML += `
// <li>${number}</li>`).join("");

  //----------------- //
 // Méthodes objects //
//----------------- //

// document.body.innerHTML = data
// filtre les prenoms qui possede un a
  // .filter((user) => user.pseudo.includes("a"))
// Range du plus agée au plus jeune
  // .sort((a, b) => b.age - a.age)
  // .map(
  //   (user) =>
  //     `
  //   <div class="user-card">
  //     <h2>${user.pseudo}</h2>
  //     <p>Age : ${user.age} ans</p>
  //     <p>Status : ${user.admin ? "Modérateur" : "Membre"}</p>
  //   </div>
  // `
//   test si user.admin = true ? si oui : sinon
  // )
  // .join("");

  //---------- //
 // Les dates //
//---------- //

// date classique
let date = new Date();

// Timestamp
let timestanp = Date.parse(date);
// console.log(timestanp)

// IsoString
const iso = date.toISOString();

// Formate la date
function dateParser(chaine) {
  let newDate = new Date(chaine).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric"

  })
  return newDate


}

// console.log(dateParser(date))


  //-------------- //
 // Destructuring //
//-------------- //

let moreData = {
  destVar : ["Element 1", "Element 2"]
}

const { destVar } = moreData

// console.log(moreData.destVar[0]);
// console.log(destVar);

let array5 = [70, 80, 90]
// isoler données d'un tableau dans une variable
let [x, y, z] = array5
// console.log(x, y, z);

// Formate la date en Fr
const dateDestructuring = (chaine) => {
  let newDate = chaine.split("T")[0];
  let [year, month, day] = newDate.split("-");

  return [day, month, year].join("/")
}

// console.log(dateDestructuring(iso));

  //--------- //
 // Datasets // ---> données à mettre dans des balise
//--------- //

const h3js = document.getElementById("javascript");
// console.log(h3js);

const h3 = document.querySelectorAll("h3");

// h3.forEach((language) => console.log(language.dataset.lang));

  //---------- //
 // Les Regex // ---> test chaine de caractere
//---------- //

let mail = "from_scratch133@gmail.com";
// search => renvoi 0 ou -1
mail.search(/frscceeceom/);
// replace
mail.replace(/from/, "de");
// match => renvoi un tableau ou null
mail.match(/SCratch/i);
// cherche si une ou plusieurs lettres/chiffres figure dans la variable
mail.match(/[zg1]/);
// cherche si il y a un chiffre
mail.match(/\d/);
// cherche une lettre
mail.match(/[a-z]/)

// 1st part => \w tous les caracteres (chiffre ou lettre), "_" ou "-".
// 2nd part => ^ = start, "@", tous les caracteres et "-".
// 3rd part => "." lettre comprise entre a et z, de 2 à 4
// $ = fin, i => pas sensible à la casse (lower, upper)
mail.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i);

// Separateur
let separator = 265264849;
// Ajoute un espace tous les milles
separator.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " " );