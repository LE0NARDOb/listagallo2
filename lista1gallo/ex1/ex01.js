const tamanho = 15;
let vetor = [];

function executar1() {
    lerVetor();
    alert(`A soma dos elementos é ${somaVetor()}`);
    exibirVetor();
}

function lerVetor(){
    for (let i = 0; i < tamanho; i++){
        let x = Number(prompt(`Informe o ${i+1}° número: `))
        vetor.push(x);
    }

}

function somaVetor(){
    let soma = 0;
    for (let i = 0; i < tamanho; i++) {
        soma += vetor[i];
    }
    return soma;
}

function exibirVetor(){
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = '';
    for (let i = 0; i < tamanho; i++) {
        resultado.innerHTML += `<p>Vetor[${i}]=${[vetor[i]]}</p>`;
    }
}