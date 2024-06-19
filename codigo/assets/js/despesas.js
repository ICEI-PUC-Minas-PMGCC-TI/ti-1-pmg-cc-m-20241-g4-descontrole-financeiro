let totalDespesas = 0;
let totalGanhos = 0;

function adicionarDespesa() {
    const categoria = document.getElementById('categoria-despesas').value;
    const valor = parseFloat(document.getElementById('valor-despesas').value);

    if (valor && valor > 0) {
        totalDespesas += valor;
        alert(`Despesa de ${categoria} no valor de R$${valor} adicionada.`);
        atualizarResumoFinancas();
        document.getElementById('valor-despesas').value = '';
    } else {
        alert('Por favor, insira um valor válido.');
    }
}

function adicionarGanho() {
    const valor = parseFloat(document.getElementById('valor-ganhos').value);

    if (valor && valor > 0) {
        totalGanhos += valor;
        alert(`Ganho de R$${valor} adicionado.`);
        atualizarResumoFinancas();
        document.getElementById('valor-ganhos').value = '';
    } else {
        alert('Por favor, insira um valor válido.');
    }
}

function atualizarResumoFinancas() {
    const lucroTotal = totalGanhos - totalDespesas;
    document.getElementById('total-despesas').textContent = `R$ ${totalDespesas.toFixed(2)}`;
    document.getElementById('total-ganhos').textContent = `R$ ${totalGanhos.toFixed(2)}`;
    document.getElementById('lucro-total').textContent = `R$ ${lucroTotal.toFixed(2)}`;
}

function sugerirMedidas() {
    const motivo = document.getElementById('motivo-texto').value;
    let sugestoes = '';

    if (motivo.toLowerCase().includes('alimentação')) {
        sugestoes += 'Tente fazer mais refeições em casa e evitar comer fora.\n';
    }
    if (motivo.toLowerCase().includes('transporte')) {
        sugestoes += 'Considere utilizar transporte público ou caronas para economizar.\n';
    }
    if (sugestoes === '') {
        sugestoes = 'Reveja seus gastos e veja onde pode cortar custos.';
    }

    document.getElementById('solucoes-texto').innerText = sugestoes;
}

document.getElementById('motivo-texto').addEventListener('input', sugerirMedidas);
