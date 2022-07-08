const emails = ['giacomo@gmail.com', 'roberto@gmail.com', 'saimon@icloud.com',];

const email_utente = prompt('inserisci il tuo indirizzo email');

let puoi_accedere = false;

for (let i = 0; i < emails.length; i++) {
    if (emails[1] == email_utente) {
        puoi_accedere = true;
    }
};

if (puoi_accedere == true) {
    alert('benvenuto');
} else {
    alert('stop');
};