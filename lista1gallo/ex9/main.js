function analisarResultados() {
    // Obter os resultados do textarea e dividir em um array
    var resultadosTexto = document.getElementById("resultados").value;
    var resultados = resultadosTexto.split(" ");

    // Inicializar um objeto para armazenar as contagens de cada face
    var contagemFaces = {};

    // Contar ocorrências de cada face
    resultados.forEach(function (resultado) {
        contagemFaces[resultado] = (contagemFaces[resultado] || 0) + 1;
    });

    // Calcular porcentagens
    var totalLancamentos = resultados.length;

    // Exibir o número de ocorrências de cada face
    var ocorrenciasHTML = "Número de ocorrências de cada face:<br>";
    for (var face in contagemFaces) {
        ocorrenciasHTML += "Face " + face + ": " + contagemFaces[face] + " ocorrência(s)<br>";
    }
    document.getElementById("ocorrencias").innerHTML = ocorrenciasHTML;

    // Exibir a porcentagem de ocorrências de cada face
    var porcentagensHTML = "Porcentagem de ocorrências de cada face:<br>";
    for (var face in contagemFaces) {
        var porcentagem = (contagemFaces[face] / totalLancamentos) * 100;
        porcentagensHTML += "Face " + face + ": " + porcentagem.toFixed(2) + "%<br>";
    }
    document.getElementById("porcentagens").innerHTML = porcentagensHTML;
}