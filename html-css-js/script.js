function gerarTabuada(){
    // Pegar o valor do input no HTML.
    const numeroInput = document.getElementById("numeroInput")
    let numero = parseInt(numeroInput.value);
    
    
    // Pega o elemnto HTML onde a tabuada será exibida.
    const resultadoDiv = document.getElementById("resultadoTabuada");
    resultadoDiv.innerHTML = "";

    // verifica se a entrada é um numero valido.
    if(isNaN(numero) || numero === null || numero === ""){
        resultadoDiv.innerHTML = "<p> Por favor, digite um número...</p>";
        return;
    }

    // Adiciona um titulo para tabuada.
    resultadoDiv.innerHTML += `<h2>Tabuada do número:  ${numero}</h2>`;

    // Leço de repetiçao para gerar a tabuada de 1 até 10. 
    for (let i = 1; i <= 10; i++){
        let resultado = numero * i;
        resultadoDiv.innerHTML += `<p> ${numero} x ${i} = ${resultado}</p>`;
    }
}

const gerarBotao = document.getElementById("gerarBotao");
gerarBotao.addEventListener("click", gerarTabuada);