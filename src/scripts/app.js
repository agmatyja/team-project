import { tns } from './tiny-slider.js';

document.addEventListener('DOMContentLoaded', function () {
  tns({
    items: 1,
    responsive: {
      512: {
        items: 1
      },
      768: {
        items: 1
      },
      1024: {
        items: 1
      }
    },
    container: '.slider-promotion',
    navContainer: '.dots > ul',
    mouseDrag: true,
    speed: 0,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 3000,
    autoplayText: ['▶', '❚❚']
  });

  /* tns({
      items: 1,
      container: '.slider-promotion-1',
      swipeAngle: false,
      speed: 400,
      mouseDrag: true,
      navContainer: '.dots > ul'
    });
    tns({
      items: 1,
      container: '.slider-promotion-2',
      swipeAngle: false,
      speed: 400,
      mouseDrag: true,
      navContainer: '.dots > ul'
    }); */

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
    navContainer: '.dots > ul'
  });
});

const selectCategory = document.getElementById('selectCategory');
selectCategory.addEventListener('click', function (event) {
  event.stopPropagation();
  if (event.target.nodeName === 'LI') {
    selectCategory.children[0].innerText = /.*/g.exec(event.target.innerText)[0];
  }
});
