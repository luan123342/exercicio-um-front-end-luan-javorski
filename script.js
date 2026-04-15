let tempo = 0;
let intervalo = null;

function formatarTempo(segundos) {
    const hrs = String(Math.floor(segundos / 3600)).padStart(2, '0');
    const mins = String(Math.floor((segundos % 3600) / 60)).padStart(2, '0');
    const secs = String(segundos % 60).padStart(2, '0');
    return `${hrs}:${mins}:${secs}`;
}

function atualizarDisplay() {
    document.getElementById("display").innerText = formatarTempo(tempo);
}

function iniciar() {
    if (intervalo !== null) return; // evita múltiplos intervals

    intervalo = setInterval(() => {
        tempo++;
        atualizarDisplay();
    }, 1000);
}

function pausar() {
    clearInterval(intervalo);
    intervalo = null;
}

function resetar() {
    pausar();
    tempo = 0;
    atualizarDisplay();
    document.getElementById("voltas").innerHTML = "";
}

function volta() {
    if (intervalo === null) return;

    const li = document.createElement("li");
    li.textContent = formatarTempo(tempo);
    document.getElementById("voltas").appendChild(li);
}
