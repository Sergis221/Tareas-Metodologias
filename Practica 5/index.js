'use strict';

let totalkms = prompt("Ingrese el kilometraje");

let precioPorKm = 0.25;

let arranque = 0.55;

let valorapagar = (precioPorKm * totalkms) + arranque;

if (valorapagar < 1.5) {
    valorapagar = 1.5
}

alert (valorapagar);