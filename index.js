function mostrarMensaje() {
    var mensaje = "Alberto Moreno Fernandez. 1º DAW 2022 - 2023\n\nTema del proyecto final: \"Webshop de bicicletas\"";
    alert(mensaje);
}

const modeToggle = document.getElementById('mode-toggle');
const modeSymbol = document.getElementById('mode-symbol');
const body = document.body;

const storedMode = localStorage.getItem('mode');
if (storedMode) {
    body.classList.add(storedMode);
    updateModeSymbol(storedMode);
}

modeToggle.addEventListener('click', function() {
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        localStorage.setItem('mode', 'light-mode');
        updateModeSymbol('light-mode');
    } else {
        body.classList.add('dark-mode');
        localStorage.setItem('mode', 'dark-mode');
        updateModeSymbol('dark-mode');
    }
});

function updateModeSymbol(mode) {
    modeSymbol.innerHTML = mode === 'dark-mode' ? '🌙' : '☀️';
}