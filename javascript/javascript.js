const input = document.getElementById("input");

let primerNumero="";
let segundoNumero="";
let operador="";
function ingresarNumeros(valor){
    input.value += valor;
}

function mas(){
    primerNumero=input.value;
    input.value += "+";
    operador="+";
}
function menos(){
    primerNumero=input.value;
    input.value += "-";
    operador="-";
}
function multiplicar(){
    primerNumero=input.value;
    input.value += "*";
    operador="*";
}
function dividir(){
    primerNumero=input.value;
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
            break;
        } 
        case "-":{
            resultado=parseInt(primerNumero) - parseInt(segundoNumero);
            input.value=resultado;
            break;
        }
        case "*":{
            resultado=parseInt(primerNumero) * parseInt(segundoNumero);
            input.value=resultado;
            break;
        }
        case "/":{
            resultado=parseInt(primerNumero) / parseInt(segundoNumero);
            input.value=resultado;
            break;
        }
    }
    alert(segundoNumero);
}

