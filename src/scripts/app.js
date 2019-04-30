import { tns } from './tiny-slider.js';

document.addEventListener('DOMContentLoaded', function () {
  tns({
    items: 1,
    container: '.slider-featured',
    navContainer: '.slider-featured-dots > ul',
    mouseDrag: true,
    speed: 0,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 3000,
    autoplayText: ['▶', '❚❚'],
    controlsText: ['<', '>']
  });

  tns({
    items: 1,
    container: '.slider-featured-1',
    swipeAngle: false,
    speed: 0,
    mouseDrag: true,
    controlsText: ['<', '>'],
    controlsPosition: 'bottom',
    controlsContainer: '.prom-2-car .buttons'
  });

  tns({
    items: 1,
    responsive: {
      512: {
        items: 2
      },
      768: {
        items: 3
      },
      1024: {
        items: 4
      }
    },
    container: '.slider-products',
    swipeAngle: false,
    speed: 400,
    mouseDrag: true,
    navContainer: '.slider-products-dots > ul'
  });

  const quantities = document.querySelectorAll('.section--furniture-list .quantity');
  const quantitiesPlus = document.querySelectorAll(
    '.section--furniture-list .quantity-plus'
  );
  const quantitiesMinus = document.querySelectorAll(
    '.section--furniture-list .quantity-minus'
  );
  for (let k = 0; k < quantities.length; k++) {
    quantities[k].value = '0';

    // number validation
    [
      'input',
      'keydown',
      'keyup',
      'mousedown',
      'mouseup',
      'select',
      'contextmenu',
      'drop'
    ].forEach(function (eventType) {
      quantities[k].addEventListener(eventType, function () {
        if (/^[0-9]{0,2}$/.test(this.value)) {
          // two digits max
          this.oldValue = this.value;
          this.oldSelectionStart = this.selectionStart;
          this.oldSelectionEnd = this.selectionEnd;
        } else if (this.hasOwnProperty('oldValue')) {
          this.value = this.oldValue;
          this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
        }
      });
    });

    quantitiesPlus[k].addEventListener('click', function () {
      if (quantities[k].value < 99) {
        quantities[k].value = Number(quantities[k].value) + 1;
      }
    });

    quantitiesMinus[k].addEventListener('click', function () {
      if (quantities[k].value > 0) {
        quantities[k].value = Number(quantities[k].value) - 1;
      }
    });
  }

  const featuredBoxStars = document.querySelectorAll('.section--furniture-list .stars');
  for (let k = 0; k < featuredBoxStars.length; k++) {
    var box = featuredBoxStars[k];
    for (let i = 0; i < box.children.length; i++) {
      box.children[i].addEventListener('mousedown', function (e) {
        var box2 = featuredBoxStars[k];
        for (let j = 0; j <= i; j++) {
          box2.children[j].className = 'fa fa-star selected';
        }
        for (let j = i + 1; j < box.children.length; j++) {
          box2.children[j].className = 'fa fa-star';
        }
      });
    }
  }
});

const selectCategory = document.getElementById('selectCategory');
selectCategory.addEventListener('click', function (event) {
  event.stopPropagation();
  if (event.target.nodeName === 'LI') {
    selectCategory.children[0].innerText = /.*/g.exec(event.target.innerText)[0];
  }
});
