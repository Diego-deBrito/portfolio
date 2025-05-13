// public/js/script.js
document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.carousel-track');
  const btnLeft = document.querySelector('.carousel-btn.left');
  const btnRight = document.querySelector('.carousel-btn.right');

  const scrollAmount = 320; // Valor baseado na largura dos itens do carrossel

  btnLeft.addEventListener('click', () => {
    track.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    });
  });

  btnRight.addEventListener('click', () => {
    track.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  });
});

function abrirModalImagem(elemento) {
  const modal = document.getElementById('imagemModal');
  const imgExpandida = document.getElementById('imagemExpandida');
  modal.style.display = 'flex';
  imgExpandida.src = elemento.src;
  imgExpandida.alt = elemento.alt;
}

function fecharModalImagem() {
  document.getElementById('imagemModal').style.display = 'none';
}
