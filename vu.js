/*// num paire ou impaire
// Demande à l'utilisateur de saisir un nombre
let nombre = prompt("Veuillez saisir un nombre : ");

// Vérifie si le nombre est pair ou impair
if (nombre % 2 === 0) {
  console.log(nombre + " est un nombre pair.");
} else {
  console.log(nombre + " est un nombre impair.");
}*/

/* // Demande à l'utilisateur de saisir son âge t age = prompt("Veuillez saisir
 * votre âge : ");

// Affiche l'âge saisi par l'utilisateur
console.log("Vous
 * avez " + age + " ans.");
 */

/*// Demande à l'utilisateur de saisir le prix unitaire et la quantité commandée
let PU = parseFloat(prompt("Veuillez saisir le prix unitaire du produit : "));
let QTECOM = parseInt(prompt("Veuillez saisir la quantité commandée : "));

// Calcule le prix total hors frais de port
let TOT = PU * QTECOM;

// Calcule la remise éventuelle
let REM = 0;
if (TOT >= 100 && TOT < 200) {
  REM = 0.05;
} else if (TOT >= 200) {
  REM = 0.1;
}

// Calcule les frais de port éventuels
let PORT = 0;
if (TOT < 500) {
  PORT = Math.max(6, TOT * 0.02);
}

// Calcule le prix à payer
let PAP = TOT * (1 - REM) + PORT;

// Affiche le détail de la commande
console.log("Prix unitaire : " + PU.toFixed(2) + " €");
console.log("Quantité commandée : " + QTECOM);
console.log("Total hors frais de port : " + TOT.toFixed(2) + " €");
console.log("Remise : " + (REM * 100).toFixed(0) + "%");
console.log("Frais de port : " + PORT.toFixed(2) + " €");
console.log("Prix à payer : " + PAP.toFixed(2) + " €");*/

/*
let estMarie = false;
let aDesEnfants = false;
let nombreEnfants = 0;
let salaireMensuel = 0;

try {
  estMarie = confirm("Le patron est-il marié ?");
  aDesEnfants = confirm("Le patron a-t-il des enfants ?");

  if (aDesEnfants) {
    nombreEnfants = parseInt(prompt("Combien d'enfants a le patron ?"));

    if (isNaN(nombreEnfants)) {
      throw new Error("Le nombre d'enfants doit être un nombre entier.");
    }
  }

  salaireMensuel = parseFloat(prompt("Veuillez saisir le salaire mensuel du patron : "));

  if (isNaN(salaireMensuel)) {
    throw new Error("Le salaire mensuel doit être un nombre.");
  }

} catch (error) {
  console.error("Une erreur s'est produite : " + error.message);
}

let participationBase = 0.2;

if (estMarie) {
  participationBase = 0.25;
}

let participationEnfants = 0;

if (aDesEnfants) {
  participationEnfants = nombreEnfants * 0.1;
}

let participation = participationBase + participationEnfants;

if (salaireMensuel < 1200) {
  participation += 0.1;
}

participation = Math.min(participation, 0.5);

console.log("La participation du patron est de " + (participation * 100).toFixed(0) + "%.");
*/

/*
Tempereature

let temperature = 0;

try {
  temperature = parseFloat(prompt("Veuillez saisir la température : "));

  if (isNaN(temperature)) {
    throw new Error("La température doit être un nombre.");
  }

} catch (error) {
  console.error("Une erreur s'est produite : " + error.message);
}

let message = "";

if (temperature < 0) {
    message = "Il fait très froid.";
    } else if (temperature < 10) {
    message = "Il fait froid.";
    } else if (temperature < 20) {
    message = "Il fait frais.";
    } else if (temperature < 30) {
    message = "Il fait bon.";
    }

console.log(temperature+"°C : " + message);*/
/*
let temperaturePatient = 0;
let tensionPatient = 0;
let pouls = 0;

try {
    temperaturePatient = parseFloat(
        prompt("Veuillez saisir la température du patient : ")
    );

    tensionPatient = parseFloat(prompt("Veuillez saisir la tension du patient : "));

    pouls = parseFloat(prompt("Veuillez saisir le pouls du patient : "));

    if (isNaN(temperaturePatient)) {
        throw new Error("La température doit être un nombre.");
    }

} catch (error) {
    console.error("Une erreur s'est produite : " + error.message);
}

let message = "";

if (temperaturePatient > 38) {
    message = "La patiente a de la fièvre.";
} else 
    console.log("Enconduire l' olibrius.");

if (temperaturePatient > 40 || tensionPatient >= 25) {
    message = "La patiente est en danger.";
}
if (temperaturePatient > 40 && tensionPatient > 25) {
    message = "La patiente va perdre patience.";
}
if (temperaturePatient > 42 || (temperaturePatient < 25 && pouls > 180)) {
    message = "Prevenir la famlle.";
}
if (temperaturePatient && pouls == 0) {
    message = "Le patient est mort.";
}

console.log(temperaturePatient + "°C : " + message);*/

//for in

//demande le prenom de utilisateur et continue a l'affichier jusqu'a ce que l'utilisateur entre un prenom vide

/*let prenom = prompt("Veuillez saisir un prénom : ");

while (prenom !== "") {
    console.log(prenom);
    prenom = prompt("Veuillez saisir un prénom : ");
    }*/

    //entier inferieur a n

    /*let n = parseInt(prompt("Veuillez saisir un nombre entier : "));
    let i = 0;

    while (i < n) {
        console.log(i);
        i++;
    }*/

    //Somme des entiers inférieurs à N

    /*let n = parseInt(prompt("Veuillez saisir un nombre entier : "));

    let i = 0;
    let somme = 0;

    while (i < n) {
        somme += i;
        i++;
    }

    console.log("La somme des entiers inférieurs à " + n + " est " + somme + ".");*/

//Somme d'un intervalle

/*let n = parseInt(prompt("Veuillez saisir un nombre entier : "));
let m = parseInt(prompt("Veuillez saisir un nombre entier : "));

let i = n;
let somme = 0;

while (i <= m) {
    somme += i;
    i++;
}

console.log("La somme des entiers compris entre " + n + " et " + m + " est " + somme + ".");*/

//Moyenne
/*
let n = parseInt(prompt("Veuillez saisir un nombre entier : "));
let m = parseInt(prompt("Veuillez saisir un nombre entier : "));

let i = n;
let somme = 0;
let compteur = 0;

while (i <= m) {
    somme += i;
    i++;
    compteur++;
}

// alert avec console.log

alert("La moyenne des entiers compris entre " + n + " et " + m + " est " + (somme / compteur).toFixed(2) + ".");*/


//Mini et maxi

/*let n = parseInt(prompt("Veuillez saisir un nombre entier : "));
let m = parseInt(prompt("Veuillez saisir un nombre entier : "));

let i = n;
let somme = 0;
let compteur = 0;
let mini = n;
let maxi = m;

while (i <= m) {
    somme += i;
    i++;
    compteur++;

    if (i < mini) {
        mini = i;
    }
    if (i > maxi) {
        maxi = i;
    }
}

//affiche max et min

alert("Le minimum des entiers compris entre " + n + " et " + m + " est " + mini + ".");*/

//Multiples

/*let n = parseInt(prompt("Veuillez saisir un nombre entier : "));

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

alert("La moyenne des multiples de 3 inférieurs à " + n + " est " + (somme / compteur).toFixed(2) + ".");*/

//Nombre de voyelles.

/*let mot = prompt("Veuillez saisir un mot : ");

let i = 0;
let compteur = 0;

while (i < mot.length) {
    if (mot[i] == "a" || mot[i] == "e" || mot[i] == "i" || mot[i] == "o" || mot[i] == "u" || mot[i] == "y") {
        compteur++;
    }
    i++;
}

alert("Le mot " + mot + " contient " + compteur + " voyelles.");*/


//Calcul du nombre de jeunes, de moyens et de vieux.

 

/*let jeunes = 0;

let moyens = 0;

let vieux = 0;

let age = 0;

 

while (true) {

  age = Number(prompt("Entrez un âge :"));

  if (age >= 100) {

    break;

 

  } else if (age < 20) {

    jeunes++

 

  } else if (age > 40) {

    vieux++

 

  } else {

    moyens++

  }

}

 

alert("Il y a " + jeunes + " jeunes, " + moyens + " moyens et " + vieux + " vieux.");




/*Le programme utilise une boucle while pour demander les âges successifs jusqu'à ce qu'un centenaire soit saisi. Dans la boucle, chaque âge est vérifié pour déterminer s'il appartient à la catégorie des personnes d'âge strictement inférieur à 20 ans, celles d'âge compris entre 20 ans et 40 ans ou celles d'âge strictement supérieur à 40 ans, et les compteurs correspondants sont incrémentés. Si un âge supérieur ou égal à 100 ans est saisi, la boucle est interrompue et le centenaire est compté.

 

Enfin, le programme affiche le nombre de personnes dans chaque catégorie en utilisant la méthode console.log()

 

La condition de la boucle while(true) est toujours vraie, ce qui signifie que la boucle s'exécute en boucle indéfiniment jusqu'à ce qu'elle soit interrompue.

 

Dans cet exemple, la boucle est interrompue lorsque l'utilisateur saisit un âge supérieur ou égal à 100 ans en utilisant l'instruction break. Cela permet d'éviter que la boucle ne s'exécute indéfiniment.

 

L'utilisation de while(true) est courante lorsque la durée ou le nombre de répétitions d'une boucle n'est pas connu à l'avance. Dans ce cas, la boucle continue à s'exécuter jusqu'à ce qu'une condition de sortie soit rencontrée.

*/

 

//verif num premier

 

/*function estPremier(nombre) {

  if (nombre <= 1) {

    return false;

  }

  // Vérifie si le nombre est divisible par un nombre autre que 1 et lui-même

  for (let i = 2; i < nombre; i++) {

    if (nombre % i === 0) {

      return false;

    }

  }

  return true;

}
console.log(estPremier(17)); // affiche true

console.log(estPremier(21)); // affiche false*/




/*La fonction prend un nombre en entrée et retourne true s'il est premier, false sinon.

 

La première étape de la fonction est de vérifier si le nombre est inférieur ou égal à 1, car les nombres premiers doivent être supérieurs à 1. Si le nombre est inférieur ou égal à 1, la fonction retourne false.

 

Ensuite, la fonction utilise une boucle pour vérifier si le nombre est divisible par un nombre autre que 1 et lui-même. La boucle commence à 2 (puisque 1 ne compte pas comme un nombre premier) et s'arrête juste avant le nombre lui-même. Si le nombre est divisible par un nombre autre que 1 et lui-même, la fonction retourne false.

 

Si la boucle se termine sans avoir trouvé de diviseurs autres que 1 et le nombre lui-même, cela signifie que le nombre est premier, et la fonction retourne true.

 

Vous pouvez appeler cette fonction avec n'importe quel nombre entier pour déterminer s'il est premier ou non, comme ceci:
*/
 


