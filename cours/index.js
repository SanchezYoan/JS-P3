
// Rappel des types de données

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


// --------------------------
// Les structures de controle 
// --------------------------

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

// Méthode String

let string2 = "Javascript est un language orienté objet"

// eval > concaténation
console.log(eval(parseInt("1") + 2));