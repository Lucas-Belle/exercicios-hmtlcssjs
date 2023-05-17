let VlrQuilo = document.querySelector("#VlrQuilo");
let QntQuilo = document.querySelector("#QntQuilo");
let btMultiplicar = document.querySelector("#btMultiplicar");
let h3Resultado = document.querySelector("#h3Resultado");

function multiplicar (){
    let Vlr = Number(VlrQuilo.value)
    let Qnt = Number(QntQuilo.value)

    h3Resultado.innerHTML = "Valor a ser pago: "+(Vlr * Qnt);
}

btMultiplicar.onclick = function(){
    multiplicar();
}