class FilaDeImpressao {
  constructor() {
    this.solicitacoes = [];
  }

  adicionarSolicitacao(arquivo) {
    this.solicitacoes.push(arquivo);
    console.log(`Arquivo ${arquivo} adicionado à fila de impressão.`);
    this.exibirFila();
  }

  imprimirProximo() {
    if (this.solicitacoes.length > 0) {
      const arquivoImprimir = this.solicitacoes.shift();
      console.log(`Imprimindo arquivo: ${arquivoImprimir}`);
      this.exibirFila();
    } else {
      console.log("Fila de impressão vazia. Nada para imprimir.");
    }
  }

  exibirFila() {
    if (this.solicitacoes.length > 0) {
      console.log("\nFila de Impressão:");
      this.solicitacoes.forEach((arquivo, index) => {
        console.log(`${index + 1}. ${arquivo}`);
      });
    } else {
      console.log("Fila de Impressão vazia.");
    }
  }
}


const filaDeImpressao = new FilaDeImpressao();

filaDeImpressao.adicionarSolicitacao("Documento1.pdf");
filaDeImpressao.adicionarSolicitacao("Imagem.jpg");
filaDeImpressao.adicionarSolicitacao("Apresentacao.ppt");

filaDeImpressao.imprimirProximo();
filaDeImpressao.imprimirProximo();
filaDeImpressao.imprimirProximo();
filaDeImpressao.imprimirProximo();
