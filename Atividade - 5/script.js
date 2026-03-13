function media(){
    const nota1 = document.getElementById("nota1")
    const nota2 = document.getElementById("nota2")
    const nota3 = document.getElementById("nota3")
    const resultado = document.getElementById("resposta")
    resultado.innerHTML = ""

    let num1 = parseInt(nota1.value) 
    let num2 = parseInt(nota2.value) 
    let num3 = parseInt(nota3.value) 

    if(isNaN(num1) || num2 === null || num3 === ""){
        resultado.innerHTML = "<p>Por Favor digite suas notas!</p>"
        return
    }


    let media = (num1 + num2 + num3) / 3

    if(media >= 7){
        resultado.innerHTML += `<p>Sua media foi de: ${media}, Você esta Aprovado! PARABÉNS!!! </p>`
    }else if(media <= 5){
        resultado.innerHTML += `<p>Sua média foi de: ${media}, Você esta na Recuperação! Boa Sorte!</p>`
    }else{
        resultado.innerHTML += `<p>Sua média foi de: ${media}, Você esta Reprovado!</p>`
    }

}
const botao = document.getElementById("resultado")
botao.addEventListener('click',media)