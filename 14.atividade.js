const listaDeAlunos = [
    {nome : 'Ana', nota: 5.0},
    {nome : 'Bruno', nota: 10.0},
    {nome : 'Carla', nota: 2.0},
    {nome : 'Andrea', nota: 7.0},
    {nome : 'Marta', nota: 6.0}
]

console.log("\nEncontre a aluna Marta e mostre o nome e a média dela.")
const alunaMarta = listaDeAlunos.find(aluno => aluno.nome === 'Marta')
console.log(`Nome: ${alunaMarta.nome}, Média: ${alunaMarta.nota}`)

console.log("\nMostre a média geral da turma.")
const mediaGeral = listaDeAlunos.reduce((total, aluno) => total + aluno.nota, 0) / listaDeAlunos.length
console.log(`Média geral da turma: ${mediaGeral.toFixed(2)}`)

console.log("\nMostre o nome e a nota dos alunos com nota abaixo de 7.0")
const reprovado = listaDeAlunos.filter(reprovados => reprovados.nota < 7.0)
reprovado.forEach(listaDeAluno =>{
    console.log(`Nome: ${listaDeAluno.nome}, Nota: ${listaDeAluno.nota}`)
})

console.log("\nMostre apenas o nome dos alunos com nota maior ou igual a 7.0")
const aprovado = listaDeAlunos.filter(aprovados => aprovados.nota >= 7.0)
aprovado.forEach(aprovados =>{
    console.log(`Nome : ${aprovados.nome}, Nota: ${aprovados.nota}`)
})