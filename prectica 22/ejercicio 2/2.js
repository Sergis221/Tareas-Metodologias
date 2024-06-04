'use strict';
//segundo ejercicio
let tabla_de_multiplicar = function(numero) {
    alert("Tabla de multiplicar del " + numero);
    for (var i = 1; i <= 10; i++) {
        let result = numero * i;
        alert (`${numero} x ${i} =${result}`);
    }
};
let numeroingresado = parseInt(prompt("Ingrese un numero para mostrar su T.M: "));
tabla_de_multiplicar(numeroingresado);
