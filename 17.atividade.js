//Atividade

// Crie uma função para caulcular a media aritmetica.

notas = [5,5,5,]

const media = notas.reduce((total,media) => total + media, 0)/ notas.length
console.log(`Media geral: ${media.toFixed(2)}`)