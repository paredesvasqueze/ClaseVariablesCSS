const azul = document.getElementById("azul");
const guinda = document.getElementById("guinda");
const verde = document.getElementById("verde");
const amarillo = document.getElementById("amarillo");
const rosa = document.getElementById("rosa");

const temaActual = document.getElementById("tema-actual");

azul.addEventListener("click", () => {
    document.body.classList.remove("tema-guinda", "tema-verde", "tema-amarillo", "tema-rosa");
    document.body.classList.add("tema-azul");
    temaActual.textContent = "Tema: Azul"
    localStorage.setItem("mitema", "AZUL");
});

guinda.addEventListener("click", () => {
    document.body.classList.remove("tema-azul", "tema-verde", "tema-amarillo", "tema-rosa");
    document.body.classList.add("tema-guinda");
    temaActual.textContent = "Tema: Guinda"
    localStorage.setItem("mitema", "GUINDA");
});

verde.addEventListener("click", () => {
    document.body.classList.remove("tema-azul", "tema-guinda", "tema-amarillo", "tema-rosa");
    document.body.classList.add("tema-verde");
    temaActual.textContent = "Tema: Verde"
    localStorage.setItem("mitema", "VERDE");
});

amarillo.addEventListener("click", () => {
    document.body.classList.remove("tema-azul", "tema-verde", "tema-guinda", "tema-rosa");
    document.body.classList.add("tema-amarillo");
    temaActual.textContent = "Tema: Amarillo"
    localStorage.setItem("mitema", "AMARILLO");
});

rosa.addEventListener("click", () => {
    document.body.classList.remove("tema-azul", "tema-verde", "tema-guinda", "tema-amarillo");
    document.body.classList.add("tema-rosa");
    temaActual.textContent = "Tema: Rosa"
    localStorage.setItem("mitema", "rosa");
});

function cargartemainicial() {
    const temainicial = localStorage.getItem("mitema");
    if (temainicial) 
        {
        temaActual.textContent = "Tema: " + temainicial;
        document.body.classList.add("tema-"+ temainicial.toLocaleLowerCase() );
        }
}
cargartemainicial()
