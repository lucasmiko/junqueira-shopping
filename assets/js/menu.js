const btnOpen = document.querySelector('.btn-open');
const btnClose = document.querySelector('.btn-close');
const closeMenu = document.querySelectorAll('[data-close="menu"]');
const menu = document.querySelector('.menu');

btnOpen.addEventListener('click', e => {

  menu.classList.add('open')
  menu.classList.remove('menu')


})

btnClose.addEventListener('click', e => {

  menu.classList.remove('open')
  menu.classList.add('menu')

})

closeMenu.forEach(el => {
  el.addEventListener('click', e=> {
      menu.classList.remove('open');
  })
})