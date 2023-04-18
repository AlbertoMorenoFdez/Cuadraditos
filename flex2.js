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
        alert ("Mal numero ingresado");
        exit(-1);
}
if (estecuadro!=""){
    estecuadro.innerHTML="HOLA";
    estecuadro.style.color="blue";
}


