const menu = document.querySelector('.menu__body')
const menuBtn = document.querySelector('.menu__icon')

const body = document.body

if (menu && menuBtn) {
   menuBtn.addEventListener('click', () => {
      menu.classList.toggle('active')
      menuBtn.classList.toggle('active')
      body.classList.toggle('lock')
   })
}


menu.querySelectorAll('.menu__link').forEach(link => {
   link.addEventListener('click', () => {
      menu.classList.remove('active')
      menuBtn.classList.remove('active')
      body.classList.remove('lock')
   }
   )
})


// const anchors = document.querySelectorAll('a[href*="#"]')
// anchors.forEach(anchor => {
//    anchor.addEventListener('click', event => {
//       event.preventDefault();


//       const blockID = anchor.getAttribute('href').substring(1)
//       document.getElementById(blockID).scrollIntoView({
//          behavior: "smooth",
//          block: "start"
//       })
//    })
// })


const anchors = document.querySelectorAll('a[href*="#"]');
Array.from(anchors).forEach(anchor => {
   anchor.addEventListener('click', event => {
      event.preventDefault();

      const blockID = anchor.getAttribute('href').slice(1);
      const element = document.getElementById(blockID);
      const offset = -72; // Смещение на 70 пикселей вверх
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset + offset;

      window.scrollTo({
         top: offsetPosition,
         behavior: "smooth"
      });
   });
});


const swiper = new Swiper('.swiper', {
   // Optional parameters
   direction: 'vertical',
   loop: true,

   // If we need pagination
   pagination: {
      el: '.swiper-pagination',
   },

   // Navigation arrows
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },

   // And if we need scrollbar
   scrollbar: {
      el: '.swiper-scrollbar',
   },
});