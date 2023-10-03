const input = document.getElementById("input");

let primerNumero="";
let segundoNumero="";
let operador="";
function probando(valor){
    input.value += valor;
}

function mas(){
    primerNumero=input.value;
    input.value += "+";
    operador="+";
}
function menos(){
    input.value += "-";
    operador="-";
}
function multiplicar(){
    input.value += "*";
    operador="*";
}
function dividir(){
    input.value += "/";
    operador="/";
}

function calcular(){
    segundoNumero=input.value;
    cantidadCaracter = primerNumero.length + 1;
    cantidadCaracterSegundo = segundoNumero.length;
    segundoNumero = segundoNumero.slice(cantidadCaracter, cantidadCaracterSegundo);

    switch (operador){
        case "+":{
            resultado=parseInt(primerNumero) + parseInt(segundoNumero);
            input.value=resultado;
        } 
    }
    alert(segundoNumero);
}

