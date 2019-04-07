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

<<<<<<< HEAD
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
  const countItem = brandCount();
  brandMoveLeft(countItem);
});

brandNext.addEventListener('click', function () {
  const countItem = brandCount();
  brandMoveRight(countItem);
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
  for (let i = 0; i < brand.children.length && i < countItem; i++) {
    brand.children[i].classList.add('active');
  }
};

let brandReset = function () {
  for (let i = 0; i < brand.children.length; i++) {
    brand.children[i].classList.remove('active');
  }
};

let brandActive = function () {
  brandReset();
  brandShow();
};

document.addEventListener('DOMContentLoaded', function () {
  brandActive();
});

window.addEventListener('resize', function () {
  brandActive();
});

/// http://javascriptkit.com/javatutors/touchevents2.shtml
function swipedetect (el, callback) {
  let touchsurface = el;
  let swipedir;
  let startX;
  let startY;
  let distX;
  let distY;
  let threshold = 150;
  // required min distance traveled to be considered swipe
  let restraint = 100;
  // maximum distance allowed at the same time in perpendicular direction
  let allowedTime = 300;
  // maximum time allowed to travel that distance
  let elapsedTime;
  let startTime;
  let handleswipe = callback || function (swipedir) {};
  touchsurface.addEventListener(
    'touchstart',
    function (e) {
      let touchobj = e.changedTouches[0];
      swipedir = 'none';
      startX = touchobj.pageX;
      startY = touchobj.pageY;
      startTime = new Date().getTime(); // record time when finger first makes contact with surface
      e.preventDefault();
    },
    { passive: false },
    false
  );

  touchsurface.addEventListener(
    'touchmove',
    function (e) {
      e.preventDefault(); // prevent scrolling when inside DIV
    },
    { passive: false },
    false
  );

  touchsurface.addEventListener(
    'touchend',
    function (e) {
      let touchobj = e.changedTouches[0];
      distX = touchobj.pageX - startX; // get horizontal dist traveled by finger while in contact with surface
      distY = touchobj.pageY - startY; // get vertical dist traveled by finger while in contact with surface
      elapsedTime = new Date().getTime() - startTime; // get time elapsed
      if (elapsedTime <= allowedTime) {
        // first condition for awipe met
        if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) {
          // 2nd condition for horizontal swipe met
          swipedir = distX < 0 ? 'left' : 'right'; // if dist traveled is negative, it indicates left swipe
        } else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint) {
          // 2nd condition for vertical swipe met
          swipedir = distY < 0 ? 'up' : 'down'; // if dist traveled is negative, it indicates up swipe
        }
      }
      handleswipe(swipedir);
      // e.preventDefault();
    },
    { passive: true },
    false
  );
}

swipedetect(brand, function (swipedir) {
  if (swipedir === 'left') {
    let countItem = brandCount();
    brandMoveLeft(countItem);
  }
  if (swipedir === 'right') {
    let countItem = brandCount();
    brandMoveRight(countItem);
  }
});
=======
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
>>>>>>> WDP190404-19 Add stars animation - opinion
