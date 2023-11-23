class GerenciadorDeTarefas {
  constructor() {
    this.tarefas = [];
  }

  adicionarTarefa(tarefa) {
    this.tarefas.push(tarefa);
    console.log(`Tarefa "${tarefa}" adicionada.`);
  }

  removerTarefa(tarefa) {
    const indice = this.tarefas.indexOf(tarefa);
    if (indice !== -1) {
      this.tarefas.splice(indice, 1);
      console.log(`Tarefa "${tarefa}" removida.`);
    } else {
      console.log(`Tarefa "${tarefa}" não encontrada. Nenhuma remoção realizada.`);
    }
  }

  listarTarefas() {
    if (this.tarefas.length === 0) {
      console.log("Lista de tarefas vazia.");
    } else {
      console.log("\nLista de Tarefas:");
      this.tarefas.forEach((tarefa, index) => {
        console.log(`${index + 1}. ${tarefa}`);
      });
    }
  }
}


const gerenciador = new GerenciadorDeTarefas();

gerenciador.adicionarTarefa("Estudar JavaScript");
gerenciador.adicionarTarefa("Fazer compras");
gerenciador.adicionarTarefa("Praticar esportes");

gerenciador.listarTarefas();

gerenciador.removerTarefa("Fazer compras");

gerenciador.listarTarefas();
