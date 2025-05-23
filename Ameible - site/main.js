
const swiper = new Swiper('.slider-wrapper', {
   // Optional parameters
   loop: true,
   grabCursor: true,
   spaceBetween: 50,
 
   // If we need pagination
   pagination: {
     el: '.swiper-pagination',
     clickable: true,
     dynamicBullets: true,
   },
 
   // Navigation arrows
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },

   breakpoints:{
      0: {
         slidesPerView:1
      },
      960: {
         slidesPerView: 2
      },
      1024: {
         slidesPerView: 3
      }
   }
 });

var menuIcon = document.querySelector('.menu-icon');
var ul = document.querySelector('.ul');

menuIcon.addEventListener('click', ()=>{

   if (ul.classList.contains('ativo')) {
    ul.classList.remove('ativo');
    document.querySelector('.menu-icon img').src = 'imagens/menu.png';
   } else{
    ul.classList.add('ativo');
    document.querySelector('.menu-icon img').src = 'imagens/close.png';
   }
})