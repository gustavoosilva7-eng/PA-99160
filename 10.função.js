function somar(a,b){
    return a + b
}

const soma = somar(2,3)
console.log(`soma: ${soma}`)


function subtrair(a,b){
    return a - b
}

const subtracao = subtrair(5,2)
console.log(`subtração: ${subtracao}`)

function multiplicar(a,b){
    return a * b
}   

const multiplicacao = multiplicar(2,3)
console.log(`multiplicação: ${multiplicacao}`)

function dividir(a,b){
    return a / b
}   

const divisao = dividir(10,2)
console.log(`divisão: ${divisao}`)


// função sem retorto
function cabecalho(){
    console.log("====================")
    console.log("   Calculadora JS   ")
    console.log("====================") 
}

cabecalho()
