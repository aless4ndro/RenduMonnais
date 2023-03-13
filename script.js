
function calculerMonnaie() {
    var ticket = document
        .getElementById("ticket")
        .value;
    var donnee = document
        .getElementById("donnee")
        .value;

    var monnaie = donnee - ticket;

    var billet10 = Math.floor(monnaie / 10);
    monnaie -= billet10 * 10;

    var billet5 = Math.floor(monnaie / 5);
    monnaie -= billet5 * 5;

    var piece1 = monnaie;

    var resultat = "<h2>Monnaie rendue :</h2>";
    resultat += "<p>Billet de 10 Euros : " + billet10 + "</p>";
    resultat += "<p>Billet de 5 Euros : " + billet5 + "</p>";
    resultat += "<p>Pièce de 1 Euro : " + piece1 + "</p>";

    document
        .getElementById("resultat")
        .innerHTML = resultat;
}
const resetBtn = document.querySelector("#reset-btn");


resetBtn.addEventListener("click", () => {
    document.getElementById("ticket").value = "";
    document.getElementById("donnee").value = "";
    document.getElementById("resultat").innerHTML = "";
});
document.body.appendChild(resetBtn);