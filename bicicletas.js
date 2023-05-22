var modo = leerModoActual();

if (modo == "dia") {
    ponerModoDia();
} else {
    ponerModoNoche();
}

function leerModoActual() {
    let modo = window.localStorage.getItem("modoGuardado");
    if (!modo) {
        //Devolvera modo DIA si no hay modo guradado
        modo = "dia";
    } ;
        return modo;
    
}

function ponerModoDia() {
    // cambiamos los colores, ponemos el fondo claro y letras oscuras
let todo=document.getElementById("todo");
todo.style.color="black";
todo.style.backgroundColor="white";
window.localStorage.setItem("modoGuardado","dia");

// let banner=document.getElementById("banner")
// banner.style.color="darkred";
// banner.style.backgroundcolor="goldenrod";


// ocultamos el sol
let iconoDia =document.getElementById("dia");
iconoDia.style.display="none";

// mostramos la luna
let iconoNoche =document.getElementById("noche");
iconoNoche.style.display="block";

}

function ponerModoNoche() {
    // cambiamos los colores, ponemos el fondo oscuro y letras blancas
let todo=document.getElementById("todo");
todo.style.color="white";
todo.style.backgroundColor="black";
window.localStorage.setItem("modoGuardado","noche");

// mostramos el sol
let iconoDia =document.getElementById("dia");
iconoDia.style.display="block";

// ocultamos la luna
let iconoNoche =document.getElementById("noche");
iconoNoche.style.display="none";

}

function aplicarCambios() {
    var color = document.getElementsByName('colorElegido')[0];
    console.log('color elegido ' + color.value);

    var tam = document.getElementsByName('tamFuente')[0];
    var tamelegido = tam[tam.selectedIndex].value;

    document.documentElement.style.fontSize = parseFloat(tamelegido) + "rem";
    document.documentElement.style.setProperty("--colorNormal", color.value);
    document.getElementById('mensaje').innerHTML = "APLICADO";
}

document.addEventListener("DOMContentLoaded", function () {
    var botonAjuste = document.querySelector(".botonAjuste");
    var imagen = document.querySelector(".cuadrado .imagenMTB");

    botonAjuste.addEventListener("click", function () {
        imagen.style.opacity = "0.3";
    });
});

function aplicarCambios() {
    var color = document.getElementsByName('colorElegido')[0];
    console.log('color elegido ' + color.value);

    var tam = document.getElementsByName('tamFuente')[0];
    var tamelegido = tam[tam.selectedIndex].value;

    document.documentElement.style.fontSize = parseFloat(tamelegido) + "rem";
    document.documentElement.style.setProperty("--colorNormal", color.value);
    document.getElementById('mensaje').innerHTML = "APLICADO";
}

document.addEventListener("DOMContentLoaded", function () {
    var botonAjuste = document.querySelector(".botonAjuste");
    var imagen = document.querySelector(".cuadrado .imagenMTB");

    botonAjuste.addEventListener("click", function () {
        imagen.style.opacity = "0.3";
    });
});