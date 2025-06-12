const motivos = [
  "Porque você me entende.",
  "Porque você é minha luz.",
  "Porque somos felizes no simples.",
  "Porque eu te admiro muito.",
  "Porque você é meu sábado.",
  "Porque esses têm sido os 3 melhores anos da minha vida.",
  "Porque eu não consigo parar de imaginar o nosso futuro juntos.",
  "Porque você sempre me apoia.",
  "Porque você é maravilhosa.",
  "Porque você é uma pessoa muito boa;",
  "Porque você é carinhosa",
  "Porque a vida é muito feliz com você.",
  "Porque você me faz querer ser melhor.",
  "Porque os nossos lanches são os melhores.",
  "Porque você é minha vida.",
  "Por causa de todos os bons momentos que já vivemos.",
  "Por causa dos seus beijos.",
  "Por todas as nossas idas ao parque.",
  "Por todas as nossas ligações antes de dormir.",
  "Por todas as nossas risadas."
];

// Fazemos uma cópia da lista
let motivosRestantes = [...motivos];

function atualizarContador() {
  const contador = document.getElementById('contador');
  if (motivosRestantes.length === 0) {
    contador.textContent = "Você já viu todas as mensagens! 💖";
  } else {
    contador.textContent = `Mensagens restantes: ${motivosRestantes.length}`;
  }
}

function mostrarMotivo() {
  const div = document.getElementById('motivo');

  if (motivosRestantes.length === 0) {
    div.textContent = "Já mostrei todas! Recarregue a página para ver de novo.";
    atualizarContador();
    return;
  }

  const indice = Math.floor(Math.random() * motivosRestantes.length);
  const motivo = motivosRestantes.splice(indice, 1)[0]; // remove da lista

  div.classList.remove('show');
  setTimeout(() => {
    div.textContent = motivo;
    div.classList.add('show');
    atualizarContador();
  }, 300);
}

document.addEventListener('DOMContentLoaded', () => {
  const audio = document.getElementById('audio');
  document.body.addEventListener('click', () => {
    audio.play().catch(() => {});
    document.getElementById('motivo').classList.add('show');
    atualizarContador();
  }, { once: true });
});