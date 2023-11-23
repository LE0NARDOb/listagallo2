class EditorDeTexto {
    constructor() {
      this.texto = '';
      this.pilha = [];
      this.editorElement = document.getElementById('editor');
    }
  
    adicionarTexto(novoTexto) {
      this.pilha.push(this.texto);
      this.texto += novoTexto;
      this.atualizarEditor();
    }
  
    desfazer() {
      if (this.pilha.length > 0) {
        this.texto = this.pilha.pop();
        this.atualizarEditor();
      }
    }
  
    atualizarEditor() {
      this.editorElement.value = this.texto;
    }
  }
  
  const editor = new EditorDeTexto();
  
  document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key === 'z') {
      // Desfazer (Ctrl+Z)
      editor.desfazer();
      event.preventDefault(); // Evitar que o navegador também desfaça a última ação
    }
  });
  
  document.getElementById('editor').addEventListener('input', function() {
    const novoTexto = this.value;
    editor.adicionarTexto(novoTexto);
  });
  