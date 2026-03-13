function venda(){
    const numInput = document.getElementById("valor")
    let num = parseInt(numInput.value)
    const resultado = document.getElementById("valorPagar")
    resultado.innerHTML = ""

    if(isNaN(num) || num === null || num === ""){
        resultado.innerHTML = "Digite quantas maçãs deseja!"
    } else if(num < 12){
        let valor = num * 1.30
        resultado.innerHTML = `O total a ser pago é de R$${valor}.`
    }else {
        let valor = num * 1
        resultado.innerHTML = `O total a ser pago é de R$${valor}.`
        return
    }
}
const botao = document.getElementById('comprar')
botao.addEventListener('click', venda)