let nombre;
let apellido;
let lu;

document.getElementById("datos").onclick = function(){
    nombre = document.getElementById("name").value;
    apellido = document.getElementById("surname").value;
    lu = document.getElementById("libreta").value;
    alert("Los datos ingresados son Nombre: " + nombre + ", " + " Apellido: " + apellido + ", "+ " Libreta universitaria: " + lu);
}