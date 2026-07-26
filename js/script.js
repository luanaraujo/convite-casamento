(function () {
  var envelope = document.getElementById('envelope');
  var sealBtn = document.getElementById('sealBtn');
  var invitation = document.getElementById('invitation');

  function openEnvelope() {
    if (envelope.classList.contains('open')) return;
    envelope.classList.add('open');
    invitation.classList.add('show');
    invitation.setAttribute('aria-hidden', 'false');
    setTimeout(function () {
      envelope.style.display = 'none';
    }, 1200);
  }

  sealBtn.addEventListener('click', openEnvelope);
  sealBtn.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openEnvelope();
    }
  });
})();
