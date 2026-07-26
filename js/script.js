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

  function buildICS() {
    var lines = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Ana e Luan//Casamento//PT-BR',
      'CALSCALE:GREGORIAN',
      'BEGIN:VEVENT',
      'UID:casamento-ana-e-luan-20261010@anaeluan.com.br',
      'DTSTAMP:20260726T000000Z',
      'DTSTART:20261010T193000Z',
      'DTEND:20261011T013000Z',
      'SUMMARY:Casamento Ana e Luan',
      'DESCRIPTION:Celebração do casamento de Ana Carolina e Luan.',
      'LOCATION:Xákara Eventos\\, Estrada dos Periquitos\\, 153 - Londrina/PR',
      'END:VEVENT',
      'END:VCALENDAR'
    ];
    return lines.join('\r\n');
  }

  var calendarBtn = document.getElementById('calendarBtn');
  if (calendarBtn) {
    calendarBtn.setAttribute('href', 'data:text/calendar;charset=utf-8,' + encodeURIComponent(buildICS()));
  }
})();
