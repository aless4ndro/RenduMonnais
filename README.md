# RenduMonnais

        HTML CSS JS

Ce script est destiné à calculer la monnaie rendue lors d'un achat. Il utilise les informations saisies par l'utilisateur : le montant du ticket et la somme d'argent que l'utilisateur donne pour payer.

Le script commence par récupérer les valeurs des champs de formulaire "ticket" et "donnee" en utilisant la méthode getElementById(). Les valeurs entrées sont ensuite stockées dans les variables 'ticket' et 'donnee'.

La variable 'monnaie' est définie comme la différence entre les deux valeurs précédentes, correspondant à la quantité d'argent à rendre.

Ensuite, les boucles Math.floor() sont utilisées pour calculer le nombre de billets/de pièces de monnaie nécessaires pour rendre la monnaie. Les billets de 10 € sont traités en premier, suivi des billets de 5 €, et finalement des pièces de 1 €.

Le résultat est stocké dans la variable 'resultat', sous forme de chaîne HTML, qui sera insérée dans l'élément avec l'id "resultat".

Enfin, le script ajoute un écouteur d’événement sur le bouton de réinitialisation ("reset-btn"). Lorsque l'utilisateur clique sur ce bouton, les champs "ticket", "donnee" et "resultat" sont remis à zéro. Le bouton est également ajouté dynamiquement à la fin de la page en tant qu'enfant de l'élément 'body'.


"var billet10 = Math.floor(monnaie / 10);
monnaie -= billet10 * 10;"

Ces deux lignes de code servent à calculer le nombre de billets de 10 € à rendre en monnaie pour une transaction donnée.

La première ligne utilise la fonction JavaScript "Math.floor()" pour arrondir le résultat d'une division à l'entier inférieur. Elle divise la variable "monnaie" par 10 et attribue le résultat (le nombre entier de billets de 10 € à rendre) à la variable "billet10".

La seconde ligne soustrait au montant initial de "monnaie" le montant total des billets de 10 € à rendre, ce qui donne le nouveau montant de monnaie à rendre.

Cette approche est ensuite répétée pour les billets de 5 € et les pièces de 1 € grâce aux trois blocs suivants de code. Le résultat final est stocké dans la variable "resultat", qui est ensuite insérée dans le contenu HTML de la page web grâce à la dernière ligne.