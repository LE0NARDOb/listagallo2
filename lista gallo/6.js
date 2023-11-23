class FilaAtendimento {
  constructor() {
    this.solicitacoes = [];
  }

  adicionarSolicitacao(cliente) {
    this.solicitacoes.push(cliente);
    console.log(`Nova solicitação de ${cliente} adicionada à fila.`);
    this.exibirFila();
  }

  atenderProximo() {
    if (this.solicitacoes.length > 0) {
      const clienteAtendido = this.solicitacoes.shift();
      console.log(`Atendendo ${clienteAtendido}.`);
      this.exibirFila();
    } else {
      console.log("Fila de atendimento vazia. Não há solicitações para atender.");
    }
  }

  exibirFila() {
    if (this.solicitacoes.length > 0) {
      console.log("\nFila de Atendimento:");
      this.solicitacoes.forEach((cliente, index) => {
        console.log(`${index + 1}. ${cliente}`);
      });
    } else {
      console.log("Fila de Atendimento vazia.");
    }
  }
}


const fila = new FilaAtendimento();

fila.adicionarSolicitacao("Cliente 1");
fila.adicionarSolicitacao("Cliente 2");
fila.adicionarSolicitacao("Cliente 3");

fila.atenderProximo();
fila.atenderProximo();
fila.atenderProximo();
fila.atenderProximo();
