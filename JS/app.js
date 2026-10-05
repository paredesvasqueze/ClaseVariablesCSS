const azul = document.getElementById("azul");
const guinda = document.getElementById("guinda");
const verde = document.getElementById("verde");
const rosado = document.getElementById("rosado");

azul.addEventListener("click", () => {
    document.body.classList.remove("tema-guinda", "tema-verde", "tema-rosado");
    document.body.classList.add("tema-azul");
});

guinda.addEventListener("click", () => {
    document.body.classList.remove("tema-azul", "tema-verde", "tema-rosado");
    document.body.classList.add("tema-guinda");
});

verde.addEventListener("click", () => {
    document.body.classList.remove("tema-azul", "tema-guinda", "tema-rosado");
    document.body.classList.add("tema-verde");
});

rosado.addEventListener("click", () => {
    document.body.classList.remove("tema-azul", "tema-guinda", "tema-verde");
    document.body.classList.add("tema-rosado");
});