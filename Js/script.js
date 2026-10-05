const lista = document.getElementById("tema");

lista.addEventListener("input",()=>{
    document.body.className="";
    document.body.classList.add(lista.value);
    localStorage.setItem("mitema",lista.value);
})

function cargartemainicial(){
    const temainicial=localStorage.getItem("mitema");
    if (temainicial)
    {
        lista.value=temainicial;
        document.body.className="";
        document.body.classList.add(temainicial);
        localStorage.setItem("mitema",temainicial);
        console.log(temainicial);
    }
}
cargartemainicial();