function calcularPontuacao() {
    const perguntas = document.querySelectorAll('.question'); // Seleciona todas as perguntas
    let total = 0;
    let count = 0;
    let todasRespondidas = true;

    perguntas.forEach((pergunta) => {
        const selecionado = pergunta.querySelector('input:checked');
        if (selecionado) {
            total += parseInt(selecionado.value);
            count++;
        } else {
            todasRespondidas = false; // Marca como falso se alguma pergunta não for respondida
        }
    });

    if (!todasRespondidas) {
        alert("Por favor, responda todas as perguntas antes de calcular a pontuação.");
        return; // Interrompe a execução se houver perguntas não respondidas
    }

    const media = count > 0 ? (total / count).toFixed(2) : 0;
    let classificacao = "";

    // Condição para classificação
    const mediaAjustada = media * 2;
    if (mediaAjustada >= 9) {
        classificacao = "Excelente! Impacta positivamente.";
    } else if (mediaAjustada >= 8) {
        classificacao = "Bom! Possui pontos muito específicos de melhoria.";
    } else if (mediaAjustada >= 7) {
        classificacao = "A Melhorar! Área significativa a ser desenvolvida.";
    } else {
        classificacao = "Insatisfatório! Abaixo do esperado, exigindo atenção imediata.";
    }

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Pontuação final: ${mediaAjustada} de 10. <br>Classificação: ${classificacao}`;
}
