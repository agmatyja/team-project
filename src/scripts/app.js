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

let brandCount = function () {
  const width = window.outerWidth;
  if (width <= 400) {
    return 1;
  } else if (width <= 600) {
    return 2;
  } else if (width <= 768) {
    return 3;
  } else if (width <= 990) {
    return 4;
  } else if (width <= 1000) {
    return 5;
  } else if (width > 1000) {
    return 6;
  }
};

let brandShow = function () {
  let countItem = brandCount();
  const brand = document.querySelector('.section--brand .photos');
  for (let i = 0; i < brand.children.length && i < countItem; i++) {
    brand.children[i].classList.add('active');
  }
};

let brandReset = function () {
  const brand = document.querySelector('.section--brand .photos');
  for (let i = 0; i < brand.children.length; i++) {
    brand.children[i].classList.remove('active');
  }
};

document.addEventListener('DOMContentLoaded', function () {
  brandReset();
  brandShow();
});

window.addEventListener('resize', function () {
  brandReset();
  brandShow();
});

const brandPrev = document.querySelector('.section--brand .fa-chevron-left');
const brandNext = document.querySelector('.section--brand .fa-chevron-right');
const brand = document.querySelector('.section--brand .photos');

let brandMoveLeft = function (items) {
  for (let k = 0; k < items; k++) {
    for (let i = 1; i < brand.children.length; i++) {
      if (
        brand.children[i - 1].classList.value !== 'active' &&
        brand.children[i].classList.value === 'active'
      ) {
        brand.children[i - 1].classList.add('active');
        for (let j = 1; j < brand.children.length; j++) {
          if (brand.children[brand.children.length - j].classList.value === 'active') {
            brand.children[brand.children.length - j].classList.remove('active');
            break;
          }
        }
        break;
      }
    }
  }
};

let brandMoveRight = function (items) {
  for (let k = 0; k < items; k++) {
    for (let i = 0; i < brand.children.length - 1; i++) {
      if (
        brand.children[i].classList.value === 'active' &&
        brand.children[i + 1].classList.value !== 'active'
      ) {
        brand.children[i + 1].classList.add('active');
        for (let j = 0; j < brand.children.length; j++) {
          if (brand.children[j].classList.value === 'active') {
            brand.children[j].classList.remove('active');
            break;
          }
        }
        break;
      }
    }
  }
};

brandPrev.addEventListener('click', function () {
  let countItem = brandCount();
  console.log(countItem);
  brandMoveLeft(countItem);
});

brandNext.addEventListener('click', function () {
  let countItem = brandCount();
  console.log(countItem);
  brandMoveRight(countItem);
});
