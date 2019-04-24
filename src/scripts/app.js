console.log('hello');

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
