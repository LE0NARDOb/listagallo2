function calcularOperacoes() {
    // Obter os vetores de entrada do usuário
    var vetor1 = document.getElementById('vetor1').value.split(',').map(Number);
    var vetor2 = document.getElementById('vetor2').value.split(',').map(Number);
    var operacoes = document.getElementById('operacoes').value.split('');

    // Verificar se os vetores têm o mesmo tamanho
    if (vetor1.length !== 20 || vetor2.length !== 20 || operacoes.length !== 20) {
        alert("Certifique-se de que todos os vetores têm 20 elementos.");
        return;
    }

    // Realizar as operações e armazenar os resultados em um terceiro vetor
    var resultado = [];
    for (var i = 0; i < 20; i++) {
        switch (operacoes[i]) {
            case '+':
                resultado.push(vetor1[i] + vetor2[i]);
                break;
            case '-':
                resultado.push(vetor1[i] - vetor2[i]);
                break;
            case '*':
                resultado.push(vetor1[i] * vetor2[i]);
                break;
            case '/':
                resultado.push(vetor1[i] / vetor2[i]);
                break;
            default:
                alert("Operação inválida. Use '+', '-', '*' ou '/'.");
                return;
        }
    }

    // Exibir o resultado na página
    document.getElementById('resultado').innerText = "Resultado: " + resultado.join(', ');
}