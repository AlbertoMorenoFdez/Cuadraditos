'use strict' //Nos ayuda a no dejar pasar ningun error

//pedimos solamente el color y luego pintamos con un click sobre el cuadro que seleccionemos

//Defino variables locales
var color = 'white';

//Creamos la funcion que toma como color de la letra el color de fondo del cuadro que pinchamos primero con el boton derecho del raton


function obtieneColor(identificador) {
    let id = "c" + identificador;
    let cuadro = document.getElementById(id);
    color = getComputedStyle(cuadro).backgroundColor;
    console.log(color);
}

function saludar(identificador) {
    let id = "c" + identificador;
    let cuadro = document.getElementById(id);
    cuadro.style.color = color;
    cuadro.innerHTML = "HOLA"

}

obtieneColor();
