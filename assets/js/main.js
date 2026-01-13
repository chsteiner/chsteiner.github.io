(function() {
  // Language Toggle
  document.addEventListener('DOMContentLoaded', function() {
    const langButtons = document.querySelectorAll('.lang-btn');
    const bioDe = document.querySelector('.bio-de');
    const bioEn = document.querySelector('.bio-en');
    const imprintLink = document.querySelector('.imprint-link');

    langButtons.forEach(btn => {
      btn.addEventListener('click', function() {
        const lang = this.getAttribute('data-lang');

        // Update active button
        langButtons.forEach(b => b.classList.remove('active'));
        this.classList.add('active');

        // Toggle bio visibility and imprint text
        if (lang === 'de') {
          bioDe.style.display = 'block';
          bioEn.style.display = 'none';
          imprintLink.textContent = 'Impressum';
          document.documentElement.lang = 'de';
        } else {
          bioDe.style.display = 'none';
          bioEn.style.display = 'block';
          imprintLink.textContent = 'Imprint';
          document.documentElement.lang = 'en';
        }
      });
    });
  });
})();
