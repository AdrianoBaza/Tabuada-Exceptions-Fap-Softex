const input = require("readline-sync");

function userExceptions(message) {
    this.message = message;
    this.name = userExceptions;
};
console.log('==========================');
console.log('----- APP DE TABUADA -----');
console.log('==========================');
let numero = input.question('Informe um numero: ');

try {
    if (numero == 0) {
        throw new userExceptions('O número tem que ser maior que zero');
    } else {
        console.log(`------ Tabuada de ${numero} ------`);
        for (let i = 1; i <= 10; i++) {
            console.log(numero + ' x ' + i + ' = ' + (numero * i));
        }
    }
} catch(error) {
    console.log('Nome do erro: ', error.name);
    console.log('Mensagem: ', error.message);
}