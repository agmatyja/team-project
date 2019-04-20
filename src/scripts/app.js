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
  const thumbnails = document.getElementsByClassName('thumb');

  function myTabClicks (tabClickEvent) {
    for (let i = 0; i < thumbnails.length; i++) {
      thumbnails[i].classList.remove('thumb-active');
    }

    const clickedThumb = tabClickEvent.currentTarget;
    clickedThumb.classList.add('thumb-active');
    tabClickEvent.preventDefault();

    const bigPhoto = document.getElementsByClassName('bigPhoto');
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
