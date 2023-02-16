//Menu
const header = document.querySelector("header");

window.addEventListener("scroll" ,function(){
    header.classList.toggle("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-x');
    navbar.classList.toggle('active');
};
window.onscroll = () => {
    menu.classList.remove('fa-x');
    navbar.classList.remove('active');
};


//Swiper
var swiper = new Swiper(".swiper-container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    loop:true,
    spaceBetween:10,
    slidesPerView: 2,
    coverflowEffect: {
      rotate: 40,
      slideShadows: false,
    },
    breakpoints: {
        600: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }    
  });


  