const azul = document.getElementById("azul");
const guinda = document.getElementById("guinda");
const verde = document.getElementById("verde");
const rosado = document.getElementById("rosado");

const temaactual = document.getElementById("temaactual")
/*
azul.addEventListener("click", () => cargartemaInicial("tema-azul"));
guinda.addEventListener("click", () => cargartemaInicial("tema-guinda"));
verde.addEventListener("click", () => cargartemaInicial("tema-verde"));
rosado.addEventListener("click", () => cargartemaInicial("tema-rosado"));
*/

azul.addEventListener("click", () => {
    document.body.classList.remove("tema-guinda", "tema-verde", "tema-rosado");
    document.body.classList.add("tema-azul");
    temaactual.textContent = "Tema Actual: azul";
    localStorage.setItem("temaactual","azul");
});

guinda.addEventListener("click", () => {
    document.body.classList.remove("tema-azul", "tema-verde", "tema-rosado");
    document.body.classList.add("tema-guinda");
    temaactual.textContent = "Tema Actual : guinda";
    localStorage.setItem("temaactual","guinda");
});

verde.addEventListener("click", () => {
    document.body.classList.remove("tema-azul", "tema-guinda", "tema-rosado");
    document.body.classList.add("tema-verde");
    temaactual.textContent = "Tema Actual: verde";
    localStorage.setItem("temaactual","verde");
});

rosado.addEventListener("click", () => {
    document.body.classList.remove("tema-azul", "tema-guinda", "tema-verde");
    document.body.classList.add("tema-rosado");
    temaactual.textContent = "Tema Actual: tema-rosado";
    localStorage.setItem("temaactual","rosado");
});

function cargartemainicial(){
    const temainicial = localStorage.getItem("temaactual");
    if(temainicial){
        let textomostrar = temainicial.replace("tema-","");
        textomostrar = textomostrar.charAt(0).toUpperCase() + textomostrar.slice(1)
        textomostrar = "Tema Actual: " + textomostrar
        temaactual.textContent = textomostrar;
        document.body.classList.add(temainicial)
    }
  
}