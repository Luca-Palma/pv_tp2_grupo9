document.getElementById("calcular").onclick = function() {
    horas = Number(document.getElementById("horas").value);
    pago = Number(document.getElementById("pago").value);
    nombre = document.getElementById("nombre").value;
    let resultado = horas * pago;
    if (horas > 160) {
        resultado = resultado * 1.2;
    }
    document.getElementById("resultado").innerText = nombre + " tu salario es de: " + resultado + "$";
}