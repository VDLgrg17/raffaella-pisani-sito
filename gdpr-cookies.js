// [GDPR] Cookie Bar — Consenso ai cookie
(function() {
  'use strict';

  const COOKIE_CONSENT_KEY = 'raffaella-pisani-cookie-consent';
  const COOKIE_EXPIRY_DAYS = 365;

  const cookieBar = document.getElementById('gdpr-cookie-bar');
  const acceptBtn = document.getElementById('gdpr-accept-btn');
  const rejectBtn = document.getElementById('gdpr-reject-btn');

  // Controlla se l'utente ha già dato il consenso
  function hasConsent() {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    return consent === 'accepted' || consent === 'rejected';
  }

  // Salva il consenso
  function setConsent(value) {
    localStorage.setItem(COOKIE_CONSENT_KEY, value);
    if (cookieBar) {
      cookieBar.style.display = 'none';
    }
  }

  // Mostra la cookie bar se non c'è consenso
  function showCookieBar() {
    if (!hasConsent() && cookieBar) {
      cookieBar.style.display = 'flex';
    }
  }

  // Event listeners
  if (acceptBtn) {
    acceptBtn.addEventListener('click', () => {
      setConsent('accepted');
      // Qui puoi aggiungere il codice di tracking (Google Analytics, ecc.)
      console.log('✓ Cookie accettati');
    });
  }

  if (rejectBtn) {
    rejectBtn.addEventListener('click', () => {
      setConsent('rejected');
      console.log('✓ Cookie rifiutati');
    });
  }

  // Mostra la cookie bar al caricamento
  window.addEventListener('load', showCookieBar);
})();
