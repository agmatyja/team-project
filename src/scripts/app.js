const selectCategory = document.getElementById('selectCategory');
selectCategory.addEventListener('click', function (event) {
  event.stopPropagation();
  if (event.target.nodeName === 'LI') {
    selectCategory.children[0].innerText = /.*/g.exec(event.target.innerText)[0];
  }
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

document.addEventListener('DOMContentLoaded', function () {
  const contentTabParent = document.querySelector(
    '.section--products .panel-bar .menu'
  );
  const contentTab = document.querySelectorAll('.section--products .tab-content');
  const tabs = document.querySelector('.section--products .nav-tabs .tab');
  const tabsFragment = document.createDocumentFragment();

  for (let i = 0; i < contentTab.length; i++) {
    const tabsElement = document.createElement('a');
    /// tabsElement.setAttribute("href", "#");
    tabsFragment.appendChild(tabsElement);
  }
  tabs.appendChild(tabsFragment);

  for (let i = 0; i < contentTab.length; i++) {
    if (i === 0) {
      const link = tabs.querySelectorAll('a');
      contentTab[i].classList.add('show');
      link[i].classList.add('active');
    }

    tabs.children[i].addEventListener('click', function () {
      for (let j = 0; j < contentTab.length; j++) {
        const link = tabs.querySelectorAll('a');
        if (i !== j) {
          contentTab[j].classList.remove('show');
          link[j].classList.remove('active');
        } else {
          contentTab[j].classList.add('show');
          link[j].classList.add('active');
        }
      }
    });
  }

  let tabsLeft = function () {
    for (let i = 0; i < contentTab.length; i++) {
      const link = tabs.querySelectorAll('a');
      if (contentTab[i].classList.contains('show')) {
        contentTab[i].classList.remove('show');
        link[i].classList.remove('active');
        if (i !== 0) {
          contentTab[i - 1].classList.add('show');
          link[i - 1].classList.add('active');
        } else {
          contentTab[contentTab.length - 1].classList.add('show');
          link[contentTab.length - 1].classList.add('active');
        }
        break;
      }
    }
  };

  let tabsRight = function () {
    for (let i = 0; i < contentTab.length; i++) {
      const link = tabs.querySelectorAll('a');
      if (contentTab[i].classList.contains('show')) {
        contentTab[i].classList.remove('show');
        link[i].classList.remove('active');
        if (i < contentTab.length - 1) {
          contentTab[i + 1].classList.add('show');
          link[i + 1].classList.add('active');
        } else {
          contentTab[0].classList.add('show');
          link[0].classList.add('active');
        }
        break;
      }
    }
  };

  swipedetect(contentTabParent, function (swipedir) {
    if (swipedir === 'left') {
      tabsLeft();
    }
    if (swipedir === 'right') {
      tabsRight();
    }
  });
});
