// [GV-PWA] Action Bar — Barra azioni standard Giorgio Vidali
// Fully responsive con Condividi, Sito Web, Refresh, Installa App, Esci

(function() {
  'use strict';

  let deferredPrompt = null;
  const isStandalone = window.matchMedia('(display-mode: standalone)').matches;

  // Cattura l'evento beforeinstallprompt
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
  });

  // Condividi
  function handleShare() {
    const modal = document.getElementById('gv-share-modal');
    if (modal) modal.style.display = 'flex';
  }

  // Copia Link
  function handleCopyLink() {
    const url = window.location.href;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url).then(() => {
        alert('✓ Link copiato negli appunti');
      }).catch(() => fallbackCopy(url));
    } else {
      fallbackCopy(url);
    }
  }

  function fallbackCopy(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('✓ Link copiato negli appunti');
  }

  // WhatsApp
  function handleWhatsApp() {
    const title = 'Raffaella Pisani — Cultura Olfattiva';
    const url = window.location.href;
    const text = encodeURIComponent(`${title}\n${url}`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
  }

  // Installa App
  function handleInstall() {
    const modal = document.getElementById('gv-install-modal');
    if (modal) modal.style.display = 'flex';
  }

  // Refresh
  function handleRefresh() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistrations().then(registrations => {
        registrations.forEach(reg => reg.update());
      });
    }
    window.location.reload(true);
  }

  // Esci (solo in standalone)
  function handleExit() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistrations().then(registrations => {
        registrations.forEach(reg => reg.unregister());
      });
    }
    window.location.href = 'https://www.google.com';
  }

  // Sito Web
  function handleWebsite() {
    window.open('https://raffaellapisani.it', '_blank');
  }

  // Installa App (prompt nativo)
  function handleInstallPrompt() {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('✓ App installata');
        }
        deferredPrompt = null;
      });
    }
  }

  // Chiudi modali
  function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.style.display = 'none';
  }

  // Event listeners
  document.addEventListener('DOMContentLoaded', () => {
    // Barra azioni
    const shareBtn = document.getElementById('gv-share-btn');
    const websiteBtn = document.getElementById('gv-website-btn');
    const refreshBtn = document.getElementById('gv-refresh-btn');
    const installBtn = document.getElementById('gv-install-btn');
    const exitBtn = document.getElementById('gv-exit-btn');

    if (shareBtn) shareBtn.addEventListener('click', handleShare);
    if (websiteBtn) websiteBtn.addEventListener('click', handleWebsite);
    if (refreshBtn) refreshBtn.addEventListener('click', handleRefresh);
    if (installBtn) installBtn.addEventListener('click', handleInstall);
    if (exitBtn) exitBtn.addEventListener('click', handleExit);

    // Modale Condivisione
    const copyLinkBtn = document.getElementById('gv-copy-link-btn');
    const whatsappBtn = document.getElementById('gv-whatsapp-btn');
    const closeShareBtn = document.getElementById('gv-close-share-btn');
    const shareModal = document.getElementById('gv-share-modal');

    if (copyLinkBtn) copyLinkBtn.addEventListener('click', handleCopyLink);
    if (whatsappBtn) whatsappBtn.addEventListener('click', handleWhatsApp);
    if (closeShareBtn) closeShareBtn.addEventListener('click', () => closeModal('gv-share-modal'));

    if (shareModal) {
      shareModal.addEventListener('click', (e) => {
        if (e.target === shareModal) closeModal('gv-share-modal');
      });
    }

    // Modale Installazione
    const installPromptBtn = document.getElementById('gv-install-prompt-btn');
    const closeInstallBtn = document.getElementById('gv-close-install-btn');
    const installModal = document.getElementById('gv-install-modal');

    if (installPromptBtn) installPromptBtn.addEventListener('click', handleInstallPrompt);
    if (closeInstallBtn) closeInstallBtn.addEventListener('click', () => closeModal('gv-install-modal'));

    if (installModal) {
      installModal.addEventListener('click', (e) => {
        if (e.target === installModal) closeModal('gv-install-modal');
      });
    }

    // Mostra/nascondi pulsante ESCI
    if (exitBtn) {
      exitBtn.style.display = isStandalone ? 'block' : 'none';
    }

    // Nascondi modale installazione se già installata
    if (isStandalone && installBtn) {
      installBtn.style.display = 'none';
    }
  });
})();
