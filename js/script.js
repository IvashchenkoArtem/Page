$(function () {
    $('.js-nav-toggle').on('click', function () {
        $(this).toggleClass('toggler__icon--open');
        $('.js-nav').toggleClass('nav--open');
    });
});

$(function () {
    $('.js-date').on('click', function () {
        $(this).toggleClass('header-right__date--active');
        $('.sl__slide-js').toggleClass('sl__slide--active');
    });
});

let submit = document.getElementById("submit");
let info = document.getElementById("info");
submit.onmouseover = function () { info.style.visibility = "visible" };
submit.onmouseout = function () { info.style.visibility = "hidden" };
info.onmouseover = function () { info.style.visibility = "visible" };
info.onmouseout = function () { info.style.visibility = "hidden" };

$(function () {
    $('.js-access').on('click', function () {
        $(this).toggleClass('header-right__wrap-access--active');
        $('.js-quickAccess').toggleClass('row__quickAccess--active');
    });
    $('.js-access').hover(function () {
        $('.js-quickAccess').toggleClass('row__quickAccess--open');
    });
});


$(document).ready(function () {
    $('.sl').slick({
        slidesToShow: 4,
        infinite: false,
        slidesToScroll: 1,


        responsive: [
            {
                breakpoint: 1125,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,


                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]


    });
});