import { tns } from './tiny-slider.js';

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

// thumbnails animation

const thumbPrev = document.querySelector('.thumbnails .fa-chevron-left');
const thumbNext = document.querySelector('.thumbnails .fa-chevron-right');
const thumb = document.querySelector('.thumbnails-list .thumb');

let thumbMoveLeft = function (items) {
  for (let k = 0; k < items; k++) {
    for (let i = 1; i < thumb.children.length; i++) {
      if (
        thumb.children[i - 1].classList.value !== 'active' &&
        thumb.children[i].classList.value === 'active'
      ) {
        thumb.children[i - 1].classList.add('active');
        for (let j = 1; j < thumb.children.length; j++) {
          if (thumb.children[thumb.children.length - j].classList.value === 'active') {
            thumb.children[thumb.children.length - j].classList.remove('active');
            break;
          }
        }
        break;
      }
    }
  }
};

let thumbMoveRight = function (items) {
  for (let k = 0; k < items; k++) {
    for (let i = 0; i < thumb.children.length - 1; i++) {
      if (
        thumb.children[i].classList.value === 'active' &&
        thumb.children[i + 1].classList.value !== 'active'
      ) {
        thumb.children[i + 1].classList.add('active');
        for (let j = 0; j < thumb.children.length; j++) {
          if (thumb.children[j].classList.value === 'active') {
            thumb.children[j].classList.remove('active');
            break;
          }
        }
        break;
      }
    }
  }
};

thumbPrev.addEventListener('click', function () {
  thumbMoveLeft(6);
});

thumbNext.addEventListener('click', function () {
  thumbMoveRight(6);
});
