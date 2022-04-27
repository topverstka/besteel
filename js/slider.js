jQuery(document).ready(function($) {
    const imgScale = 1.5;
    const activeImgScale = 1.0;
    let prevSlide;

    /* hero slider for company object page */

    $('.hero').slick({
        dots: false,
        infinite: false,
        initialSlide: 0,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        draggable: false,
        arrows: false,
        customPaging: function(slick, next) { return (next + 1) + '/' + slick.slideCount; },
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    draggable: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    draggable: true,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    draggable: true,
                    slidesToScroll: 1
                }
            }

        ]
    }).on('afterChange', function(event, slick, currentSlide) {
        // $('.page-header-slider-item-ctrl-text').text(slick.options.customPaging.call(this, slick));

        prevSlide.find('img').css({
            '-webkit-transform': 'scale(' + imgScale + ')',
            '-moz-transform': 'scale(' + imgScale + ')',
            '-ms-transform': 'scale(' + imgScale + ')',
            '-o-transform': 'scale(' + imgScale + ')',
            'transform': 'scale(' + imgScale + ')'
        });
    }).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        prevSlide = $(slick.$slides.get(currentSlide));
        $('.page-header-slider-item-ctrl-text').text(slick.options.customPaging.call(this, slick, nextSlide));
        /*if (nextSlide > 0) {
            $('.page-header-slider-item-arrow-prev').css('display', 'flex')
        } else {
            // $('.page-header-slider-item-arrow-prev').css('display', 'none')
        }

        if (nextSlide + 1 === $(slick.$slides.length)[0]) {
            // $('.page-header-slider-item-arrow-next').css('display', 'none')
        } else {
            $('.page-header-slider-item-arrow-next').css('display', 'flex')
        }*/

        $('.page-header-slider-item-arrow-prev').removeClass('hero-button-opacity');
        $('.page-header-slider-item-arrow-next').removeClass('hero-button-opacity');

        if (nextSlide + 1 >= slick.slideCount) {
            $('.page-header-slider-item-arrow-next').addClass('hero-button-opacity');
        } 

        if (nextSlide - 1 < 0) {
            $('.page-header-slider-item-arrow-prev').addClass('hero-button-opacity');
        } 


        $(slick.$slides.get(nextSlide)).find('img').css({
            '-webkit-transform': 'scale(' + activeImgScale + ')',
            '-moz-transform': 'scale(' + activeImgScale + ')',
            '-ms-transform': 'scale(' + activeImgScale + ')',
            '-o-transform': 'scale(' + activeImgScale + ')',
            'transform': 'scale(' + activeImgScale + ')'
        });
    });

    // $('.page-header-slider-item-arrow-prev').css('display', 'none')

    $('body').on('click', '.page-header-slider-item-arrow-prev', function(e) {
        $('.hero').slick('slickPrev');
        e.preventDefault();
    });

    $('body').on('click', '.page-header-slider-item-arrow-next', function(e) {
        $('.hero').slick('slickNext');
        e.preventDefault();
    });

    // const updateFrameHeight = () => {
    //     const frameWidth = window.innerWidth;
    //     const isDisabled = $('.hero-text').data('disabled');
    //     console.log(isDisabled);
    //     if (frameWidth < 1366 && frameWidth > 767) {
    //         if (isDisabled) {
    //             $('.hero-text').css('display', 'block');
    //         }
    //         $('.hero-frame').css('height', frameWidth * 0.474);
    //     } else if (frameWidth <= 767) {
    //         if (isDisabled) {
    //             $('.hero-text').css('display', 'none');
    //         } else {
    //             $('.hero-frame').css('height', '618px');
    //         }
    //     } else {
    //         $('.hero-frame').css('height', '648px');
    //         if (isDisabled) {
    //             $('.hero-text').css('display', 'block');
    //         }
    //     }
    // };

    // window.addEventListener("resize", updateFrameHeight);

    // updateFrameHeight();

    /** two sync sliders **/

    $('.tech-step-bottom-slider-label').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        speed: 400,
        arrows: false,
        dots: false,
        fade: true,
        asNavFor: '.tech-step-slider,.tech-step-bottom-slider-text'
    });
    $('.tech-step-bottom-slider-text').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        speed: 400,
        cssEase: 'linear',
        adaptiveHeight: true,
        arrows: false,
        dots: false,
        fade: true,
        asNavFor: '.tech-step-slider,.tech-step-bottom-slider-label'
    });

    $('body').on('click', '.tech-step-slider-item-arrow-prev', function(e) {
        $('.tech-step-slider').slick('slickPrev');
        e.preventDefault();
    });

    $('body').on('click', '.tech-step-slider-item-arrow-next', function(e) {
        $('.tech-step-slider').slick('slickNext');
        e.preventDefault();
    });

    /** main text slider **/
    $('.main-bottom-slider-text').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        speed: 400,
        cssEase: 'linear',
        adaptiveHeight: true,
        arrows: false,
        dots: false,
        fade: true,
        asNavFor: '.detail-inner-objects'
    });

    $('body').on('click', '.detail-inner-object-arrow-prev', function(e) {
        $('.main-bottom-slider-text').slick('slickPrev');
        e.preventDefault();
    });

    $('body').on('click', '.detail-inner-object-arrow-next', function(e) {
        $('.main-bottom-slider-text').slick('slickNext');
        e.preventDefault();
    });
});