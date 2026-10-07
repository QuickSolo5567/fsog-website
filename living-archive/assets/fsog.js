// FSOG main site: shared behaviour for the home and about pages.
(function () {
  // Header: dark glass while it sits over a dark hero, light glass after.
  var header = document.querySelector('.site .site-header');
  var hero = document.querySelector('[data-hero]');
  if (header && hero) {
    var ticking = false;
    var update = function () {
      header.classList.toggle('over-hero', hero.getBoundingClientRect().bottom > header.offsetHeight);
      ticking = false;
    };
    window.addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
    window.addEventListener('resize', update);
    update();
  }
})();
