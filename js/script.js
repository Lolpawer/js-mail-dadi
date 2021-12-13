const emailOutput = document.getElementById('email-output');
const listaEmail = ['pino@gmail.com', 'lino@gmail.com', 'mino@gmail.com', 'gino@gmail.com'];
let emailCheck = false;

const userEmail = prompt('Inserisci la tua email.');

for (let i = 0; i < listaEmail.length; i++) {
    if (userEmail.toLowerCase() === listaEmail[i].toLowerCase()) {
        emailCheck = true;
    }
}

if (emailCheck) {
    emailOutput.innerHTML = `La tua email è tra le email iscritte. <br/>`
}
else {
    emailOutput.innerHTML = `La tua email non è tra le email iscritte. <br/>`
}

//-----------------------------------------------------

const diceOutput = document.getElementById('dice-output');

const userDice = Math.floor(Math.random() * 6 + 1);
const cpuDice = Math.floor(Math.random() * 6 + 1);

diceOutput.innerHTML += `Dado giocatore: ${userDice}. <br/>
                         Dado computer: ${cpuDice}. <br/>`;

if (userDice > cpuDice) {
    diceOutput.innerHTML += "Vince il giocatore."
}

else if (userDice < cpuDice) {
    diceOutput.innerHTML += "Vince il computer."
}

else {
    diceOutput.innerHTML += "Pareggio."
}