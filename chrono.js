 
  var timer = document.getElementById('timer');
  var startBtn = document.getElementById('start');
  var pauseBtn = document.getElementById('pause');
  var resetBtn = document.getElementById('reset');
  var time = 0;
  var interval;
  
  function startTimer() {
    interval = setInterval(function() {
      time++;
      updateTimer();
    }, 1000);
  }
  
  function pauseTimer() {
    clearInterval(interval);
  }
  
  function resetTimer() {
    time = 0;
    updateTimer();
  }
  
  function updateTimer() {
    var hours = Math.floor(time / 3600);
    var minutes = Math.floor((time - (hours * 3600)) / 60);
    var seconds = time - (hours * 3600) - (minutes * 60);
  
    if (hours < 10) { hours = "0" + hours; }
    if (minutes < 10) { minutes = "0" + minutes; }
    if (seconds < 10) { seconds = "0" + seconds; }
  
    timer.innerHTML = hours + ':' + minutes + ':' + seconds;
  }
  
  startBtn.addEventListener('click', startTimer);
  pauseBtn.addEventListener('click', pauseTimer);
  resetBtn.addEventListener('click', resetTimer);
  































// Algorithm: labiranth

// Définir la grille du labyrinthe
/*let maze = [
  [1, 1, 1, 1, 1],     
  [1, 0, 1, 0, 1],
  [1, 0, 0, 0, 1],
  [1, 1, 1, 0, 1],
  [1, 1, 1, 1, 1]
];*/

/*Dans un labyrinthe, le tableau est une structure de données utilisée
 pour stocker la carte du labyrinthe sous forme de grille 2D. Le tableau est généralement une matrice, c'est-à-dire une collection
  de valeurs organisées en lignes et colonnes.

 Dans un tableau représentant un labyrinthe, chaque case peut avoir une valeur représentant un mur, un chemin libre ou un objectif. Les murs sont généralement représentés par des valeurs élevées (par exemple, 1),
 tandis que les chemins libres sont représentés par des valeurs faibles (par exemple, 0). Les objectifs peuvent être représentés par une autre valeur (par exemple, 2).

Voici un exemple de tableau représentant un labyrinthe simple :

Dans cet exemple, chaque 1 représente un mur, chaque 0 représente un chemin libre et il n'y a pas d'objectif spécifique défini. 
*/

// Définir la position et l'orientation initiales du personnage
/*let posX = 1;
let posY = 1;
let orientation = "east";

// Fonction pour tourner à droite
function turnRight() {
  switch (orientation) {
    case "north":
      orientation = "east";
      break;
    case "east":
      orientation = "south";
      break;
    case "south":
      orientation = "west";
      break;
    case "west":
      orientation = "north";
      break;
  }
}

// Fonction pour avancer d'une case dans la direction actuelle
function moveForward() {
  switch (orientation) {
    case "north":
      if (maze[posX - 1][posY] === 0) {
        posX--;
      }
      break;
    case "east":
      if (maze[posX][posY + 1] === 0) {
        posY++;
      }
      break;
    case "south":
      if (maze[posX + 1][posY] === 0) {
        posX++;
      }
      break;
    case "west":
      if (maze[posX][posY - 1] === 0) {
        posY--;
      }
      break;
  }
}/*

// Utilisation des fonctions pour se déplacer dans le labyrinthe
moveForward() // Avancer d'une case
turnRight(); // Tourner à droite
moveForward(); // Avancer d'une case









/*Dans un labyrinthe, le tableau est une structure de données utilisée
 pour stocker la carte du labyrinthe sous forme de grille 2D. Le tableau est généralement une matrice, c'est-à-dire une collection
  de valeurs organisées en lignes et colonnes.

Dans un tableau représentant un labyrinthe, chaque case peut avoir une valeur représentant un mur, un chemin libre ou un objectif. Les murs sont généralement représentés par des valeurs élevées (par exemple, 1),
 tandis que les chemins libres sont représentés par des valeurs faibles (par exemple, 0). Les objectifs peuvent être représentés par une autre valeur (par exemple, 2).

Voici un exemple de tableau représentant un labyrinthe simple :


Dans cet exemple, chaque 1 représente un mur, chaque 0 représente un chemin libre et il n'y a pas d'objectif spécifique défini. 
Vous pouvez bien sûr personnaliser ce tableau pour créer des labyrinthes plus complexes et ajouter des objectifs à atteindre.*/



/*

// Demander à l'utilisateur de saisir un caractère

let character = prompt("Veuillez saisir un caractère :");

// Demander à l'utilisateur de saisir le nombre maximum de caractères à afficher
let limit = parseInt(prompt("Combien de caractères maximum souhaitez-vous afficher ?"));

// Afficher progressivement les caractères
for (let i = 1; i <= limit; i++) {
  console.log(character.repeat(i));

}*/





/*for (let i = 1; i <= 10; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
        line += j + ",";
    }
    console.log(line);
}*/

