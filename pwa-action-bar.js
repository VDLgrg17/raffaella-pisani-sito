// [GV-PWA] Action Bar Bottom — Barra azioni standard Giorgio Vidali (bottom)

(function() {
  'use strict';

  let deferredPrompt = null;

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
  });

  function handleShare() {
    const modal = document.getElementById('gv-share-modal-bottom');
    if (modal) modal.classList.add('show');
  }

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

  function handleWhatsApp() {
    const title = 'Raffaella Pisani — Cultura Olfattiva';
    const url = window.location.href;
    const text = encodeURIComponent(`${title}\n${url}`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
  }

  function handleInstall() {
    const modal = document.getElementById('gv-install-modal-bottom');
    if (modal) modal.classList.add('show');
  }

  function handleRefresh() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistrations().then(registrations => {
        registrations.forEach(reg => reg.update());
      });
    }
    window.location.reload(true);
  }

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

  function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.remove('show');
  }

  // [F_CACHE.1] Listen for Service Worker updates
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.addEventListener('message', (event) => {
      if (event.data.type === 'SW_UPDATED') {
        console.log(`[PWA] Service Worker updated to v${event.data.version}`);
        // Mostra notifica all'utente
        const notification = document.createElement('div');
        notification.style.cssText = `
          position: fixed;
          top: 20px;
          left: 20px;
          right: 20px;
          background: #1B5E4B;
          color: #FAF7F2;
          padding: 16px 20px;
          border-radius: 8px;
          font-size: 0.9rem;
          z-index: 9998;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          animation: slideDown 0.3s ease-out;
        `;
        notification.textContent = '✓ Aggiornamento disponibile — Ricarica la pagina';
        document.body.appendChild(notification);
        setTimeout(() => notification.remove(), 5000);
      }
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    // Barra azioni bottom
    const shareBtn = document.getElementById('gv-share-btn-bottom');
    const refreshBtn = document.getElementById('gv-refresh-btn-bottom');
    const installBtn = document.getElementById('gv-install-btn-bottom');

    if (shareBtn) shareBtn.addEventListener('click', handleShare);
    if (refreshBtn) refreshBtn.addEventListener('click', handleRefresh);
    if (installBtn) installBtn.addEventListener('click', handleInstall);

    // Modale Condivisione
    const copyLinkBtn = document.getElementById('gv-copy-link-btn-bottom');
    const whatsappBtn = document.getElementById('gv-whatsapp-btn-bottom');
    const closeShareBtn = document.getElementById('gv-close-share-btn-bottom');
    const shareModal = document.getElementById('gv-share-modal-bottom');

    if (copyLinkBtn) copyLinkBtn.addEventListener('click', handleCopyLink);
    if (whatsappBtn) whatsappBtn.addEventListener('click', handleWhatsApp);
    if (closeShareBtn) closeShareBtn.addEventListener('click', () => closeModal('gv-share-modal-bottom'));

    if (shareModal) {
      shareModal.addEventListener('click', (e) => {
        if (e.target === shareModal) closeModal('gv-share-modal-bottom');
      });
    }

    // Modale Installazione
    const installPromptBtn = document.getElementById('gv-install-prompt-btn-bottom');
    const closeInstallBtn = document.getElementById('gv-close-install-btn-bottom');
    const installModal = document.getElementById('gv-install-modal-bottom');

    if (installPromptBtn) installPromptBtn.addEventListener('click', handleInstallPrompt);
    if (closeInstallBtn) closeInstallBtn.addEventListener('click', () => closeModal('gv-install-modal-bottom'));

    if (installModal) {
      installModal.addEventListener('click', (e) => {
        if (e.target === installModal) closeModal('gv-install-modal-bottom');
      });
    }
  });
})();
