function calcularAcertos() {
    // Obter o gabarito e o número de alunos
    var gabarito = document.getElementById("gabarito").value.toUpperCase();
    var numAlunos = document.getElementById("alunos").value;

    // Verificar se ambos foram fornecidos
    if (gabarito === "" || isNaN(numAlunos) || numAlunos <= 0) {
        alert("Por favor, forneça um gabarito válido e o número de alunos.");
        return;
    }

    // Inicializar array para armazenar resultados dos alunos
    var resultados = [];

    // Calcular acertos para cada aluno
    for (var i = 1; i <= numAlunos; i++) {
        var respostaAluno = prompt("Respostas do Aluno " + i + ":").toUpperCase();
        var acertos = 0;

        // Comparar cada resposta com o gabarito
        for (var j = 0; j < gabarito.length; j++) {
            if (respostaAluno[j] === gabarito[j]) {
                acertos++;
            }
        }

        // Armazenar resultado
        resultados.push("Aluno " + i + ": " + acertos + " acertos");
    }

    // Exibir resultados na página
    document.getElementById("resultado").innerHTML = resultados.join("<br>");
}