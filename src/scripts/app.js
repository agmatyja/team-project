console.log('hello');

const selectCategory = document.getElementById('selectCategory');
selectCategory.addEventListener('click', function (event) {
  event.stopPropagation();
  const re = new RegExp('.*', 'g');
  if (event.target.nodeName === 'LI') {
    selectCategory.children[0].innerText = re.exec(event.target.innerText)[0];
  }
});
