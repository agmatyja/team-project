import { tns } from './tiny-slider.js';

let tab1 = document.querySelector('#bed');

let tab2 = document.querySelector('#chair');

let tab3 = document.querySelector('#sofa');

let tab4 = document.querySelector('#table');

let tab5 = document.querySelector('#dining');

let tabs = document.querySelectorAll('.tab');

let card = document.querySelectorAll('.card');

let menu = document.querySelector('.menu');

let first = document.querySelector('#first');
let second = document.querySelector('#second');

tab1.addEventListener('click', function () {
  updateCard(first);
  updateActiveStatus(tab1);
});

tab2.addEventListener('click', function () {
  updateCard(second);
  updateActiveStatus(tab2);
});

tab3.addEventListener('click', function () {
  updateCard(first);
  updateActiveStatus(tab3);
});

tab4.addEventListener('click', function () {
  updateCard(second);
  updateActiveStatus(tab4);
});

tab5.addEventListener('click', function () {
  updateCard(first);
  updateActiveStatus(tab5);
});

function updateActiveStatus (activeItem) {
  tabs.forEach(function (tabItem) {
    if (tabItem !== activeItem) {
      tabItem.classList.remove('active');
      menu.classList.add('animation');
    } else {
      tabItem.classList.add('active');
      menu.classList.add('animation');
    }
  });
}

function updateCard (activeItem) {
  card.forEach(function (tabItem) {
    if (tabItem !== activeItem) {
      tabItem.classList.add('temp');
    } else {
      tabItem.classList.remove('temp');
    }
  });
}

var tab = document.querySelectorAll('.tab');
console.log(tab);

for (var a = 0; a < tab.length; a++) {
  console.log(tab[a].innerText);
}

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
