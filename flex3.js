'use strict' //Nos ayuda a no dejar pasar ningun error

//pedimos el numero de cuadro donde excribir: HOLA 
//Pero ahora usaremos el switch
var cuadro = prompt("Dime en que cuadro quieres saludar (1 a 5)", "");
cuadro = parseInt(cuadro);
// cuadro sera una variable numerica entre 1 y 5

//Creamos una variable para unir cuadro y el selector
var estecuadro = "";

switch (cuadro) {
    case 1:
        estecuadro = document.getElementById("c1");
        break;
    case 2:
        estecuadro = document.getElementById("c2");
        break;
    case 3:
        estecuadro = document.getElementById("c3");
        break;
    case 4:
        estecuadro = document.getElementById("c4");
        break;
    case 5:
        estecuadro = document.getElementById("c5");
        break;
    default:
        alert("Mal numero ingresado");
        exit(-1);
}

// Imprimir una piramide a partir de la columna 20, de 3 filas y 5 columnas usando la letra o
// Sacado del ejercicio anterior de clase
var piramide = '';
var filas = 3;
var letra = 'o';
var espacioInicial = 20;

for (var i = 0; i < filas; i++) {
    for (var j = 0; j < i - 2; j++) {
        piramide += ' ';
    }
    for (var k = 0; k < 2 * i + 1; k++) {
        piramide += letra;
    }
    piramide += '\n';
}

var resultado = '<pre>' + piramide + '</pre>';


//Pedimos el color en el que quiere que se pinte la piramide
var color = prompt("Elige un color para el texto: (a) rojo, (b) azul, (c) verde", "");

//Usamos un switch para asignar el valor de color correspondiente
switch (color) {
    case 'a':
        estecuadro.style.color = 'red';
        break;
    case 'b':
        estecuadro.style.color = 'blue';
        break;
    case 'c':
        estecuadro.style.color = 'green';
        break;
    default:
        alert("Opción incorrecta ingresada");
        exit(-1);
}



estecuadro.innerHTML = resultado;


