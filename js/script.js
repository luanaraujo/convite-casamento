(function () {
  var envelope = document.getElementById('envelope');
  var sealBtn = document.getElementById('sealBtn');
  var invitation = document.getElementById('invitation');
  var sealCaption = document.getElementById('sealCaption');

  function curveCaption(container, radius, maxAngleDeg) {
    var text = container.textContent;
    var chars = text.split('');
    var n = chars.length;
    container.innerHTML = '';
    chars.forEach(function (ch, i) {
      var angle = n > 1 ? -maxAngleDeg + (2 * maxAngleDeg * i) / (n - 1) : 0;
      var rad = (angle * Math.PI) / 180;
      var x = radius * Math.sin(rad);
      var y = radius - radius * Math.cos(rad);
      var span = document.createElement('span');
      span.textContent = ch === ' ' ? ' ' : ch;
      span.style.transform = 'translateX(-50%) translate(' + x.toFixed(2) + 'px,' + y.toFixed(2) + 'px) rotate(' + angle.toFixed(2) + 'deg)';
      container.appendChild(span);
    });
  }

  if (sealCaption) {
    curveCaption(sealCaption, 90, 42);
  }

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
