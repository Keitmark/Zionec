$(document).ready(function () {
    $('.reviews_slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        appendDots: $('.reviews_slider_dots'),
        arrows: true,
        nextArrow: '<button type="button" class="slick-next"><img src="img/rev_slider_next.png" alt="Вперед"></button>',
        prevArrow: '<button type="button" class="slick-prev"><img src="img/rev_slider_prev.png" alt="Назад"></button>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    arrows: false
                }
            }
        ]
    });
  
    
    
    
    
    
    
    

});
