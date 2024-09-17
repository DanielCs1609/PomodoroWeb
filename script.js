let minutosDisplay = document.getElementById('minutos');
let segundosDisplay = document.getElementById('segundos');
let startButton = document.getElementById('start');
let resetButton = document.getElementById('reset');

let minutos = 25;
let segundos = 0;
let intervalo;
let timerAtivo = false;

function atualizarDisplay() {
    minutosDisplay.textContent = String(minutos).padStart(2, '0');
    segundosDisplay.textContent = String(segundos).padStart(2, '0');
}

function iniciarTimer() {
    if (!timerAtivo) {
        timerAtivo = true;
        intervalo = setInterval(() => {
            if (segundos === 0) {
                if (minutos === 0) {
                    clearInterval(intervalo);
                    timerAtivo = false;
                    alert('Tempo esgotado!');
                } else {
                    minutos--;
                    segundos = 59;
                }
            } else {
                segundos--;
            }
            atualizarDisplay();
        }, 1000);
    }
}

function resetarTimer() {
    clearInterval(intervalo);
    minutos = 25;
    segundos = 0;
    timerAtivo = false;
    atualizarDisplay();
}

startButton.addEventListener('click', iniciarTimer);
resetButton.addEventListener('click', resetarTimer);

atualizarDisplay();
