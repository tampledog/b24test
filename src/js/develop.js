$(document).ready(function () {
    $('.consult__left--form select').styler({
        selectSmartPositioning:false
    });


    $('.client__slider').slick({
        dots: true,
        arrows: false,
        centerMode: true,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 1
                }
            }
        ]

    });

    $('.crcs').slick({
        dots: false,
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 8,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 2
                }
            }
        ]

    });


});