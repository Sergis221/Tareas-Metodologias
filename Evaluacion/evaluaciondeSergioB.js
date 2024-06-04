'use strict';

// declarar las tres variables a usar
let valEstacionamiento = 2.00;
let valProduc = prompt("Ingrese el valor del producto: ");
let canProduc = prompt("Ingrese la cantidad de producto a llevar"); 

//calcular el valor total de la compra
let valTot = (valProduc * canProduc); 

//si la compra supera los $20.00 el estacionamiento sera gratis
if (valTot > 20){
    alert("Estacionamiento gratuito") 
}else  
{
    //si la compra es menor a $20.00 se cobrara el estacionamiento
    alert ("Valor a pagar son $2.00") 
}

