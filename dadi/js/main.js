function myFunction() {
    let person = prompt(Math.floor(Math.random() * 6) + 1);
    if (person != null) {
        document.getElementById("you").innerHTML = "il tuo numero è" + person;
      }
  }

  function myFunction() {
    let person = prompt(Math.floor(Math.random() * 6) + 1);
    if (person != null) {
        document.getElementById("pc").innerHTML = "il numero del Bot è" + person;
      }
  }

/*correzione */
const numeroUtente = Math.floor(Math.random() * 6) + 1;
alert('il giocatore ha lanciato il dado ed è uscito il numero' + numeroUtente);

const numeroComputer = Math.floor(Math.random() * 6) + 1;
alert('il computer ha lanciato il dado ed è uscito il numero' + numeroComputer)

if (numeroComputer > numeroUtente) {
  alert('vince il computer');
} else if (numeroUtente > numeroComputer) {
  alert("Vince l'utente");
} else {
  alert('pareggio');
}