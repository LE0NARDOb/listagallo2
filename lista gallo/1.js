class ListaDeCompras {
  constructor() {
    this.produtos = [];
  }

  adicionarItem(item) {
    this.produtos.push(item);
    console.log(`Item "${item}" adicionado à lista.`);
  }

  pesquisarItem(item) {
    const encontrado = this.produtos.includes(item);
    if (encontrado) {
      console.log(`Item "${item}" encontrado na lista.`);
    } else {
      console.log(`Item "${item}" não encontrado na lista.`);
    }
  }

  removerItem(item) {
    const indice = this.produtos.indexOf(item);
    if (indice !== -1) {
      this.produtos.splice(indice, 1);
      console.log(`Item "${item}" removido da lista.`);
    } else {
      console.log(`Item "${item}" não encontrado na lista. Nenhuma remoção realizada.`);
    }
  }

  exibirLista() {
    console.log("\nLista de Compras Atualizada:");
    this.produtos.forEach((item, index) => {
      console.log(`${index + 1}. ${item}`);
    });
  }
}


function interagirComUsuario(lista) {
  while (true) {
    const opcao = prompt("Escolha uma opção:\n1. Adicionar item\n2. Pesquisar item\n3. Remover item\n4. Exibir lista\n5. Sair");

    switch (opcao) {
      case '1':
        const novoItem = prompt("Digite o nome do item:");
        lista.adicionarItem(novoItem);
        break;

      case '2':
        const itemParaPesquisar = prompt("Digite o nome do item a ser pesquisado:");
        lista.pesquisarItem(itemParaPesquisar);
        break;

      case '3':
        const itemParaRemover = prompt("Digite o nome do item a ser removido:");
        lista.removerItem(itemParaRemover);
        break;

      case '4':
        lista.exibirLista();
        break;

      case '5':
        console.log("Saindo do programa.");
        return;

      default:
        console.log("Opção inválida. Tente novamente.");
    }
  }
}


const listaDeCompras = new ListaDeCompras();
interagirComUsuario(listaDeCompras);
