/* import { tns } from './tiny-slider.js';

 document.addEventListener('DOMContentLoaded', function () {
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
    navContainer: '.dots > ul',

    container: '.posts-slider',
    items: 1,
    responsive: {
      512: {
        edgePadding: 20,
        gutter: 20,
        items: 1
      },
      768: {
        gutter: 30,
        items: 2
      },
      1024: {
        items: 3
      }
    },
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
    selectCategory.children[0].innerText = /. */ /* g.exec(
  event.target.innerText
)[0];
*/
