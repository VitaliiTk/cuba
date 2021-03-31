$(function () {
    $(".photo__slider").slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="images/photo/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/photo/right.svg"></button>',
    });

    // кнопка навверх =============================
    
    let btn = $('.pageUp');

    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.click(function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 1000);
    });

    // =================================================
    

    $('.menu__btn').click( function () {
        
    })

})