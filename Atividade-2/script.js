function votar(){
    const numeroInput = document.getElementById("idadeVoto")
    const resultado = document.getElementById("permissaoVoto")
    resultado.innerHTML = ""
    let num1 = parseInt(numeroInput.value)

    if(isNaN(num1) || num1 === null || num1 === ""){
        resultado.innerHTML = "Por favor, Digite sua idade..."
    } else if(num1 < 16){
        resultado.innerHTML = `Se você tem ${num1} Anos de Idade, Você ainda não pode votar.`
    } else if(num1 < 18 || num1 > 65){
        resultado.innerHTML = `Se você tem ${num1} Anos de Idade, O voto não é Obrigatório.`
    }else
        resultado.innerHTML = `Se você tem ${num1} Anos de Idade, Seu voto é Obrigatorio.`
        return
}
const botao = document.getElementById('botaoEnviar')
botao.addEventListener("click",votar)