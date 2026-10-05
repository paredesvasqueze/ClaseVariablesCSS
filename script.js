const lista = document.getElementById("tema");

lista.addEventListener("input",()=>{
    document.body.className="";
    document.body.classList.add(lista.value);
})