    let header_toggle = document.querySelector('.page-header__toggle-main');
    let header_main = document.querySelector('.main-nav');

    header_main.classList.remove('main-nav--nojs');
    header_main.classList.add('main-nav--closed');
    header_toggle.classList.remove('page-header__toggle-main--nojs');
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

    let cat_event = document.querySelector('.example__range');
    let scale = document.querySelector('.example__range-scale');
    let example__images_cats = document.querySelector('.example__images-cats img');

    cat_event.addEventListener('click', function(event) {
      if (event.target.closest('.right')) {
        example__images_cats.src = "img/mobile-small-cat.png";
        scale.style.justifyContent = 'flex-end';
      }
      if (event.target.closest('.left')) {
        example__images_cats.src = "img/mobile-big-cat.png";
        scale.style.justifyContent = 'flex-start';
      }
      document.removeEventListener('mousemove', pointerMove);
    });

    /* range*/
    let toggle = document.querySelector('.example__range-toggle');
    let bar = document.querySelector('.example__range-bar');
    let fatFullcat = document.querySelector('.example__image-tablet-desktop-1');
    let skinnyFullcat = document.querySelector('.example__image-tablet-desktop-2');
    let step = 0;
    let steps = 2;
    cat_event.addEventListener("mousedown",  pointerDown);

    function pointerDown(event) {
      if (event.target.closest(".example__range-toggle")) {
        event.preventDefault();
        document.addEventListener('mousemove',  pointerMove);
      }
    }
    function pointerMove(event) {
      let splitTogle = event.clientX - toggle.offsetWidth / 2;
      let leftPart = splitTogle - scale.getBoundingClientRect().left;
      let leftRelativePart = leftPart / scale.offsetWidth;

      if (leftRelativePart < 0) {
        leftRelativePart = 0;
      }

      if (leftRelativePart > 1) {
        leftRelativePart = 1;
      }

      step = Math.round(leftRelativePart * steps);

      let precent = leftRelativePart * 100;
      toggle.style.left = `${precent}%`;

      if (precent > 50) {
        let halfScale = scale.offsetWidth / 2;
        let leftRigtPart = splitTogle - (scale.getBoundingClientRect().left + halfScale );
        let leftRightRelativePart = leftRigtPart / halfScale;
          if(leftRightRelativePart < 0) {
            leftRightRelativePart = 0;
        }
          if(leftRightRelativePart > 1) {
            leftRightRelativePart = 1;
        }
        bar.style.width = `${leftRightRelativePart * 50}%`;
        let rigrPosition = 50 - leftRightRelativePart * 50;
        bar.style.right = `${rigrPosition}%`;
      }

      if ( precent < 50 ) {
        let halfScale = scale.offsetWidth / 2;
        let leftRigtPart = -(splitTogle - (scale.getBoundingClientRect().right - halfScale)) ;
        let leftRightRelativePart = leftRigtPart / halfScale;
        if(leftRightRelativePart < 0) {
            leftRightRelativePart = 0;
        }
          if(leftRightRelativePart > 1) {
            leftRightRelativePart = 1;
        }
        bar.style.width = `${leftRightRelativePart * 50}%`;
        let rigrPosition = 50 - leftRightRelativePart * 50;
        bar.style.left = `${rigrPosition}%`;
      }
      document.addEventListener('mouseup',  pointerUp);
    }

    function pointerUp(event) {

      document.removeEventListener('mousemove', pointerMove);
      let percent = (step / steps) * 100;

      toggle.style.left = `${percent}%`;

      if (step === 0) {
        bar.style.width = 50 + "%";
        bar.style.left = 0 + "%";
        fatFullcat.style.display = "block";
        fatFullcat.style.width = 708 + "px";
        fatFullcat.style.height = 607 + "px";
        fatFullcat.src = "img/cat-fat-full-desktop.png";
        skinnyFullcat.style.display = "none";
      }

      if (step === 1) {
        bar.style.width = 0;
        bar.style.left = 50 + "%";
        fatFullcat.style.display = "block";
        skinnyFullcat.style.display = "block";
        fatFullcat.style.width = 354 + "px";
        fatFullcat.style.height = 607 + "px";
        skinnyFullcat.style.width = 354 + "px";
        skinnyFullcat.style.height = 607 + "px";
        fatFullcat.src = "img/half-fat-cat.png";
        skinnyFullcat.src = "img/half-thin-cat.png";
      }

      if (step === 2) {
        bar.style.width = 50 + "%";
        bar.style.right = 0 + "%";
        skinnyFullcat.style.width = 708 + "px";
        skinnyFullcat.style.height = 607 + "px";
        skinnyFullcat.style.display = "block";
        skinnyFullcat.src = "img/cat-skinny-full-desktop.png";
        fatFullcat.style.display = "none";
      }
      document.removeEventListener('mouseup', pointerUp );
    }
