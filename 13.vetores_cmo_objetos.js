const usuarios = [
    {nome: 'João', idade: 25},
    {nome: 'Maria', idade: 30},
    {nome: 'Pedro', idade: 15},
    {nome: 'Ana', idade: 18}
]

console.log("Exibindo todos os usuários: ")

//exibindo apenas os elementos do vetor
usuarios.forEach(usuario => {
    console.log(`Nome: ${usuario.nome}, Idade: ${usuario.idade}`)
})

console.log("\nfiltrando idade maior que usuário: ")
//ADICIONANDO O FILTRO PARA EXIBIR APENAS USUÁRIOS MAIORES DE 18 ANOS
const maioresDe18 = usuarios.filter(usuario => usuario.idade >= 18)

//EXIBINDO APENAS OS USUÁRIOS MAIORES DE 18 ANOS
maioresDe18.forEach(usuario => {
    console.log(`Nome: ${usuario.nome}, Idade: ${usuario.idade}`)
})
//EXIBINDO A QUANTIDADE DE USUÁRIOS MAIORES DE 18 ANOS
console.log("\nQuantidade de usuários maiores de 18 anos: " + maioresDe18.length)

//EXIBINDO SOMENTE 1 USUARIO MAIOR DE 18 ANOS
const primeiroMaiorDe18 = usuarios.find(usuario => usuario.idade >= 18)
console.log("\nPrimeiro usuário maior de 18 anos: ")
console.log(`Nome: ${primeiroMaiorDe18.nome}, Idade: ${primeiroMaiorDe18.idade}`)

//EXIBINDO 1 USUARIO DA LISTA
const usuarioEspecifico = usuarios.find(usuario => usuario.nome === 'Maria')
console.log("\nUsuário específico: ")
console.log(`Nome: ${usuarioEspecifico.nome}, Idade: ${usuarioEspecifico.idade}`)

//EXIBINDO APENAS OS NOMES DOS USUÁRIOS
console.log("\nExibindo apenas os nomes dos usuários: ")
const nomesUsuarios = usuarios.map(usuario => usuario.nome)
console.log(nomesUsuarios)

//somar as idades dos usuários
// "0" é o valor inicial do "total", e "u" é o usuário atual do array

const somaIdades = usuarios.reduce((total, u) => total + u.idade, 0)
console.log("\nSoma das idades dos usuários: " + somaIdades)