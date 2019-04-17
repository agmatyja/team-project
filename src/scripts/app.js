'use strict';

function toggleBed (visible) {
  document.querySelector('#bed').classList.toggle('show', visible);
  document.querySelector('#chair').classList.remove('show');
  document.querySelector('#sofa').classList.remove('show');
  document.querySelector('#table').classList.remove('show');
  document.querySelector('#dining').classList.remove('show');
}

toggleBed();

document.querySelector('#bed').addEventListener('click', function (e) {
  e.preventDefault();
  toggleBed();
});

function toggleChair (visible) {
  document.querySelector('#chair').classList.toggle('show', visible);
  document.querySelector('#bed').classList.remove('show');
  document.querySelector('#sofa').classList.remove('show');
  document.querySelector('#table').classList.remove('show');
  document.querySelector('#dining').classList.remove('show');
}

toggleChair();

document.querySelector('#chair').addEventListener('click', function (e) {
  e.preventDefault();
  toggleChair();
});

function toggleSofa (visible) {
  document.querySelector('#sofa').classList.toggle('show', visible);
  document.querySelector('#bed').classList.remove('show');
  document.querySelector('#chair').classList.remove('show');
  document.querySelector('#table').classList.remove('show');
  document.querySelector('#dining').classList.remove('show');
}

toggleSofa();

document.querySelector('#sofa').addEventListener('click', function (e) {
  e.preventDefault();
  toggleSofa();
});

function toggleTable (visible) {
  document.querySelector('#table').classList.toggle('show', visible);
  document.querySelector('#bed').classList.remove('show');
  document.querySelector('#chair').classList.remove('show');
  document.querySelector('#sofa').classList.remove('show');
  document.querySelector('#dining').classList.remove('show');
}

toggleTable();

document.querySelector('#table').addEventListener('click', function (e) {
  e.preventDefault();
  toggleTable();
});

function toggleDining (visible) {
  document.querySelector('#dining').classList.toggle('show', visible);
  document.querySelector('#bed').classList.remove('show');
  document.querySelector('#chair').classList.remove('show');
  document.querySelector('#table').classList.remove('show');
  document.querySelector('#sofa').classList.remove('show');
}

toggleDining();

document.querySelector('#dining').addEventListener('click', function (e) {
  e.preventDefault();
  toggleDining();
});
