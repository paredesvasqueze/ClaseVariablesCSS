const azul = document.getElementById("azul");
const guinda = document.getElementById("guinda");
const verde = document.getElementById("verde");
const amarillo = document.getElementById("amarillo");
const morado = document.getElementById("morado");
const temaActual = document.getElementById("tema-actual");

azul.addEventListener("click", () => {
    document.body.classList.remove("tema-guinda", "tema-verde", "tema-amarillo", "tema-morado");
    document.body.classList.add("tema-azul");
    temaActual.textContent = "Tema actual: Azul";
});

guinda.addEventListener("click", () => {
    document.body.classList.remove("tema-azul", "tema-verde", "tema-amarillo", "tema-morado");
    document.body.classList.add("tema-guinda");
    temaActual.textContent = "Tema actual: Guinda";
});

verde.addEventListener("click", () => {
    document.body.classList.remove("tema-azul", "tema-guinda", "tema-amarillo", "tema-morado");
    document.body.classList.add("tema-verde");
    temaActual.textContent = "Tema actual: Verde";
});

amarillo.addEventListener("click", () => {
    document.body.classList.remove("tema-azul", "tema-guinda", "tema-verde", "tema-morado");
    document.body.classList.add("tema-amarillo");
    temaActual.textContent = "Tema actual: Amarillo";
});

morado.addEventListener("click", () => {
    document.body.classList.remove("tema-azul", "tema-guinda", "tema-verde", "tema-amarillo");
    document.body.classList.add("tema-morado");
    temaActual.textContent = "Tema actual: Morado";
});
