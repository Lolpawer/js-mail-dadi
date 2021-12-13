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