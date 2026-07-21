// [PWA] Condividi e Installa App — Azioni PWA
(function() {
  'use strict';

  let deferredPrompt = null;
  const shareBtn = document.getElementById('pwa-share-btn');
  const installBtn = document.getElementById('pwa-install-btn');
  const installModal = document.getElementById('pwa-install-modal');
  const closeInstallModal = document.getElementById('close-install-modal');

  // Cattura l'evento beforeinstallprompt
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    if (installBtn) installBtn.style.display = 'block';
  });

  // Pulsante Condividi
  if (shareBtn) {
    shareBtn.addEventListener('click', async () => {
      if (navigator.share) {
        try {
          await navigator.share({
            title: 'Raffaella Pisani — Cultura Olfattiva',
            text: 'Scopri il mondo della cultura olfattiva con Raffaella Pisani',
            url: window.location.href
          });
        } catch (err) {
          if (err.name !== 'AbortError') console.error('Share error:', err);
        }
      }
    });
  }

  // Pulsante Installa App
  if (installBtn) {
    installBtn.addEventListener('click', async () => {
      if (deferredPrompt) {
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        console.log(`Utente ha scelto: ${outcome}`);
        deferredPrompt = null;
        installBtn.style.display = 'none';
      }
    });
  }

  // Chiudi modale installazione
  if (closeInstallModal) {
    closeInstallModal.addEventListener('click', () => {
      if (installModal) installModal.style.display = 'none';
    });
  }

  // Chiudi modale quando si clicca fuori
  if (installModal) {
    installModal.addEventListener('click', (e) => {
      if (e.target === installModal) {
        installModal.style.display = 'none';
      }
    });
  }
})();
