import Flickity from 'flickity';

const selectCategory = document.getElementById('selectCategory');
selectCategory.addEventListener('click', function (event) {
  event.stopPropagation();
  if (event.target.nodeName === 'LI') {
    selectCategory.children[0].innerText = /.*/g.exec(event.target.innerText)[0];
  }
});

document.addEventListener('DOMContentLoaded', function (event) {
  // eslint-disable-next-line
  new Flickity('.carousel-promotion', {
    cellAlign: 'left',
    contain: true,
    pageDots: true,
    hash: true
  });
});
