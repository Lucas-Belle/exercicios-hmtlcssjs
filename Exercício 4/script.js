let  VlrSaldo = document.querySelector("#VlrSaldo");
let  btCalcular = document.querySelector("#btCalcular");
let  h3Resultado = document.querySelector("#h3Resultado");

function CalcularSaldo (){
    let Saldo = Number(VlrSaldo.value)
    
    h3Resultado.innerHTML = "Saldo com reajuste: "+
    (Saldo+(Saldo * 1/100));
}

btCalcular.onclick = function(){
    CalcularSaldo();
}