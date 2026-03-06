//vetor 
const numeros = [1,2,3,4,5]

//Usando o map, crie um vetor com os numeros do vetor 'numeros' cada um multiplicado por 2.

//filtre os elementos do vetor 'numeros' para obter um novo vetor apenas com numeros pares.

//Usando reduce, some todos os numeros do vetor 'numeros'.
const resultado = numeros.map(numero => numero * 2)
console.log(resultado)

const filtro = numeros.filter(numero => numero % 2 == 0)
filtro.forEach(numero => {console.log(numero)})

const somaNumeros = numeros.reduce((total, u) => total + u, 0)
console.log(`\n Soma dos valores dos vetores: ${somaNumeros}`)