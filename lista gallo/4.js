class NavegadorSimples {
  constructor() {
    this.historico = [];
  }

  empilhar(endereco) {
    this.historico.push(endereco);
    console.log(`Endereço ${endereco} adicionado ao histórico.`);
  }

  desempilhar() {
    if (this.historico.length > 0) {
      const enderecoRemovido = this.historico.pop();
      console.log(`Endereço ${enderecoRemovido} removido do histórico.`);
      return enderecoRemovido;
    } else {
      console.log("Histórico vazio. Não é possível desempilhar.");
      return null;
    }
  }

  exibirHistorico() {
    console.log("\nHistórico de Navegação Atualizado:");
    this.historico.forEach((endereco, index) => {
      console.log(`${index + 1}. ${endereco}`);
    });
  }
}


const navegador = new NavegadorSimples();

navegador.empilhar("https://www.exemplo.com");
navegador.empilhar("https://www.exemplo.com/pagina1");
navegador.empilhar("https://www.exemplo.com/pagina2");

navegador.exibirHistorico();

const enderecoAtual = navegador.desempilhar();
console.log(`Endereço Atual: ${enderecoAtual}`);

navegador.exibirHistorico();
