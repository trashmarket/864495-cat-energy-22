let header_toggle = document.querySelector('.page-header__toggle-main');
    let header_main = document.querySelector('.main-nav');

    header_main.classList.remove('main-nav--nojs');
    header_main.classList.add('main-nav--closed');

    header_toggle.onclick = function() {
      if (this.classList.contains('page-header__toggle-main--closed')) {
        this.classList.remove('page-header__toggle-main--closed');
        this.classList.add('page-header__toggle-main--opened');
        header_main.classList.remove('main-nav--closed');
      } else {
        this.classList.remove('page-header__toggle-main--opened');
        this.classList.add('page-header__toggle-main--closed');
        header_main.classList.add('main-nav--closed');
      }
    }
