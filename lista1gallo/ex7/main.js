function separarParesImpares(vetor) {
    var pares = [];
    var impares = [];

    for (var i = 0; i < vetor.length; i++) {
      if (vetor[i] % 2 === 0) {
        pares.push(vetor[i]);
      } else {
        impares.push(vetor[i]);
      }
    }

    // Exibir elementos pares
    document.write("<p>Elementos Pares: " + pares.join(', ') + "</p>");

    // Exibir elementos ímpares
    document.write("<p>Elementos Ímpares: " + impares.join(', ') + "</p>");
  }

  // Exemplo de uso com um vetor de 10 elementos
  var meuVetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  separarParesImpares(meuVetor);