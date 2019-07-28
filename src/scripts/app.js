import { tns } from './tiny-slider.js';

document.addEventListener('DOMContentLoaded', function () {
  tns({
    items: 1,
    container: '.slider-featured',
    navContainer: '.slider-featured-dots ul',
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
    gutter: 5,
    mouseDrag: true,
    navContainer: '.slider-products-dots > ul'
  });

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

  const feedbackBoxParent = document.querySelector(
    '.section--feedback .feedback-touch'
  );
  const feedbackBox = document.querySelectorAll('.section--feedback .box-feedback');
  const feedback = document.querySelector('.section--feedback .dots ul');
  const feedbackFragment = document.createDocumentFragment();

  for (let i = 0; i < feedbackBox.length; i++) {
    const feedbackElement = document.createElement('li');
    const feedbackElementRef = document.createElement('a');
    /// feedbackElementRef.setAttribute("href", "#");
    feedbackElement.appendChild(feedbackElementRef);
    feedbackFragment.appendChild(feedbackElement);
  }
  feedback.appendChild(feedbackFragment);

  for (let i = 0; i < feedbackBox.length; i++) {
    if (i === 0) {
      const link = feedback.querySelectorAll('li a');
      feedbackBox[i].classList.add('show');
      link[i].classList.add('active');
    }

    feedback.children[i].addEventListener('click', function () {
      for (let j = 0; j < feedbackBox.length; j++) {
        const link = feedback.querySelectorAll('li a');
        if (i !== j) {
          feedbackBox[j].classList.remove('show');
          link[j].classList.remove('active');
        } else {
          feedbackBox[j].classList.add('show');
          link[j].classList.add('active');
        }
      }
    });
  }

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

  let feedbackLeft = function () {
    for (let i = 0; i < feedbackBox.length; i++) {
      const link = feedback.querySelectorAll('li a');
      if (feedbackBox[i].classList.contains('show')) {
        feedbackBox[i].classList.remove('show');
        link[i].classList.remove('active');
        if (i !== 0) {
          feedbackBox[i - 1].classList.add('show');
          link[i - 1].classList.add('active');
        } else {
          feedbackBox[feedbackBox.length - 1].classList.add('show');
          link[feedbackBox.length - 1].classList.add('active');
        }
        break;
      }
    }
  };

  let feedbackRight = function () {
    for (let i = 0; i < feedbackBox.length; i++) {
      const link = feedback.querySelectorAll('li a');
      if (feedbackBox[i].classList.contains('show')) {
        feedbackBox[i].classList.remove('show');
        link[i].classList.remove('active');
        if (i < feedbackBox.length - 1) {
          feedbackBox[i + 1].classList.add('show');
          link[i + 1].classList.add('active');
        } else {
          feedbackBox[0].classList.add('show');
          link[0].classList.add('active');
        }
        break;
      }
    }
  };

  swipedetect(feedbackBoxParent, function (swipedir) {
    if (swipedir === 'left') {
      feedbackLeft();
    }
    if (swipedir === 'right') {
      feedbackRight();
    }
  });
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

window.addEventListener('load', function () {
  const myTabs = document.getElementsByClassName('tab');
  function myTabClicks (tabClickEvent) {
    for (let i = 0; i < myTabs.length; i++) {
      myTabs[i].classList.remove('active');
    }

    const clickedTab = tabClickEvent.currentTarget;
    clickedTab.classList.add('active');
    tabClickEvent.preventDefault();

    const myContentPanels = document.getElementsByClassName('gallery');
    for (let i = 0; i < myContentPanels.length; i++) {
      myContentPanels[i].classList.remove('active');
    }
    const anchorReference = tabClickEvent.target;
    const galleryactive = anchorReference.getAttribute('href');
    const activePanel = document.querySelector(galleryactive);
    activePanel.classList.add('active');
  }
  for (let i = 0; i < myTabs.length; i++) {
    myTabs[i].addEventListener('click', myTabClicks);
  }
});

window.addEventListener('load', function () {
  const thumbnails = document.getElementsByClassName('featured-thumb');

  function myTabClicks (tabClickEvent) {
    for (let i = 0; i < thumbnails.length; i++) {
      thumbnails[i].classList.remove('featured-thumb-active');
    }

    const clickedThumb = tabClickEvent.currentTarget;
    clickedThumb.classList.add('featured-thumb-active');
    tabClickEvent.preventDefault();

    const bigPhoto = document.getElementsByClassName('featured-bigPhoto');
    for (let i = 0; i < bigPhoto.length; i++) {
      bigPhoto[i].classList.remove('active');
    }
    const anchorReference = tabClickEvent.target;
    const bigPhotoactive = anchorReference.getAttribute('href');
    const activePhoto = document.querySelector(bigPhotoactive);
    activePhoto.classList.add('active');
  }
  for (let i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener('click', myTabClicks);
  }
});

window.addEventListener('load', function () {
  const thumbnails = document.getElementsByClassName('top-seller-thumb');

  function myTabClicks (tabClickEvent) {
    for (let i = 0; i < thumbnails.length; i++) {
      thumbnails[i].classList.remove('top-seller-thumb-active');
    }

    const clickedThumb = tabClickEvent.currentTarget;
    clickedThumb.classList.add('top-seller-thumb-active');
    tabClickEvent.preventDefault();

    const bigPhoto = document.getElementsByClassName('top-seller-bigPhoto');
    for (let i = 0; i < bigPhoto.length; i++) {
      bigPhoto[i].classList.remove('active');
    }
    const anchorReference = tabClickEvent.target;
    const bigPhotoactive = anchorReference.getAttribute('href');
    const activePhoto = document.querySelector(bigPhotoactive);
    activePhoto.classList.add('active');
  }
  for (let i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener('click', myTabClicks);
  }
});

window.addEventListener('load', function () {
  const thumbnails = document.getElementsByClassName('sale-off-thumb');

  function myTabClicks (tabClickEvent) {
    for (let i = 0; i < thumbnails.length; i++) {
      thumbnails[i].classList.remove('sale-off-thumb-active');
    }

    const clickedThumb = tabClickEvent.currentTarget;
    clickedThumb.classList.add('sale-off-thumb-active');
    tabClickEvent.preventDefault();

    const bigPhoto = document.getElementsByClassName('sale-off-bigPhoto');
    for (let i = 0; i < bigPhoto.length; i++) {
      bigPhoto[i].classList.remove('active');
    }
    const anchorReference = tabClickEvent.target;
    const bigPhotoactive = anchorReference.getAttribute('href');
    const activePhoto = document.querySelector(bigPhotoactive);
    activePhoto.classList.add('active');
  }
  for (let i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener('click', myTabClicks);
  }
});

window.addEventListener('load', function () {
  const thumbnails = document.getElementsByClassName('top-rated-thumb');

  function myTabClicks (tabClickEvent) {
    for (let i = 0; i < thumbnails.length; i++) {
      thumbnails[i].classList.remove('top-rated-thumb-active');
    }

    const clickedThumb = tabClickEvent.currentTarget;
    clickedThumb.classList.add('top-rated-thumb-active');
    tabClickEvent.preventDefault();

    const bigPhoto = document.getElementsByClassName('top-rated-bigPhoto');
    for (let i = 0; i < bigPhoto.length; i++) {
      bigPhoto[i].classList.remove('active');
    }
    const anchorReference = tabClickEvent.target;
    const bigPhotoactive = anchorReference.getAttribute('href');
    const activePhoto = document.querySelector(bigPhotoactive);
    activePhoto.classList.add('active');
  }
  for (let i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener('click', myTabClicks);
  }
});

// thumbnails animation
window.addEventListener('load', function () {
  const thumbPrev = document.querySelector('.thumbnails .prev');
  const thumbNext = document.querySelector('.thumbnails .next');
  const thumb = document.querySelector('.thumbnails-list');

  let thumbMoveLeft = function (items) {
    for (let k = 0; k < items; k++) {
      for (let i = 1; i < thumb.children.length; i++) {
        if (
          thumb.children[i - 1].classList.value !== 'active' &&
          thumb.children[i].classList.value === 'active'
        ) {
          thumb.children[i - 1].classList.add('active');
          for (let j = 1; j < thumb.children.length; j++) {
            if (
              thumb.children[thumb.children.length - j].classList.value === 'active'
            ) {
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
});

// thumbnails top seller animation
window.addEventListener('load', function () {
  const thumbPrev = document.querySelector('#tab2 .thumbnails .prev');
  const thumbNext = document.querySelector('#tab2 .thumbnails .next');
  const thumb = document.querySelector('#tab2 .thumbnails-list');

  let thumbMoveLeft = function (items) {
    for (let k = 0; k < items; k++) {
      for (let i = 1; i < thumb.children.length; i++) {
        if (
          thumb.children[i - 1].classList.value !== 'active' &&
          thumb.children[i].classList.value === 'active'
        ) {
          thumb.children[i - 1].classList.add('active');
          for (let j = 1; j < thumb.children.length; j++) {
            if (
              thumb.children[thumb.children.length - j].classList.value === 'active'
            ) {
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
});

// thumbnails sale off animation
window.addEventListener('load', function () {
  const thumbPrev = document.querySelector('#tab3 .thumbnails .prev');
  const thumbNext = document.querySelector('#tab3 .thumbnails .next');
  const thumb = document.querySelector('#tab3 .thumbnails-list');

  let thumbMoveLeft = function (items) {
    for (let k = 0; k < items; k++) {
      for (let i = 1; i < thumb.children.length; i++) {
        if (
          thumb.children[i - 1].classList.value !== 'active' &&
          thumb.children[i].classList.value === 'active'
        ) {
          thumb.children[i - 1].classList.add('active');
          for (let j = 1; j < thumb.children.length; j++) {
            if (
              thumb.children[thumb.children.length - j].classList.value === 'active'
            ) {
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
});

// thumbnails top rated animation
window.addEventListener('load', function () {
  const thumbPrev = document.querySelector('#tab4 .thumbnails .prev');
  const thumbNext = document.querySelector('#tab4 .thumbnails .next');
  const thumb = document.querySelector('#tab4 .thumbnails-list');

  let thumbMoveLeft = function (items) {
    for (let k = 0; k < items; k++) {
      for (let i = 1; i < thumb.children.length; i++) {
        if (
          thumb.children[i - 1].classList.value !== 'active' &&
          thumb.children[i].classList.value === 'active'
        ) {
          thumb.children[i - 1].classList.add('active');
          for (let j = 1; j < thumb.children.length; j++) {
            if (
              thumb.children[thumb.children.length - j].classList.value === 'active'
            ) {
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
});
