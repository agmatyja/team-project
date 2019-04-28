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
});

const selectCategory = document.getElementById('selectCategory');
selectCategory.addEventListener('click', function (event) {
  event.stopPropagation();
  if (event.target.nodeName === 'LI') {
    selectCategory.children[0].innerText = /.*/g.exec(event.target.innerText)[0];
  }
});

(function () {
  var tabCard = document.querySelectorAll('.tab');
  var sliderDots = document.getElementsByClassName('slider-products-dots');
  var productsList = document.querySelectorAll('.productsList');

  function tabCheck () {
    for (var i = 0; i < tabCard.length; i++) {
      if (tabCard[i].classList.contains('active')) {
        productsList[i].style.display = 'flex';
      } else {
        productsList[i].style.display = 'none';
      }
    }
  }

  tabCheck();

  function dotsMaker () {
    var elemMaker = document.createElement('li');
    var linkMaker = document.createElement('a');
    var child = sliderDots.appendChild(elemMaker);
    child.appendChild(linkMaker);
    child.setAttribute('class', 'dynamic-dots animation');
  }

  function dotsCounter () {
    var dynamicDots = document.querySelectorAll('.dynamic-dots');
    for (var j = 0; j < dynamicDots.length; j++) {
      sliderDots.removeChild(dynamicDots[l]);
    }
  }

  function dotsCheck () {
    dotsCounter();
    for (var k = 0; k < tabCard.length; k++) {
      if (tabCard[k].classList.contains('active')) {
        var productsBoxList = productsList[k].querySelectorAll('.product-box');
        var productsBoxListLength = productsBoxList.length;
        if (productsBoxListLength > 8) {
          do {
            dotsMaker();
            productsBoxListLength -= 8;
          } while (productsBoxListLength > 8);
        }
      }
    }
  }

  dotsCheck();

  for (var l = 0; l < tabCard.length; l++) {
    tabCard[l].addEventListener('click', function () {
      for (var l = 0; l < tabCard.length; l++) {
        tabCard[l].classList.remove('active');
      }
      this.className += 'active';
      tabCheck();
      dotsCounter();
      dotsCheck();
    });
  }
})();
