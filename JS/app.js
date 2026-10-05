const azul = document.getElementById("azul");
const guinda = document.getElementById("guinda");
const verde = document.getElementById("verde");
const amarillo  = document.getElementById("amarillo");
const uvita = document.getElementById("uvita");

azul.addEventListener("click", () => {
    document.body.classList.remove("tema-guinda", "tema-verde");
    document.body.classList.add("tema-azul");
});


guinda.addEventListener("click", () => {
    document.body.classList.remove("tema-azul", "tema-verde");
    document.body.classList.add("tema-guinda");
});

verde.addEventListener("click", () => {
    document.body.classList.remove("tema-azul", "tema-guinda");
    document.body.classList.add("tema-verde");
});

amarillo.addEventListener("click",() => {
    document.body.classList.remove("tema-azul", "tema-guinda","tema-verde");
    document.body.classList.add("tema-amarillo");
});

uvita.addEventListener("click",() => {
    document.body.classList.remove("tema-azul", "tema-guinda","tema-verde", "tema-amarillo");
    document.body.classList.add("tema-uvita");
});
