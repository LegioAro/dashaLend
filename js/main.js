$(document).ready(function () {

    //слайдеры
    function sliderWho() {
        if ($(window).width() < 501) {
            $('.who__items').not('.slick-initialized').slick({
                slidesToShow: 1,
                arrows: false,
                dots: true,
            })
        } else {
            $('.who__items').filter('.slick-initialized').slick('unslick');
        }
    }

    function sliderDescription() {
        if ($(window).width() < 769) {
            $('.description__items').not('.slick-initialized').slick({
                slidesToShow: 1,
                arrows: false,
                dots: true,
            })
        } else {
            $('.description__items').filter('.slick-initialized').slick('unslick');
        }
    }

    function sliderAbout() {
        if ($(window).width() < 651) {
            $('.about__info-items').not('.slick-initialized').slick({
                slidesToShow: 1,
                arrows: false,
                dots: true,
            })
        } else {
            $('.about__info-items').filter('.slick-initialized').slick('unslick');
        }
    }



    //перенос блоков
    function moveDate() {
        if ($(window).width() < 701) {
            $('.header__info-about-logo-wrapper').append($('.header .date'));
        } else {
            $('.header__info').append($('.header .date'));
        }
    }

    $(window).resize(function () {
        sliderWho();
        sliderDescription();
        sliderAbout();
        moveDate();
        btnPopp();

    })



    sliderWho();
    sliderDescription();
    sliderAbout();
    moveDate();
    btnPopp();


    //checkbox
    $('.form label').click(function () {
        $(this).closest('.form__checkbox-block').children('input').prop('checked', function (i, currentValue) {
            return !currentValue;
        });
    })


    //плавная прокрутка
    if ($(window).width() > 900) {
        $('.btn').on('click', function () {

            let href = $(this).attr('href');

            $('html, body').animate({
                scrollTop: $(href).offset().top
            }, {
                duration: 500,   // по умолчанию «400» 
                easing: "linear" // по умолчанию «swing» 
            });

            return false;
        });
    }


    //
    function btnPopp() {
        if ($(window).width() < 901) {
            $('.btn').attr('href', '#form');
            $('.btn').attr('data-fancybox', '');

        } else {
            $('.btn').attr('href', '#footer');
            $('.btn').removeAttr('data-fancybox', '');
        }
    }

});