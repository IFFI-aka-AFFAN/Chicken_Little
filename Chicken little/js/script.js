

var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,
    
    autoplay:{
        delay: 6500,
        disableOnInteraction: false,

    },
    breakpoints: {
      640: {
        slidesPerView: 0,
        
      },
      768: {
        slidesPerView: 2,
        
      },
      1020: {
        slidesPerView: 3,
        
      },
    },
  });


  var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,
    
    autoplay:{
        delay: 2500,
        disableOnInteraction: false,

    },
    breakpoints: {
      640: {
        slidesPerView: 0,
        
      },
      768: {
        slidesPerView: 2,
        
      },
      1020: {
        slidesPerView: 3,
        
      },
    },
  });