'use strict';

var a = parseFloat(prompt("Ingresa el primer número: "));
var b = parseFloat(prompt("Ingresa el segundo número: "));

var suma = a + b;

console.log("La suma de", a, "y", b, "es:", suma);

alert(suma)



var a = parseFloat(prompt("Ingresa el primer número: "));
var b = parseFloat(prompt("Ingresa el segundo número: "));

var resta = a - b;

console.log("La resta de", a, "menos", b, "es:", resta);

alert(resta)

//Funcion calc
function calc (op, suma, resta){
    var number1 = parseFloat(prompt("Ingresa el primer número: "));
    var number2 = parseFloat(prompt("Ingresa el segundo número: "));
    
}




function validateField(queoperaciones, suma, resta){
    if (queoperaciones){
        suma();
    }else{
        resta();
    }
    }
    
    let essuma = function(){
        alert("Suma de dos valores");
    
    }
    
    let esresta = () => alert ("resta de dos valores");
    
    validateField (false, esresta, essuma);