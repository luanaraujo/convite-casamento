(function () {
  var cover = document.getElementById('envelope');
  var sealBtn = document.getElementById('sealBtn');
  var invitation = document.getElementById('invitation');

  function openEnvelope() {
    if (cover.classList.contains('open')) return;
    cover.classList.add('open');
    invitation.classList.add('show');
    invitation.setAttribute('aria-hidden', 'false');

    // aba esquerda 1.15s + aba direita com 0.5s de atraso = 1.65s no total
    setTimeout(function () {
      cover.style.display = 'none';
      // libera a rolagem só depois que o envelope sai de cena
      document.body.classList.remove('fechado');
    }, 1800);
  }

  sealBtn.addEventListener('click', openEnvelope);
  sealBtn.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openEnvelope();
    }
  });
})();
