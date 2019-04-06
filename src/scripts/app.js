'use strict';

function toggleBedlist (visible) {
  document.querySelector('.bedlist').classList.toggle('show', visible);
  document.querySelector('.chairlist').classList.remove('show');
  document.querySelector('.sofalist').classList.remove('show');
  document.querySelector('.tablelist').classList.remove('show');
  document.querySelector('.dininglist').classList.remove('show');
}

toggleBedlist();

document.querySelector('.bed').addEventListener('click', function (e) {
  e.preventDefault();
  toggleBedlist();
});

function toggleChairlist (visible) {
  document.querySelector('.chairlist').classList.toggle('show', visible);
  document.querySelector('.bedlist').classList.remove('show');
  document.querySelector('.sofalist').classList.remove('show');
  document.querySelector('.tablelist').classList.remove('show');
  document.querySelector('.dininglist').classList.remove('show');
}

toggleChairlist();

document.querySelector('.chair').addEventListener('click', function (e) {
  e.preventDefault();
  toggleChairlist();
});

function toggleSofalist (visible) {
  document.querySelector('.sofalist').classList.toggle('show', visible);
  document.querySelector('.bedlist').classList.remove('show');
  document.querySelector('.chairlist').classList.remove('show');
  document.querySelector('.tablelist').classList.remove('show');
  document.querySelector('.dininglist').classList.remove('show');
}

toggleSofalist();

document.querySelector('.sofa').addEventListener('click', function (e) {
  e.preventDefault();
  toggleSofalist();
});

function toggleTablelist (visible) {
  document.querySelector('.tablelist').classList.toggle('show', visible);
  document.querySelector('.bedlist').classList.remove('show');
  document.querySelector('.chairlist').classList.remove('show');
  document.querySelector('.sofalist').classList.remove('show');
  document.querySelector('.dininglist').classList.remove('show');
}

toggleTablelist();

document.querySelector('.table').addEventListener('click', function (e) {
  e.preventDefault();
  toggleTablelist();
});

function toggleDininglist (visible) {
  document.querySelector('.dininglist').classList.toggle('show', visible);
  document.querySelector('.bedlist').classList.remove('show');
  document.querySelector('.chairlist').classList.remove('show');
  document.querySelector('.sofalist').classList.remove('show');
  document.querySelector('.tablelist').classList.remove('show');
}

toggleDininglist();

document.querySelector('.dining').addEventListener('click', function (e) {
  e.preventDefault();
  toggleDininglist();
});
