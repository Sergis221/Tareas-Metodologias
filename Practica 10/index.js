'use strict';

function mostrarMensaje(){
    alert ("Hola");
}


function mostrarMensajeConNombre(nombre){
    alert("Hola " + nombre)
}
mostrarMensajeConNombre("Juan Perez");


function sumarNums (a,b){
    let result= a+b;
    return result;
}
alert (sumarNums(3,2));


function generarFrase (){
    return "Hola Mundo";
}
let result;
result = generarFrase ();


function sum (primervalor, segundovalor){
    let result = primervalor + segundovalor;
    return result;
}

let resultado = sum(3,6);