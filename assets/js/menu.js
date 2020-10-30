const btnOpen = document.querySelector('.btn-open');
const btnClose = document.querySelector('.btn-close');
const closeMenu = document.querySelectorAll('[data-close="menu"]');
const menu = document.querySelector('.menu');
const stop = document.querySelector('body');

btnOpen.addEventListener('click', e => {

  menu.classList.add('open')
  menu.classList.remove('menu')
  stop.classList.add('stop-scroll')


})

btnClose.addEventListener('click', e => {

  menu.classList.remove('open')
  menu.classList.add('menu')
  stop.classList.remove('stop-scroll')

})

closeMenu.forEach(el => {
  el.addEventListener('click', e=> {
      menu.classList.remove('open');
  })
})

