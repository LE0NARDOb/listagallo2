const tamanho = 5;

let v1 = [tamanho], v2 = [tamanho], v3 = [tamanho];

function executar02(){
    for (let i = 0; i < tamanho; i++){
        v1[i] = Number(prompt(`Vetor 1 ${i+1}° número: `));
    
    }
    for (let i = 0; i < tamanho; i++){
        v2[i] = Number(prompt(`Vetor 2 ${i+1}° número: `));
    
    }
    for (let i = 0; i < tamanho; i++){
        v3[i] = v1[i] + v2[i];
    
    }
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = '';
    for (let i = 0; i < tamanho; i++) {
        resultado.innerHTML += `<p>Vetor[${i}]=${[v3[i]]}</p>`;
    }
}