let numeros = prompt("Ingrese numeros o ?");
let num1 = 0;
let num2= 0;
let signo = 0;
let nueva_lista = [];
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] != "?") {
        if (signo == "?") {
            signo = parseInt(numeros[i]) + num2;
            nueva_lista[i - 1] = signo;
        }
        num1 = parseInt(numeros[i]);
        nueva_lista[i] = num1;
        if (num1 == NaN) {
            num1 = 0;
        }
    } else if (numeros[i] == "?") {
        num2 = parseInt(num1);
        signo = numeros[i];
        if (num2 == NaN) {
            num2 = 0;
        }
        if (i == numeros.length - 1) {
            signo = num1;
            nueva_lista[i] = signo;
        }
    }
}
alert(nueva_lista);