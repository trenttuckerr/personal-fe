(function () {
  'use strict';

  var mainNav = document.querySelector('#mainNav');

  if (mainNav) {
    var navbarCollapse = mainNav.querySelector('.navbar-collapse');

    if (navbarCollapse) {
      var collapse = new bootstrap.Collapse(navbarCollapse, {
        toggle: false,
      });

      var navbarItems = navbarCollapse.querySelectorAll('a');

      // Closes responsive menu when a scroll trigger link is clicked
      for (var item of navbarItems) {
        item.addEventListener('click', function (event) {
          collapse.hide();
        });
      }
    }

    var collapseNavbar = function () {
      var scrollTop =
        window.pageYOffset !== undefined
          ? window.pageYOffset
          : (
              document.documentElement ||
              document.body.parentNode ||
              document.body
            ).scrollTop;

      if (scrollTop > 100) {
        mainNav.classList.add('navbar-shrink');
      } else {
        mainNav.classList.remove('navbar-shrink');
      }
    };

    collapseNavbar();

    document.addEventListener('scroll', collapseNavbar);

    var modals = document.querySelectorAll('.portfolio-modal');

    for (var modal of modals) {
      modal.addEventListener('shown.bs.modal', function (event) {
        mainNav.classList.add('d-none');
      });

      modal.addEventListener('hidden.bs.modal', function (event) {
        mainNav.classList.remove('d-none');
      });
    }
  }
})();
