$(document).ready(function () {
    
    $('.main-slider').slick({
        dots:true,
        arrows:true,
        nextArrow: '<button type="button" class="slick-next"><img src="img/rev_slider_next.png" alt="Вперед"></button>',
        prevArrow: '<button type="button" class="slick-prev"><img src="img/rev_slider_prev.png" alt="Назад"></button>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    arrows: false
                }
            }
        ]
    });
    
    
    
    
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

    var count = $('#chosen .logos div').length;

    setInterval(function() {
        var active = $('#chosen .logos .active');
        if (active.index() < count - 1) {
            active.removeClass('active');
            active.next().addClass('active');
        }
        else {
            active.removeClass('active');
            $('#chosen .logos div:first-child').addClass('active');
        }
    }, 1000);


    

    var flag_open_lang = true;
    $('.sity-wrapp').click(function(e){
        e.stopPropagation();
        if(flag_open_lang){
            $('.sity-list').fadeIn(300);
            flag_open_lang = false;
        }
        else{
            $('.sity-list').fadeOut(300);
            flag_open_lang = true;
        }

    });
  

    
    $('.tel-inp-init').inputmask({
        "mask": "+7 (999) 999-99-99"
        , "placeholder": "_"
        , showMaskOnHover: false
        , showMaskOnFocus: true
    });
    
    
    
    
    

});
