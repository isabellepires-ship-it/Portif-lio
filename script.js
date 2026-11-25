
// ==================================
// DATA DE INÍCIO DO NAMORO
// ==================================

// ALTERE ESTA DATA PELA DATA DE VOCÊS!
const dataInicio = new Date("2026-05-02T00:00:00");


// ==================================
// CONTADOR DE NAMORO
// ==================================

function atualizarContador() {

    const agora = new Date();

    if (agora < dataInicio) {
        return;
    }

    let anos = agora.getFullYear() - dataInicio.getFullYear();

    let meses = agora.getMonth() - dataInicio.getMonth();

    let dias = agora.getDate() - dataInicio.getDate();

    let horas = agora.getHours() - dataInicio.getHours();

    let minutos = agora.getMinutes() - dataInicio.getMinutes();

    if (minutos < 0) {
        minutos += 60;
        horas--;
    }

    if (horas < 0) {
        horas += 24;
        dias--;
    }

    if (dias < 0) {
        meses--;

        const ultimoDiaMesAnterior = new Date(
            agora.getFullYear(),
            agora.getMonth(),
            0
        ).getDate();

        dias += ultimoDiaMesAnterior;
    }

    if (meses < 0) {
        meses += 12;
        anos--;
    }

    document.getElementById("anos").textContent = anos;
    document.getElementById("meses").textContent = meses;
    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = horas;
    document.getElementById("minutos").textContent = minutos;
}

// Atualiza o contador a cada minuto
atualizarContador();

setInterval(atualizarContador, 60000);


// ==================================
// MENU PARA CELULAR
// ==================================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", function() {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuBtn.textContent = "✕";
        menuBtn.setAttribute("aria-label", "Fechar menu");
    } else {
        menuBtn.textContent = "☰";
        menuBtn.setAttribute("aria-label", "Abrir menu");
    }

});

// Fecha o menu depois de clicar em um link
document.querySelectorAll(".nav-links a").forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.classList.remove("active");
        menuBtn.textContent = "☰";
        menuBtn.setAttribute("aria-label", "Abrir menu");

    });

});
