function calcularMayor(num1, num2) {
    if (num1 > num2) {
        alert("El número mayor es: " + num1);
    } else if (num2 > num1) {
        alert("El número mayor es: " + num2);
    } else {
        alert(`Ambos números son iguales: ${num1}`);
    }
}

// Pedimos números al usuario con prompt
let n1 = parseInt(prompt("Ingresa el primer número:"));
let n2 = parseInt(prompt("Ingresa el segundo número:"));

// Invocamos la función pasando los valores ingresados
calcularMayor(n1, n2);