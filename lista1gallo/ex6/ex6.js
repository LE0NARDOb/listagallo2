var vetor = new Array(10);

for (var i = 0; i < 10; i++) {
    vetor[i] = parseFloat(prompt("Digite o elemento " + (i + 1) + ":"));
}

var soma = 0;
for (var i = 0; i < 10; i++) {
    soma += vetor[i];
}

var media = soma / 10;

console.log("A média aritmética dos elementos é: " + media);
