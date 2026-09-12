document.addEventListener('DOMContentLoaded', () => {
  // Load shared header partial and initialize header behavior
  const headerContainer = document.getElementById('site-header');
  if (headerContainer) {
    fetch('header.html')
      .then((res) => res.text())
      .then((html) => {
        headerContainer.innerHTML = html;
        initHeader();
      })
      .catch(() => {
        console.warn('Failed to load header.html');
        initHeader();
      });
  } else {
    initHeader();
  }

  function initHeader() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
      menuToggle.addEventListener('click', () => {
        navLinks?.classList.toggle('open');
        menuToggle.textContent = navLinks?.classList.contains('open') ? '✕' : '☰';
      });
    }

    document.querySelectorAll('.nav-links a').forEach((link) => {
      link.addEventListener('click', () => {
        if (navLinks?.classList.contains('open')) {
          navLinks.classList.remove('open');
          if (menuToggle) menuToggle.textContent = '☰';
        }
      });
    });
  }
});
