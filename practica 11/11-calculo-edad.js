/*
Escribir una funcion que reciba como argumento la edad de una 
persona y devuelva true si es mayor a 18 y false si es menor
*/

'use strict';

function calcularead(age) {
    return (age >= 18);
    /*
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
    */
}

let edad = Number(prompt("Ingrese su edad"));

let result = calcularead(edad);
alert("El resultado es" + result);