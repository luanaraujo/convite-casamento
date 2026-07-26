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

  var calendarBtn = document.getElementById('calendarBtn');
  if (calendarBtn && /Android/i.test(navigator.userAgent)) {
    var gcalUrl = 'https://calendar.google.com/calendar/render?action=TEMPLATE'
      + '&text=' + encodeURIComponent('Casamento de Ana Carolina e Luan')
      + '&dates=20261010T163000/20261011T020000'
      + '&ctz=' + encodeURIComponent('America/Sao_Paulo')
      + '&details=' + encodeURIComponent('Casamento de Ana Carolina e Luan')
      + '&location=' + encodeURIComponent('Xákara Eventos, Estrada dos Periquitos, 153 - Londrina/PR');
    calendarBtn.setAttribute('href', gcalUrl);
  }
})();
