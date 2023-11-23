// Função para inverter a ordem dos elementos em um vetor
function inverterVetor() {
    var inputElements = document.querySelectorAll('.element-input');
    var vetor = [];
    
    // Obtém os valores dos inputs e os adiciona ao vetor
    inputElements.forEach(function(input) {
        vetor.push(parseInt(input.value));
    });

    // Inverte o vetor
    var tamanho = vetor.length;
    var meio = Math.floor(tamanho / 2);
    
    for (var i = 0; i < meio; i++) {
        var temp = vetor[i];
        vetor[i] = vetor[tamanho - 1 - i];
        vetor[tamanho - 1 - i] = temp;
    }

    // Exibe o vetor invertido no HTML
    document.getElementById('invertido').textContent = vetor.join(', ');
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
