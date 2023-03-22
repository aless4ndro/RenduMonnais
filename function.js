/*Créer les 2 fonctions suivantes :
 produit(x, y) qui retourne le produit des 2 variables x, y passées en paramètre.
 afficheImg(image) qui affiche l’image passée en paramètre.

 Image ----------------------------


function produit(x, y) {
    return 7 * 5;
}

alert("le produit de 7 et 5 est :"  + produit(7, 5));

function afficheImg(image) {
    return image;
}

alert("l'image est :" + afficheImg("image.jpg"));*/




//Exercice 2 - Table de multiplication
/*
let nb = prompt("Entrez un nombre :");
let i = 0;
let result = "";

function table(nb, i) {
    return nb * i;
}

while (i <= 10) {
    result = result + nb + " x " + i + " = " + table(nb, i) + " ";
    i++;
}

alert(result);*/



//Exercice 3 - Compter le nombre de lettres

/*let mot = prompt("Entrez un mot :");
let lettre = prompt("Entrez une lettre :");

function compteurLetre(mot, lettre) {
    let i = 0;
    let result = 0;
    while (i < mot.length) {
        if (mot[i] === lettre) {
            result++;
        }
        i++;
    }
    return result;
}

alert(" le nombre de lettre " + lettre + " dans le mot " + mot + " est de : " + compteurLetre(mot, lettre));*/


// Menu

/*
let choix = prompt("1 - Table de multiplication\n2 - Compter le nombre de lettres\n3 - Moyenne des multiples de 3\n4 - Somme et moyenne\n5 - Quitter");

let n = parseInt(prompt("Veuillez saisir un nombre entier : "));
function multiples() {

let i = 1;
let somme = 0;
let compteur = 0;

while (i <= n) {
    if (i % 3 == 0) {
        somme += i;
        compteur++;
    }

    i++;
}

alert("La somme des multiples de 3 est de : " + somme + " et la moyenne est de : " + somme / compteur);
}


function sommeMoyenne() {


    let i = 1;
    let somme = 0;
    let compteur = 0;

    while (i <= n) {
        somme += i;
        compteur++;
        i++;
    }

    alert("La somme des nombres est de : " + somme + " et la moyenne est de : " + somme / compteur);
}

//Nombre de voyelles.
    
function voyelles() {
    let mot = prompt("Veuillez saisir un mot : ");
    let i = 0;
    let compteur = 0;

    while (i < mot.length) {
        if (mot[i] == "a" || mot[i] == "e" || mot[i] == "i" || mot[i] == "o" || mot[i] == "u" || mot[i] == "y") {
            compteur++;
        }
        i++;
    }
        alert("Le nombre de voyelles est de : " + compteur);
}


//Exercice 3 - Compter le nombre de lettres


let lettre = prompt("Veuillez saisir une lettre : ");
let mot = prompt("Veuillez saisir un mot : ");
function compteurLetre(mot, lettre) {
    let i = 0;
    let result = 0;
    while (i < mot.length) {
        if (mot[i] === lettre) {
            result++;
        }
        i++;
    }
}

alert(" le nombre de lettre " + lettre + " dans le mot " + mot + " est de : " + compteurLetre(mot, lettre));

function executeExos() {
    switch (option){
        case 1:
            multiples();
            break;
        case 2:
            sommeMoyenne();
            break;
        case 3:
            voyelles();
            break;
        case 4:
            compteurLetre(mot, lettre);
            break;
        default:
            alert("Erreur");
    }
}*/



//Striketok

function strtok(str1, str2, n) {
    let words = str1.split(str2);
    if (n > words.length) {
        return null;
    }
    return words[n - 1];
}

console.log(strtok("robert;dupont;amiens;80000", ";", 3));

/*
La condition "if (str1[i] === str2)" compare un caractère à une chaîne.
 Pour comparer deux chaînes, vous devez utiliser l'opérateur "===" entre les deux chaînes : "if (str1[i] === str2[0])".

Si le nième mot n'est pas trouvé dans la chaîne, la fonction renvoie une chaîne vide. 
Pour éviter cela, vous pouvez initialiser la variable "result" à null et renvoyer null si le nième mot n'est pas trouvé.

Pour extraire le nième mot, vous pouvez utiliser la méthode "split" de la chaîne de caractères pour diviser la chaîne en un tableau de mots,
puis renvoyer le nième élément du tableau.

Dans cet exemple, la méthode "split" est utilisée pour diviser la chaîne "str1" en un tableau de mots en utilisant le séparateur "str2".
Si le nième mot est plus grand que la longueur du tableau "words", la fonction renvoie null. Sinon, elle renvoie le nième élément du tableau "words".
*/



