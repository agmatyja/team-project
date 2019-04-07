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
