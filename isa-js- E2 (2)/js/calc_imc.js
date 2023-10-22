
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida nutricionista";

var pacientes = document.querySelectorAll (".paciente");

//console.log(paciente.length);


for (var i = 0; i < pacientes.length; i++ ) {
    
    var paciente = pacientes[i];


    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;


    //console.log(paciente); // tr
    //console.log(tdPeso); // td que tem o peso
    //console.log(peso); //Obter 100
    //console.log(altura);
    
    var tdImc = paciente.querySelector(".info-imc");


    var pesoValido = validaPeso(peso);
    var alturaValida = validaAltura(altura); 

   
    
    if (!pesoValido){
        console.log("peso inválido");
        pesoValido = false;
        tdImc.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido");
    }
    
    if (!alturaValida){
        console.log("altura inválida");
        alturaValida = false;
        tdImc.textContent = "Altura inválida!";
        paciente.classList.add("paciente-invalido");  
    }
    
    if (alturaValida && pesoValido){
        var imc = calculaImc (peso,altura) ;
        tdImc.textContent = imc;
        
    }
    
    
}

function validaPeso(peso) {

    if (peso >= 0 && peso <= 1000) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {

    if (altura >= 0 && altura <= 3.00) {
        return true;
    } else {
        return false;
    }
}

function validaPaciente( paciente){

}
// 100 / 2.0 x 2.0 = 100 / 4 =>>>>>>> 25

function calculaImc(peso,altura){
    var imc = 0;
     imc = peso / ( altura * altura ) ;

     return imc.toFixed(2);

}




