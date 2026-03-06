//criar uma funcao para verificar se umm numero e positivo ou negativo

function numeros(){
a = 10

if (a >= 0)
    console.log(`Numero positivo: ${a}`)
else {
    console.log(`Numero negativo: ${a}`)}
}

numeros()
                    //operação ternária "?" if se for maior que 0 ":" else se for menor que 0                    
const verificar = (numero) => numero > 0 ? "Positivo" : "Negativo"
resultado = verificar(10)
console.log(resultado)