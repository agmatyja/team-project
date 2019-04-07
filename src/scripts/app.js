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

const productBoxStars = document.querySelectorAll('.product-box .stars');
for (let k = 0; k < productBoxStars.length; k++) {
  let memory;
  let memoryClassList = [];

  productBoxStars[k].addEventListener('mouseenter', function (e) {
    for (let i = 0; i < productBoxStars[k].children.length; i++) {
      memoryClassList.push(productBoxStars[k].children[i].classList.value);
    }
  });

  productBoxStars[k].addEventListener('mouseleave', function (e) {
    if (memory == null) {
      for (let i = 0; i < productBoxStars[k].children.length; i++) {
        productBoxStars[k].children[i].classList = memoryClassList[i];
      }
    }
    memoryClassList = [];
  });

  for (let i = 0; i < productBoxStars[k].children.length; i++) {
    productBoxStars[k].children[i].addEventListener('click', function (e) {
      memory = true;
    });

    productBoxStars[k].children[i].addEventListener('mouseenter', function (e) {
      if (!memory) {
        for (let j = i; j < productBoxStars[k].children.length; j++) {
          productBoxStars[k].children[j].classList.remove('full');
          productBoxStars[k].children[j].classList.remove('active');
        }

        for (let j = 0; j <= i; j++) {
          productBoxStars[k].children[j].classList.add('full');
          productBoxStars[k].children[j].classList.add('active');
        }
      }
    });
  }
}
