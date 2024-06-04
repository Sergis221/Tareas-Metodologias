'use strict';

let celcius = (a) => a * (9/5) +32;
let gradoscelcius = prompt ("Ingresar los datos a convertir a Fahrenheit");
let Fahrenheit = celcius(parseFloat(gradoscelcius));
alert("Los grados Fahrenheit de " + gradoscelcius + "es " + Fahrenheit);