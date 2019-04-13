const selectCategory = document.getElementById('selectCategory');
selectCategory.addEventListener('click', function (event) {
  event.stopPropagation();
  if (event.target.nodeName === 'LI') {
    selectCategory.children[0].innerText = /.*/g.exec(event.target.innerText)[0];
  }
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
  brandMoveLeft(6);
});

brandNext.addEventListener('click', function () {
  brandMoveRight(6);
});
