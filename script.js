// Inicialización de Swiper
var swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
      delay: 5000, // Cambia la imagen cada 5 segundos
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
  