class NodoMenu {
  constructor(nome, filhos = []) {
    this.nome = nome;
    this.filhos = filhos;
  }

  adicionarFilho(filho) {
    this.filhos.push(filho);
  }

  exibirMenu() {
    console.log(this.nome);
    if (this.filhos.length > 0) {
      this.filhos.forEach(filho => {
        filho.exibirMenu();
      });
    }
  }
}


const menuPrincipal = new NodoMenu("Menu Principal");

const submenuA = new NodoMenu("Submenu A");
submenuA.adicionarFilho(new NodoMenu("Item 1"));
submenuA.adicionarFilho(new NodoMenu("Item 2"));

const submenuB = new NodoMenu("Submenu B");
submenuB.adicionarFilho(new NodoMenu("Item 3"));

menuPrincipal.adicionarFilho(submenuA);
menuPrincipal.adicionarFilho(submenuB);

menuPrincipal.exibirMenu();
