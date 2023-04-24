'use strict' //Nos ayuda a no dejar pasar ningun error

//pedimos solamente el color y luego pintamos con un click sobre el cuadro que seleccionemos

//Defino variables locales
var color = 'white';

//Creamos la funcion
function eligeColor() {
    color = prompt("Dime de que color quieres pintar el saludo (rojo, azul, amarillo)");
    switch (color) {
        case 'rojo':
            color = 'red';
            break;
        case 'azul':
            color = 'blue';
            break;
        case 'amarillo':
            color = 'yellow';
            break;
        default:
            color = 'black'; //Lo pongo en negro cuando es un color errroneo
    }
}

/* function saludarc1() {
    let cuadro = document.getElementById("c1");
    cuadro.style.color = color;
    cuadro.innerHTML = "HOLA"

}
function saludarc2() {
    let cuadro = document.getElementById("c2");
    cuadro.style.color = color;
    cuadro.innerHTML = "HOLA"

}
function saludarc3() {
    let cuadro = document.getElementById("c3");
    cuadro.style.color = color;
    cuadro.innerHTML = "HOLA"

}
function saludarc4() {
    let cuadro = document.getElementById("c4");
    cuadro.style.color = color;
    cuadro.innerHTML = "HOLA"

}
function saludarc5() {
    let cuadro = document.getElementById("c5");
    cuadro.style.color = color;
    cuadro.innerHTML = "HOLA"

} */

function saludar(identificador) {
    let id="c"+identificador;
    let cuadro = document.getElementById(id);
    cuadro.style.color = color;
    cuadro.innerHTML = "HOLA"

}

eligeColor();
