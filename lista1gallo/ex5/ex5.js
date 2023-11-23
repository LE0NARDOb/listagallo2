var temperaturas = new Array(24);

for (var i = 0; i < 24; i++) {
    var temperatura = parseFloat(prompt("Digite a temperatura para o horário " + (i + 1) + ":"));
    temperaturas[i] = temperatura;
}

var temperaturaMaxima = temperaturas[0];
var temperaturaMinima = temperaturas[0];
var somaTemperaturas = temperaturas[0];
var horarioMaxima = 1;
var horarioMinima = 1;

for (var i = 1; i < 24; i++) {
    somaTemperaturas += temperaturas[i];

    if (temperaturas[i] > temperaturaMaxima) {
        temperaturaMaxima = temperaturas[i];
        horarioMaxima = i + 1;
    }

    if (temperaturas[i] < temperaturaMinima) {
        temperaturaMinima = temperaturas[i];
        horarioMinima = i + 1;
    }
}

var mediaTemperaturas = somaTemperaturas / 24;

console.log("Temperatura Máxima: " + temperaturaMaxima + "°C, Horário: " + horarioMaxima + "h");
console.log("Temperatura Mínima: " + temperaturaMinima + "°C, Horário: " + horarioMinima + "h");
console.log("Média das Temperaturas: " + mediaTemperaturas + "°C");
