'use strict'

function validateField(isVisible, show, hide){
if (isVisible){
    show();
}else{
    hide();
}
}

let showField = function(){
    alert("Campo visible");

}

let hideField = () => alert ("Campo Oculto");

validateField (false, showField, hideField);