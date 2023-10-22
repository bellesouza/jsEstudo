var botaoAdd =  document.querySelector("#adicionarPaciente");

botaoAdd.addEventListener("click", function (event){
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona");
//extraindo informacoes do paciente do form
var paciente = obtemPacientesForm(form);
 console.log(paciente)
//cria tr e td 
   var pacienteTr =  montaTr(paciente);


   var erros = validaPaciente(paciente);


   
    if (erros.length > 0) {
        exibeMensagensDeErro(erros);
    //var mensagemErro = document.querySelector("#mensagens-erro");
    //mensagemErro.textContent = erros;
     return;
    }


function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";
    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent= erro;
        ul.appendChild(li);
    });
}




   if (!validaPaciente(paciente)){
    console.log ("paciente inválido");
    return;
   }

//add paciente na tabela
    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

    form.reset();
    var mensagemErro = document.querySelector("#mensagens-erro");
    mensagemErro.innerHTML = "";

});
function obtemPacientesForm (form){
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}




function montaTr(paciente) {
    
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add ("paciente");


    //var pesoTd = document.createElement("td");
    //var alturaTd = document.createElement("td");
    //var gorduraTd = document.createElement("td");
    //var imcTd = document.createElement("td");

    
    //pesoTd.textContent = paciente.peso;
    //alturaTd.textContent = paciente.altura;
    //gorduraTd.textContent = paciente.gordura;
    //imcTd.textContent = paciente.imc;

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));
    

    return pacienteTr;
}

function montaTd(dado,classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}


function validaPaciente(paciente){

    var erro = [];
    if (paciente.nome.length == 0 ) erro.push ("nome inválido, não pode ser em branco");

    
    if (!validaPeso(paciente.peso)) erro.push("peso é inválido");

    if (paciente.peso.length == 0 ) erro.push ("peso inválido, não pode ser em branco");

   
    if (!validaAltura(paciente.altura))erro.push("Altura inválida");

    if (paciente.altura.length == 0 ) erro.push ("Altura inválida, não pode ser em branco");


    if (paciente.gordura.length == 0) erro.push ("A gordura não pode ser em branco")
    return erro;
}