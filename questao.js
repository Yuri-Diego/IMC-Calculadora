function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

function classificarIMC(imc) {
    switch (true) {
        case (imc < 18.5):
            return "Abaixo do peso";
        case (imc >= 18.5 && imc < 24.9):
            return "Peso normal";
        case (imc >= 25 && imc < 29.9):
            return "Sobrepeso";
        case (imc >= 30):
            return "Obesidade";
        default:
            return "IMC inválido";
    }
}

document.getElementById('button-calcular').addEventListener('click', function() {
    let altura = parseFloat(document.getElementById('altura').value);
    let peso = parseFloat(document.getElementById('peso').value);

    if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
        exibirResultado("Por favor, insira valores válidos para altura e peso.");
        return;
    }

    let imc = calcularIMC(peso, altura);
    let classificacao = classificarIMC(imc);

    exibirResultado(`Seu IMC é ${imc.toFixed(2)}. Classificação:  ${classificacao}`);
});

function exibirResultado(mensagem) {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '';
    const h1 = document.createElement('h1');
    h1.textContent = mensagem;
    resultadoDiv.appendChild(h1);
}

