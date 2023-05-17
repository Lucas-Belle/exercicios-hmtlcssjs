let inputVlrPago = document.querySelector("#inputVlrPago");
let inputVlrProd = document.querySelector("#inputVlrProd");
let btCalcular = document.querySelector("#btCalcular");
let h3Resultado = document.querySelector("#h3Resultado");

function subtrair (){
    let Pago = Number(inputVlrPago.value)
    let Prod = Number(inputVlrProd.value)

    h3Resultado.innerHTML = "Valor do troco: "+ (Pago - Prod);
}

btCalcular.onclick = function(){
    subtrair();
}
    
