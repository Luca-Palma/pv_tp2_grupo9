//Se piden que ingresen los numeros con promp
let numero1 = parseInt(prompt("Ingresa el primer número entero:"));
let numero2 = parseInt(prompt("Ingresa el segundo número entero:"));
let numero3 = parseInt(prompt("Ingresa el tercer número entero:"));

//Verifica que sean numeros
if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3)) {
    alert("Por favor, ingresa solo números");
} else {
    //Calcula el promedio y muestra con alert
    let promedio = (numero1 + numero2 + numero3) / 3;
    alert("El promedio es: " + promedio);
}