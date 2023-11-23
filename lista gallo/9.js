class NodoPasta {
  constructor(nome, pastasFilhas = []) {
    this.nome = nome;
    this.pastasFilhas = pastasFilhas;
  }

  adicionarPasta(pastaFilha) {
    this.pastasFilhas.push(pastaFilha);
  }

  exibirEstrutura(identacao = 0) {
    console.log(`${' '.repeat(identacao)}${this.nome}/`);
    this.pastasFilhas.forEach(pastaFilha => {
      pastaFilha.exibirEstrutura(identacao + 2);
    });
  }
}


const raiz = new NodoPasta("Raiz");

const documentos = new NodoPasta("Documentos");
const imagens = new NodoPasta("Imagens");
const videos = new NodoPasta("Videos");

const fotos = new NodoPasta("Fotos");
const videosFamilia = new NodoPasta("VideosFamilia");

imagens.adicionarPasta(fotos);
videos.adicionarPasta(videosFamilia);

raiz.adicionarPasta(documentos);
raiz.adicionarPasta(imagens);
raiz.adicionarPasta(videos);

raiz.exibirEstrutura();
