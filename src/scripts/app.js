import { tns } from './tiny-slider.js';

document.addEventListener('DOMContentLoaded', function () {
  tns({
    items: 2,
    controls: false,
    responsive: {
      '350': {
        items: 3,
        controls: true,
        edgePadding: 30
      },
      '500': {
        items: 4
      }
    },
    container: '.slider-products',
    swipeAngle: false,
    speed: 400,
    mouseDrag: true,
    slideBy: 'page'
  });
});
