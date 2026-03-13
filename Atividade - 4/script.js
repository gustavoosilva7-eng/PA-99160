function require(){
    const numMatricula = document.getElementById("matricula")
    const dataNascimento = document.getElementById("nascimento")
    const trabalho = document.getElementById("anos")
    const resultado = document.getElementById('required')
    
    let matricula = numMatricula.value
    let anosTrabalho = parseInt(trabalho.value)

    let hoje = new Date();
    let dataNasc = new Date(dataNascimento.value);
    let idade = hoje.getFullYear() - dataNasc.getFullYear();

    resultado.innerHTML = ""

    if (!matricula || isNaN(anosTrabalho) || !dataNascimento.value) {
        resultado.innerHTML = "Por favor, preencha todos os campos!";
        return;
    }
    
    
    if(anos >= 30 || nascimento >= 65){
        resultado.innerHTML = `<strong>Requerer aposentadoria:</strong><br>` +
                              `Matrícula: ${matricula}<br>` +
                              `Idade: ${idade} anos<br>` +
                              `Tempo de Trabalho: ${anosTrabalho} anos`;
    }else{
        resultado.innerHTML = `<strong>Não requerer aposentadoria:</strong><br>` +
                              `Matrícula: ${matricula}<br>` +
                              `Idade: ${idade} anos<br>` +
                              `Tempo de Trabalho: ${anosTrabalho} anos`;
    }
        return
}
const botao = document.getElementById('enviar')
botao.addEventListener('click',require)