// script.js — Akibuz Ceramics

console.log('Akibuz Ceramics site loaded');

// ─── MENÚ HAMBURGUESA ───────────────────────────────
const hbBtn   = document.getElementById('hbBtn');
const drawer  = document.getElementById('drawer');
const overlay = document.getElementById('overlay');

function toggleMenu() {
  const isOpen = drawer.classList.toggle('open');
  overlay.classList.toggle('open', isOpen);
  hbBtn.classList.toggle('open', isOpen);
  // Impide el scroll del body mientras el menú está abierto
  document.body.style.overflow = isOpen ? 'hidden' : '';
}

// Abrir / cerrar con el botón
hbBtn.addEventListener('click', toggleMenu);

// Cerrar al hacer clic en el overlay
overlay.addEventListener('click', toggleMenu);

// Cerrar al hacer clic en cualquier enlace del drawer
drawer.querySelectorAll('a').forEach(function(link) {
  link.addEventListener('click', toggleMenu);
});

// Cerrar con la tecla Escape
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && drawer.classList.contains('open')) {
    toggleMenu();
  }
});
