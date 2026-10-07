// Navigation behaviour shared by every page: the Get Involved dropdown and the full-screen mobile menu.
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var dropdown = toggle && document.getElementById(toggle.getAttribute('aria-controls'));

  function closeDropdown() {
    if (!toggle) return;
    toggle.setAttribute('aria-expanded', 'false');
    dropdown.hidden = true;
  }

  if (toggle && dropdown) {
    toggle.addEventListener('click', function () {
      var open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      dropdown.hidden = open;
    });
    document.addEventListener('click', function (e) {
      if (!toggle.parentElement.contains(e.target)) closeDropdown();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        closeDropdown();
        toggle.focus();
      }
    });
  }

  var menuBtn = document.querySelector('.menu-button');
  var menu = document.getElementById('mobile-menu');
  var closeBtn = menu && menu.querySelector('.menu-close');

  function openMenu() {
    menu.hidden = false;
    menuBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  }

  function closeMenu() {
    menu.hidden = true;
    menuBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    menuBtn.focus();
  }

  if (menuBtn && menu) {
    menuBtn.addEventListener('click', openMenu);
    closeBtn.addEventListener('click', closeMenu);
    menu.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMenu();
    });
  }

  // demo-only: the mockup forms don't send anything yet
  document.querySelectorAll('form[data-demo]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var note = form.querySelector('.form-status');
      if (note) note.textContent = 'Mockup only: this form will connect to Hostinger Reach in the WordPress build.';
    });
  });
})();
