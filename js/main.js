$(function () {
    $(".photo__slider").slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="images/photo/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/photo/right.svg"></button>',
        responsive: [
            {
              breakpoint: 430,
              settings: {
                arrows: false,
                dots: true
              }
            },
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    // кнопка навверх =============================
    
    // let btn = $('.pageUp');

    // $(window).scroll(function () {
    //     if ($(window).scrollTop() > 300) {
    //         btn.addClass('show');
    //     } else {
    //         btn.removeClass('show');
    //     }
    // });

    // btn.click(function (e) {
    //     e.preventDefault();
    //     $('html, body').animate({ scrollTop: 0 }, 1000);
    // });

    // =================================================
    
    // Выподающее меню==================================
    $('.menu__btn').click( function () {
        $('.menu__list').slideToggle()
    })

    // $('.menu__list-link').click( function (e) {
    //     e.preventDefault()
    //     $('.menu__list').slideToggle()
    // })

})