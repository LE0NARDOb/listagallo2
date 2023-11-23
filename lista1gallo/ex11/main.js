// Inicializando a matriz de poltronas
const poltronas = {
    'A': Array(20).fill(false),
    'B': Array(20).fill(false),
    'C': Array(20).fill(false),
    'D': Array(20).fill(false)
};

// Função para exibir as poltronas na tabela
function exibirPoltronas() {
    for (let fileira in poltronas) {
        document.getElementById(fileira).innerHTML = poltronas[fileira].map((ocupada, index) => {
            return `<span style="color: ${ocupada ? 'red' : 'green'};">${index + 1}</span>`;
        }).join(', ');
    }
}

// Função para comprar um ingresso
function comprarIngresso() {
    const fileira = document.getElementById('fileira').value.toUpperCase();
    const poltrona = parseInt(document.getElementById('poltrona').value) - 1; // Subtraindo 1 para corresponder ao índice do array

    if (poltronas[fileira] && poltronas[fileira][poltrona] !== undefined && !poltronas[fileira][poltrona]) {
        poltronas[fileira][poltrona] = true;
        exibirPoltronas();
        atualizarTotais();
        alert('Ingresso comprado com sucesso!');
    } else {
        alert('Poltrona ocupada. Escolha outra.');
    }
}

// Função para atualizar os totais de poltronas vazias e ocupadas
function atualizarTotais() {
    const totalVazias = Object.values(poltronas).flat().filter(ocupada => !ocupada).length;
    const totalOcupadas = Object.values(poltronas).flat().filter(ocupada => ocupada).length;

    document.getElementById('totalVazias').innerText = totalVazias;
    document.getElementById('totalOcupadas').innerText = totalOcupadas;
}

// Inicializar a exibição das poltronas e totais
exibirPoltronas();
atualizarTotais();