// Função para calcular a multiplicação dos valores pelos índices
function calcularMultiplicacao() {
    var inputElements = document.querySelectorAll('.element-input');
    var vetor = [];

    // Obtém os valores dos inputs e os adiciona ao vetor
    inputElements.forEach(function(input) {
        vetor.push(parseInt(input.value));
    });

    // Calcula a multiplicação dos valores pelos índices
    var resultado = vetor.map(function(valor, indice) {
        return valor * indice;
    });

    // Exibe o resultado da multiplicação no HTML
    document.getElementById('resultado').textContent = resultado.join(', ');
}

// Cria os inputs para os elementos do vetor no HTML
var inputContainer = document.getElementById('input-container');
for (var i = 1; i <= 20; i++) {
    var input = document.createElement('input');
    input.type = 'number';
    input.className = 'element-input';
    input.placeholder = 'Elemento ' + i;
    inputContainer.appendChild(input);
    inputContainer.appendChild(document.createElement('br'));
}
