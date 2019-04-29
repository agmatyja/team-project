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
