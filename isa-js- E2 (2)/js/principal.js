console.log("fui carregado de um arquivo externo");
			
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

    var pesoValido = true;
    var alturaValida = true; 
    
    if (peso < 0 || peso >= 1000 ){
        console.log("peso inválido");
        pesoValido = false;
        tdImc.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido");
    }
    
    if (altura <= 0 || altura >= 3.00 ){
        console.log("altura inválida");
        alturaValida = false;
        tdImc.textContent = "Altura inválida!";
        paciente.classList.add("paciente-invalido");  
    }
    
    if (alturaValida && pesoValido){
        var imc = peso / ( altura * altura ) ;
        tdImc.textContent = imc.toFixed(2);
        
    }
    
    
}
var botaoAdd =  document.querySelector("#adicionarPaciente");

botaoAdd.addEventListener("click", function (event){
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona");
    
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var pacienteTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
   gorduraTd.textContent = gordura;
   imcTd.textContent = imc;

   pacienteTr.appendChild( nomeTd );
    pacienteTr.appendChild( pesoTd);
    pacienteTr.appendChild( alturaTd);
    pacienteTr.appendChild( gorduraTd);
    pacienteTr.appendChild( imcTd);
    
    console.log(pacienteTr);


    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

});



// 100 / 2.0 x 2.0 = 100 / 4 =>>>>>>> 25




