import { tns } from './tiny-slider.js';

function initFurnitureList () {
  const galleries = document.querySelectorAll('.section--furniture-list .gallery');
  for (let k = 0; k < galleries.length; k++) {
    var carousel = tns({
      items: 4,
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
      container: galleries[k].getElementsByClassName('img-car')[0],
      controlsContainer: galleries[k].getElementsByClassName('controls')[0],
      swipeAngle: false,
      speed: 400,
      nav: false,
      loop: true,
      mouseDrag: true,
      center: true
    });

    carousel.events.on('indexChanged', function (info) {
      var photos = galleries[k].getElementsByClassName('photo-sm');
      galleries[k].getElementsByClassName('photo-lg')[0].style.backgroundImage =
        photos[(info.index + 1) % photos.length].style.backgroundImage;
    });
  }
}

function initQuantities () {
  const quantities = document.querySelectorAll('.section--furniture-list .quantity');
  const quantitiesPlus = document.querySelectorAll(
    '.section--furniture-list .quantity-plus'
  );
  const quantitiesMinus = document.querySelectorAll(
    '.section--furniture-list .quantity-minus'
  );
  for (let k = 0; k < quantities.length; k++) {
    quantities[k].value = '0';
    quantities[k].oldValue = '0';

    // number validation
    [
      'input',
      'keydown',
      'keyup',
      'mousedown',
      'mouseup',
      'select',
      'contextmenu',
      'drop'
    ].forEach(function (eventType) {
      quantities[k].addEventListener(eventType, function () {
        if (/^[0-9]{0,2}$/.test(this.value)) {
          // two digits max
          this.oldValue = this.value;
          this.oldSelectionStart = this.selectionStart;
          this.oldSelectionEnd = this.selectionEnd;
        } else {
          this.value = this.oldValue;
          this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
        }
      });
    });

    quantitiesPlus[k].addEventListener('click', function () {
      if (quantities[k].value < 99) {
        quantities[k].value = Number(quantities[k].value) + 1;
      }
    });

    quantitiesMinus[k].addEventListener('click', function () {
      if (quantities[k].value > 0) {
        quantities[k].value = Number(quantities[k].value) - 1;
      }
    });
  }
}

function initStars () {
  const featuredBoxStars = document.querySelectorAll('.section--furniture-list .stars');
  for (let k = 0; k < featuredBoxStars.length; k++) {
    var box = featuredBoxStars[k];
    for (let i = 0; i < box.children.length; i++) {
      box.children[i].addEventListener('mousedown', function (e) {
        var box2 = featuredBoxStars[k];
        for (let j = 0; j <= i; j++) {
          box2.children[j].className = 'fa fa-star selected';
        }
        for (let j = i + 1; j < box.children.length; j++) {
          box2.children[j].className = 'fa fa-star';
        }
      });
    }
  }
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

  initFurnitureList();
  initQuantities();
  initStars();
  const featuredBoxStars = document.querySelectorAll('.section--reviews .stars');
  for (let k = 0; k < featuredBoxStars.length; k++) {
    var box = featuredBoxStars[k];
    for (let i = 0; i < box.children.length; i++) {
      box.children[i].addEventListener('mousedown', function (e) {
        var box2 = featuredBoxStars[k];
        for (let j = 0; j <= i; j++) {
          box2.children[j].className = 'fa fa-star selected';
        }
        for (let j = i + 1; j < box.children.length; j++) {
          box2.children[j].className = 'fa fa-star';
        }
      });
    }
  }

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
            if (
              brand.children[brand.children.length - j].classList.value === 'active'
            ) {
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

  const productBoxStars = document.querySelectorAll('.product-box .stars');
  for (let k = 0; k < productBoxStars.length; k++) {
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
  }
});
