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


const selectCategory = document.getElementById('selectCategory');
selectCategory.addEventListener('click', function (event) {
  event.stopPropagation();
  if (event.target.nodeName === 'LI') {
    selectCategory.children[0].innerText = /.*/g.exec(event.target.innerText)[0];
  }
});

  const productBoxStars = document.querySelectorAll('.product-box .stars');

  const productBoxStarsLoading = function (element, length, memoryArray) {
    for (let i = 0; i < length; i++) {
      memoryArray.push(element[i].classList.value);
    }
  };

  const productBoxStarsRefresh = function (element, length, memoryArray) {
    for (let i = 0; i < length; i++) {
      element[i].classList = memoryArray[i];
    }
  };

  const productBoxStarsAdd = function (element, indexStart, length) {
    for (let i = indexStart; i <= length; i++) {
      element[i].classList.add('full');
      element[i].classList.add('active');
    }
  };

  const productBoxStarsRemove = function (element, indexStart, length) {
    for (let i = indexStart; i < length; i++) {
      element[i].classList.remove('full');
      element[i].classList.remove('active');
    }
  };

  for (let k = 0; k < productBoxStars.length; k++) {
    let memory;
    let memoryClassList = [];
    const length = productBoxStars[k].children.length;

    productBoxStars[k].addEventListener('mouseenter', function (e) {
      productBoxStarsLoading(productBoxStars[k].children, length, memoryClassList);
    });

    productBoxStars[k].addEventListener('mouseleave', function (e) {
      if (memory == null) {
        productBoxStarsRefresh(productBoxStars[k].children, length, memoryClassList);
      }
      memoryClassList = [];
    });

    for (let i = 0; i < length; i++) {
      productBoxStars[k].children[i].addEventListener('click', function (e) {
        memory = true;
      });

      productBoxStars[k].children[i].addEventListener('mouseenter', function (e) {
        if (!memory) {
          productBoxStarsRemove(productBoxStars[k].children, i, length);
          productBoxStarsAdd(productBoxStars[k].children, 0, i);
        }
      });
    }
  }
});
