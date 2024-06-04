'use strict';

let premio = 7;
let num;
let changes = 0;

do {
    changes= changes +1;
     num = Number (prompt("ingrese un numero"))
}while (num != premio && changes < 3);

