'use strict' //Nos ayuda a no dejar pasar ningun error

//pedimos solamente el color y luego pintamos con un click sobre el cuadro que seleccionemos

//Defino variables locales
var color = 'white';

// trabajamos con arrays

//Color para el frente
// var colorFr=['greenyellow','pink','lightskyblue','grey','goldenrod']
var colorFr = new Array('greenyellow', 'pink', 'lightskyblue', 'grey', 'goldenrod');

//Color para el fondo
var colorFn = [];
colorFn[0] = 'white';
colorFn[1] = 'blue';
colorFn[2] = 'black';
colorFn[3] = 'yellow';
colorFn[4] = 'red';

function pinturaInicial() {
    for (let i = 0; i < 5; i++) {
        let identificador="c"+(i+1);
        let elemento = document.getElementById(identificador);
        elemento.style.backgroundColor = colorFn[i];
        elemento.style.color=colorFr[i]
    }

}

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

pinturaInicial();
obtieneColor()
