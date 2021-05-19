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
    };

    let additionally__submite = document.querySelector('.additionally__submite');
    let inputs = document.querySelectorAll('input[type="text"]');

    additionally__submite.onclick = function (event) {
      event.preventDefault();
      for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value.length === 0) {
          inputs[i].style.borderColor = "red";
          if (inputs[i].className == "data__input data__input--email") {
            document.querySelector('.' + inputs[i].className.split(' ')[1] + " + .email").style.stroke = "red";
          }
          if (inputs[i].className == "data__input data__input--phone") {
            document.querySelector('.' + inputs[i].className.split(' ')[1] + " + .phone").style.stroke = "red";
          }
        } else {
          inputs[i].style.borderColor = "black";
          if (inputs[i].className == "data__input data__input--email") {
            document.querySelector('.' + inputs[i].className.split(' ')[1] + " + .email").style.stroke = "black";
          }
          if (inputs[i].className == "data__input data__input--phone") {
            document.querySelector('.' + inputs[i].className.split(' ')[1] + " + .phone").style.stroke = "black";
          }
        }

      }
    };
