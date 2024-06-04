'use strict';

//primer ejercicio
let age = function (añonacimiento,year){
    return year - añonacimiento;
}
let edad = age (prompt("Ingrese el año de nacimiento "), prompt ("Ingrese el año actual "))
alert (edad);