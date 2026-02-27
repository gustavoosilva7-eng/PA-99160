const listaNomes = ['Maria', 'João', 'Ana', 'Pedro']

console.log("Exibindo todos os elementos: ")
console.log(`Lista de Nomes: ${listaNomes}`)

console.log("\nExibindo o primeiro elemento: ")
console.log(listaNomes[0])

console.log("\nExibindo o segundp elemento: ")
console.log(listaNomes[1])

console.log("\nAdicionando um elemento: ")
listaNomes.push('Lucas')
console.log(listaNomes)

console.log("\nRemovendo o primeiro elemento no final: ")
listaNomes.shift()
console.log(listaNomes)

console.log("\nRemovendo o Ultimo elemento no final: ")
listaNomes.pop()
console.log(listaNomes)

console.log("\nRemovendo um elemento especifico: ")
listaNomes.splice(3, 1) // Remove o elemento no índice 3 (Lucas)
console.log(listaNomes)
