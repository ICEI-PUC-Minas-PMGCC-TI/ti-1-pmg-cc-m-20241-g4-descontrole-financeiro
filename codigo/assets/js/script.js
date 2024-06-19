function adicionarDespesa() {
  const categoria = document.getElementById('categoria-despesas').value;
  const valor = document.getElementById('valor-despesas').value;

  if (valor && valor > 0) {
      alert(`Despesa de ${categoria} no valor de R$${valor} adicionada.`);
      // Aqui você pode adicionar a lógica para armazenar essa despesa
  } else {
      alert('Por favor, insira um valor válido.');
  }
}

function adicionarGanho() {
  const valor = document.getElementById('valor-ganhos').value;

  if (valor && valor > 0) {
      alert(`Ganho de R$${valor} adicionado.`);
      // Aqui você pode adicionar a lógica para armazenar esse ganho
  } else {
      alert('Por favor, insira um valor válido.');
  }
}

// Função que pode ser chamada para sugerir possíveis medidas
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

// Chamar a função sugerirMedidas quando o motivo do gasto for inserido
document.getElementById('motivo-texto').addEventListener('input', sugerirMedidas);
