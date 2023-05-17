let inputNum1 = document.querySelector("#inputNum1");
let inputNum2 = document.querySelector("#inputNum2");
let btSomar = document.querySelector("#btSomar");
let h3Resultado = document.querySelector("#h3Resultado");

function somarNumero(){
    let Num1 = Number(inputNum1.value);
    let Num2 = Number(inputNum2.value);

    h3Resultado.innerHTML =
    "O resultado da soma é: "+(Num1 + Num2);
}

btSomar.onclick = function(){
    somarNumero();
}