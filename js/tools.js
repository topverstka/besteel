$(document).ready(function() {

    $.validator.addMethod('phoneRU',
        function(phone_number, element) {
            return this.optional(element) || phone_number.match(/^\+7 \(\d{3}\) \d{3}\-\d{2}\-\d{2}$/);
        },
        'Ошибка заполнения'
    );

    $('body').on('focus', '.form-input input, .form-input textarea', function() {
        $(this).parent().addClass('focus');
    });

    $('body').on('blur', '.form-input input, .form-input textarea', function() {
        $(this).parent().removeClass('focus');
        if ($(this).val() != '') {
            $(this).parent().addClass('full');
        } else {
            $(this).parent().removeClass('full');
        }
    });

    $('body').on('change', '.form-file input', function() {
        var curInput = $(this);
        var curField = curInput.parents().filter('.form-file');
        var curName = curInput.val().replace(/.*(\/|\\)/, '');
        if (curName != '') {
            curField.find('.form-file-input span').html(curName);
        } else {
            curField.find('.form-file-input span').html(curField.find('.form-file-input span').attr('data-placeholder'));
        }
    });

    $('form').each(function() {
        initForm($(this));
    });

    $('body').on('click', '.window-link', function(e) {
        windowOpen($(this).attr('href'));
        e.preventDefault();
    });

    $('body').on('keyup', function(e) {
        if (e.keyCode == 27) {
            windowClose();
        }
    });

    $(document).click(function(e) {
        if ($(e.target).hasClass('window')) {
            windowClose();
        }
    });

    $('body').on('click', '.window-close, .window-close-btn', function(e) {
        windowClose();
        e.preventDefault();
    });

    $('.tech-step-slider').each(function() {
        var curSlider = $(this);
        curSlider.slick({
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,
            arrows: false,
            dots: false
        });
    });

    $('body').on('click', '.tech-step-slider-item-arrow-prev', function(e) {
        $(this).parents().filter('.tech-step-slider').slick('slickPrev');
        e.preventDefault();
    });

    $('body').on('click', '.tech-step-slider-item-arrow-next', function(e) {
        $(this).parents().filter('.tech-step-slider').slick('slickNext');
        e.preventDefault();
    });

    $('.burger-link').click(function(e) {
        var curScroll = $(window).scrollTop();
        $('html').addClass('burger-open');
        $('.wrapper').css({'top': -curScroll});
        $('.wrapper').data('curScroll', curScroll);
        e.preventDefault();
    });

    $('.burger-close').click(function(e) {
        $('html').removeClass('burger-open');
        $('.wrapper').css({'top': 'auto'});
        $(window).scrollTop($('.wrapper').data('curScroll'));
        e.preventDefault();
    });

    $('.burger-menu ul li a').each(function() {
        var curLink = $(this);
        var curLi = curLink.parent();
        if (curLi.find('ul').length == 1) {
            curLink.append('<span>' + curLi.find('ul li').length + '</span>');
        }
    });

    $('.burger-menu ul li a').click(function(e) {
        var windowWidth = $('.wrapper').width();
        if (windowWidth < 768) {
            var curLi = $(this).parent();
            if (curLi.find('ul').length == 1) {
                curLi.toggleClass('open');
                e.preventDefault();
            }
        }
    });

    $('.page-header-slider').each(function() {
        var curSlider = $(this);
        curSlider.slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,
            arrows: false,
            dots: false
        });
    });

    $('body').on('click', '.page-header-slider-item-arrow-prev', function(e) {
        $(this).parents().filter('.page-header-slider').slick('slickPrev');
        e.preventDefault();
    });

    $('body').on('click', '.page-header-slider-item-arrow-next', function(e) {
        $(this).parents().filter('.page-header-slider').slick('slickNext');
        e.preventDefault();
    });

    $('.objects-more a').click(function(e) {
        $('.objects-more').addClass('loading');
        $.ajax({
            type: 'POST',
            url: $(this).attr('href'),
            dataType: 'html',
            cache: false
        }).done(function(html) {
            $('.objects-list').append($(html).find('.objects-list').html());
            if ($(html).find('.objects-more').length == 1) {
                $('.objects-more a').attr('href', $(html).find('.objects-more a').attr('href'));
            } else {
                $('.objects-more').remove();
            }
            $('.objects-more').removeClass('loading');
        });
        e.preventDefault();
    });

    $('.reviews-more a').click(function(e) {
        $('.reviews-more').addClass('loading');
        $.ajax({
            type: 'POST',
            url: $(this).attr('href'),
            dataType: 'html',
            cache: false
        }).done(function(html) {
            $('.reviews-list').append($(html).find('.reviews-list').html());
            if ($(html).find('.reviews-more').length == 1) {
                $('.reviews-more a').attr('href', $(html).find('.reviews-more a').attr('href'));
            } else {
                $('.reviews-more').remove();
            }
            $('.reviews-more').removeClass('loading');
        });
        e.preventDefault();
    });

    $('.news-detail-slider').each(function() {
        var curSlider = $(this);
        curSlider.slick({
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,
            arrows: false,
            dots: false
        });
    });

    $('body').on('click', '.news-detail-slider-item-arrow-prev', function(e) {
        $(this).parents().filter('.news-detail-slider').slick('slickPrev');
        e.preventDefault();
    });

    $('body').on('click', '.news-detail-slider-item-arrow-next', function(e) {
        $(this).parents().filter('.news-detail-slider').slick('slickNext');
        e.preventDefault();
    });

    $('.detail-inner-objects').each(function() {
        var curSlider = $(this);
        curSlider.slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,
            arrows: false,
            dots: false
        });
    });

    $('body').on('click', '.detail-inner-object-arrow-prev', function(e) {
        $(this).parents().filter('.detail-inner-objects').slick('slickPrev');
        e.preventDefault();
    });

    $('body').on('click', '.detail-inner-object-arrow-next', function(e) {
        $(this).parents().filter('.detail-inner-objects').slick('slickNext');
        e.preventDefault();
    });

    $('.about-who-menu ul li a').click(function(e) {
        var curLi = $(this).parent();
        if (!curLi.hasClass('active')) {
            $('.about-who-menu ul li.active').removeClass('active');
            curLi.addClass('active');
            var curIndex = $('.about-who-menu ul li').index(curLi);
            $('.about-who-content.active').removeClass('active');
            $('.about-who-content').eq(curIndex).addClass('active');
        }
        e.preventDefault();
    });

    $('.about-partners').each(function() {
        var curSlider = $(this);
        curSlider.slick({
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            adaptiveHeight: true,
            prevArrow: '<button type="button" class="slick-prev"><svg><use xlink:href="' + pathTemplate + 'images/sprite.svg#slider-prev"></use></svg></button>',
            nextArrow: '<button type="button" class="slick-next"><svg><use xlink:href="' + pathTemplate + 'images/sprite.svg#slider-next"></use></svg></button>',
            dots: false,
            responsive: [
                {
                    breakpoint: 767,
                        settings: {
                            slidesToShow: 1,
                            arrows: false
                        }
                }
            ]
        });
    });

    $('.page-header-video-link').click(function(e) {
        var curBlock = $(this).parent();
        curBlock.find('.page-header-video-player').html('<iframe width="560" height="315" src="' + $(this).attr('href') + '?controls=0&autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
        curBlock.addClass('start');
        e.preventDefault();
    });

    $('.main-news .objects-list').each(function() {
        var curSlider = $(this);
        curSlider.slick({
            infinite: false,
            slidesToShow: 2,
            slidesToScroll: 2,
            adaptiveHeight: true,
            prevArrow: '<button type="button" class="slick-prev"><svg><use xlink:href="' + pathTemplate + 'images/sprite.svg#slider-prev"></use></svg></button>',
            nextArrow: '<button type="button" class="slick-next"><svg><use xlink:href="' + pathTemplate + 'images/sprite.svg#slider-next"></use></svg></button>',
            dots: false,
            responsive: [
                {
                    breakpoint: 767,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            arrows: false
                        }
                }
            ]
        });
    });

    $('.detail-split-mobile-item-title').click(function(e) {
        $(this).parent().toggleClass('open');
        e.preventDefault();
    });

    $('.detail-split-info-item h3').click(function(e) {
        $(this).parent().toggleClass('open');
        e.preventDefault();
    });

    $('.detail-split-mobile-item-gallery').each(function() {
        var curSlider = $(this);
        curSlider.slick({
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,
            arrows: false,
            dots: false
        });
    });

    $('.page-main').each(function() {
        var mainScroll = 0;
        var mainStep = 0;
        var isAnimateScroll = false;

        var curScroll = 0;

        if ($(window).width() > 767) {
            $('.page-main').mousewheel(function(event) {
                if (!isAnimateScroll) {
                    isAnimateScroll = true;

                    if (event.deltaY == -1) {
                        if (mainStep == 0) {
                            mainStep = 1;
                            mainScroll = $('.main-about').offset().top;
                        } else if (mainStep == 1) {
                            mainStep = 2;
                            mainScroll = $('.main-prefs').offset().top;
                        } else if (mainStep == 2) {
                            mainStep = 3;
                            mainScroll = $('.main-prefs').offset().top;
                            $('.main-prefs-list').css({'transform': 'translateY(-' + ($('.main-prefs-item').eq(1).offset().top - $('.main-prefs-list').offset().top) + 'px)'});
                        } else if (mainStep == 3) {
                            mainStep = 4;
                            mainScroll = $('.main-prefs').offset().top;
                            $('.main-prefs-list').css({'transform': 'translateY(-' + ($('.main-prefs-item').eq(2).offset().top - $('.main-prefs-list').offset().top) + 'px)'});
                        } else if (mainStep == 4) {
                            mainStep = 5;
                            mainScroll = $('.main-prefs').offset().top;
                            $('.main-prefs-list').css({'transform': 'translateY(-' + ($('.main-prefs-item').eq(3).offset().top - $('.main-prefs-list').offset().top) + 'px)'});
                        } else if (mainStep == 5) {
                            mainStep = 6;
                            mainScroll = $('.main-catalogue').offset().top;
                        } else if (mainStep == 6) {
                            mainStep = 7;
                            mainScroll = $('.main-solutions').offset().top;
                        } else if (mainStep == 7) {
                            mainStep = 8;
                            mainScroll = $('.detail-inner-objects').offset().top;
                        } else if (mainStep == 8) {
                            mainStep = 9;
                            mainScroll = $('.main-bolts').offset().top;
                        } else if (mainStep == 9) {
                            mainStep = 10;
                            mainScroll = $('.main-project').offset().top;
                        } else if (mainStep == 10) {
                            mainStep = 11;
                            mainScroll = $('.main-news').offset().top;
                        } else if (mainStep == 11) {
                            mainStep = 12;
                            mainScroll = $('.page-footer').offset().top;
                        } else if (mainStep == 12) {
                            mainStep = 12;
                            mainScroll = $('.footer').offset().top;
                        } else {
                            mainScroll += event.deltaFactor * 3;
                        }
                    } else {
                        if (mainStep == 0) {
                            mainStep = 0;
                            mainScroll = 0;
                        } else if (mainStep == 1) {
                            mainStep = 0;
                            mainScroll = 0;
                        } else if (mainStep == 2) {
                            mainStep = 1;
                            mainScroll = $('.main-about').offset().top;
                        } else if (mainStep == 3) {
                            mainStep = 2;
                            mainScroll = $('.main-prefs').offset().top;
                        } else if (mainStep == 4) {
                            mainStep = 3;
                            mainScroll = $('.main-prefs').offset().top;
                            $('.main-prefs-list').css({'transform': 'translateY(-' + ($('.main-prefs-item').eq(1).offset().top - $('.main-prefs-list').offset().top) + 'px)'});
                        } else if (mainStep == 5) {
                            mainStep = 4;
                            mainScroll = $('.main-prefs').offset().top;
                            $('.main-prefs-list').css({'transform': 'translateY(-' + ($('.main-prefs-item').eq(2).offset().top - $('.main-prefs-list').offset().top) + 'px)'});
                        } else if (mainStep == 6) {
                            mainStep = 5;
                            mainScroll = $('.main-prefs').offset().top;
                            $('.main-prefs-list').css({'transform': 'translateY(-' + ($('.main-prefs-item').eq(3).offset().top - $('.main-prefs-list').offset().top) + 'px)'});
                        } else if (mainStep == 7) {
                            mainStep = 6;
                            mainScroll = $('.main-catalogue').offset().top;
                        } else if (mainStep == 8) {
                            mainStep = 7;
                            mainScroll = $('.main-solutions').offset().top;
                        } else if (mainStep == 9) {
                            mainStep = 8;
                            mainScroll = $('.detail-inner-objects').offset().top;
                        } else if (mainStep == 10) {
                            mainStep = 9;
                            mainScroll = $('.main-bolts').offset().top;
                        } else if (mainStep == 11) {
                            mainStep = 10;
                            mainScroll = $('.main-project').offset().top;
                        } else if (mainStep == 12) {
                            mainStep = 11;
                            mainScroll = $('.main-news').offset().top;
                        } else {
                            mainScroll += event.deltaFactor * 3;
                        }
                    }
                    $('html, body').animate({'scrollTop': mainScroll}, 800, 'easeInOutQuad', function() {
                        isAnimateScroll = false;
                    });
                }
            });
        }
    });

    $('.preload').each(function() {

        var countImages = $('img').length;
        var curImages = 0;
        $('img').each(function() {
            var curImg = $(this);
            curImg.attr('src', curImg.attr('src'));
            curImg.one('load', function() {
                curImages++;
                var curProgress = Math.round(curImages / countImages * 100);
                if (curProgress >= 0 && curProgress <= 100) {
                    $('.preload-back').css({'transform': 'translateY(' + (100 - curProgress) + '%)'});
                }
            });
        });

    });

});

$(window).on('load resize', function() {
    var windowWidth = $('.wrapper').width();

    $('.tech-step-slider').each(function() {
        var curSlider = $(this);
        var curOffset = (windowWidth - curSlider.parent().width()) / 4 - 32;
        if (windowWidth < 1366) {
            curOffset = (windowWidth - curSlider.parent().width()) / 2;
        }
        curSlider.css({'margin-left': -curOffset, 'margin-right': -curOffset});
        curSlider.find('.tech-step-slider-item').css({'padding-left': curOffset, 'padding-right': curOffset});
    });

    if (windowWidth > 767) {
        $('.tech-step-prefs, .tech-step-docs-prefs, .tech-galvanizing-steps, .tech-step-controls, .about-who-container, .main-prefs-list').each(function() {
            var curList = $(this);
            if (curList.hasClass('slick-slider')) {
                curList.slick('unslick');
            }
        });
    } else {
        $('.tech-step-prefs, .tech-step-docs-prefs, .tech-galvanizing-steps, .tech-step-controls, .about-who-container, .main-prefs-list').each(function() {
            var curList = $(this);
            if (!curList.hasClass('slick-slider')) {
                curList.slick({
                    infinite: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true
                });
            }
        });
    }

    if (windowWidth > 767) {
        $('.detail-prefs-container').each(function() {
            var curList = $(this);
            if (curList.hasClass('slick-slider')) {
                curList.slick('unslick');
            }
        });
    } else {
        $('.detail-prefs-container').each(function() {
            var curList = $(this);
            if (!curList.hasClass('slick-slider')) {
                curList.slick({
                    infinite: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    adaptiveHeight: true,
                    dots: true
                });
            }
        });
    }

    if (windowWidth > 767) {
        $('.main-header-prefs').each(function() {
            var curList = $(this);
            if (curList.hasClass('slick-slider')) {
                curList.slick('unslick');
            }
        });
    } else {
        $('.main-header-prefs').each(function() {
            var curList = $(this);
            if (!curList.hasClass('slick-slider')) {
                curList.slick({
                    infinite: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: false
                });
            }
        });
    }

});

function initForm(curForm) {
    curForm.find('.form-input input, .form-input textarea').each(function() {
        if ($(this).val() != '') {
            $(this).parent().addClass('full');
        }
    });

    curForm.find('.form-input input:focus, .form-input textarea:focus').each(function() {
        $(this).trigger('focus');
    });

    curForm.find('input.phoneRU').mask('+7 (000) 000-00-00');

    var curFormOptions = {
        ignore: '',
        submitHandler: function(form) {
            var curForm = $(form);
            if (curForm.hasClass('window-form')) {
                var formData = new FormData(form);

                windowOpen(curForm.attr('action'), formData);
            } else {
                form.submit();
            }
        }
    };

    curForm.validate(curFormOptions);
}

function windowOpen(linkWindow, dataWindow) {
    if ($('.window').length == 0) {
        var curPadding = $('.wrapper').width();
        var curScroll = $(window).scrollTop();
        $('html').addClass('window-open');
        curPadding = $('.wrapper').width() - curPadding;
        $('body').css({'margin-right': curPadding + 'px'});

        $('body').append('<div class="window"><div class="window-loading"></div></div>')

        $('.wrapper').css({'top': -curScroll});
        $('.wrapper').data('curScroll', curScroll);
    } else {
        $('.window').html('<div class="window-loading"></div>')
    }

    $.ajax({
        type: 'POST',
        url: linkWindow,
        processData: false,
        contentType: false,
        dataType: 'html',
        data: dataWindow,
        cache: false
    }).done(function(html) {
        $('.window').html('<div class="window-container window-container-preload"><div class="window-content"><div class="window-content-inner">' + html + '</div></div><a href="#" class="window-close"><svg><use xlink:href="' + pathTemplate + 'images/sprite.svg#window-close"></use></svg></a></div>');

        window.setTimeout(function() {
            $('.window-container-preload').removeClass('window-container-preload');
        }, 100);

        $('.window form').each(function() {
            initForm($(this));
        });

        $('.window .news-detail-slider').each(function() {
            var curSlider = $(this);
            curSlider.slick({
                infinite: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                adaptiveHeight: true,
                arrows: false,
                dots: false
            });
        });

        $(window).trigger('resize');
    });
}

function windowClose() {
    if ($('.window').length > 0) {
        $('.window').remove();
        $('html').removeClass('window-open');
        $('body').css({'margin-right': 0});
        $('.wrapper').css({'top': 0});
        $(window).scrollTop($('.wrapper').data('curScroll'));
    }
}

$(window).on('load resize scroll', function() {
    var windowScroll = $(window).scrollTop();
    var windowWidth = $('.wrapper').width();
    $('body').append('<div id="body-test-height" style="position:fixed; left:0; top:0; right:0; bottom:0; z-index:-1"></div>');
    var windowHeight = $('#body-test-height').height();
    $('#body-test-height').remove();

    $('.page-header-banner, .main-detail-inner .detail-inner-object-photo').each(function() {
        var curBanner = $(this);
        var curBannerIMG = curBanner.find('img');

        var bannerHeight = curBanner.height();
        var bannerIMGHeight = curBannerIMG.height();

        if ((windowScroll + windowHeight) > curBanner.offset().top && windowScroll < curBanner.offset().top + bannerHeight) {
            var curOffset = bannerIMGHeight - bannerHeight;
            var curPersent = windowScroll / (curBanner.offset().top + bannerHeight);
            curBannerIMG.css({'transform': 'translateY(-' + (curOffset * curPersent) + 'px)'});
        }
    });

    $('.page-footer').each(function() {
        if (windowScroll + windowHeight * 0.75 > $('.page-footer').offset().top) {
            $('body').addClass('bg-order-form');
        } else {
            $('body').removeClass('bg-order-form');
        }
    });

    if (windowScroll > windowWidth) {
        $('html').addClass('header-fixed');
    } else {
        $('html').removeClass('header-fixed');
    }

    var isHeaderInverse = false;

    $('.block-inverse-header').each(function() {
        var curBlock = $(this);

        if (windowScroll >= curBlock.offset().top && windowScroll < curBlock.offset().top + curBlock.outerHeight()) {
            isHeaderInverse = true;
        }
    });

    if (isHeaderInverse) {
        $('html').addClass('header-inverse');
    } else {
        $('html').removeClass('header-inverse');
    }

    var isHeaderInverseMain = false;

    $('.main-header').each(function() {
        var curBlock = $(this);

        if (windowScroll >= curBlock.offset().top && windowScroll < curBlock.offset().top + curBlock.outerHeight()) {
            isHeaderInverseMain = true;
        }
    });

    if (isHeaderInverseMain) {
        $('html').addClass('header-inverse-main');
    } else {
        $('html').removeClass('header-inverse-main');
    }

    $('.main-welcome').each(function() {
        if (windowScroll < $('.main-about').offset().top) {
            $('.main-tank-header').addClass('visible');
            $('.main-tank-about').removeClass('visible');

            var curCount = $('.main-tank-header img').length;
            var curPersent = windowScroll / $('.main-about').offset().top;
            $('.main-tank-header').css({'transform': 'translate(' + (64 - (windowWidth * 0.5 - windowWidth * 0.0526 - 64) * curPersent) + 'px, ' + (-windowWidth * 0.1947 * curPersent + (64 - 64 * curPersent)) + 'px)'});
            $('.main-tank-header img').removeClass('active');
            var curIndex = Math.round(curPersent * curCount);
            if (curIndex >= curCount) {
                curIndex = curCount - 1;
            }
            $('.main-tank-header img').eq(curIndex).addClass('active');
        } else {
            $('.main-tank-header').removeClass('visible');
            $('.main-tank-about').addClass('visible');
            if (windowScroll < $('.main-prefs').offset().top) {
                var curCount = $('.main-tank-about img').length;
                var curZero = $('.main-about').offset().top;
                var curPersent = (windowScroll - curZero) / ($('.main-prefs').offset().top - curZero);
                $('.main-tank-about img').removeClass('active');
                var curIndex = Math.round(curPersent * curCount);
                if (curIndex >= curCount) {
                    curIndex = curCount - 1;
                }
                $('.main-tank-about img').eq(curIndex).addClass('active');
            } else {
                if (windowScroll + windowHeight > $('.main-catalogue').offset().top) {
                    $('.main-tank-about').css({'transform': 'translateY(-' + (windowScroll + windowHeight - $('.main-catalogue').offset().top) + 'px)'});
                } else {
                    $('.main-tank-about').css({'transform': 'translateY(0)'});
                }
            }
        }
    });

    $('.main-bolts-bg').each(function() {
        var curBanner = $(this);
        var curBannerIMG = curBanner.find('img');

        var bannerHeight = curBanner.height();
        var bannerIMGHeight = curBannerIMG.height();

        if ((windowScroll + windowHeight) > curBanner.offset().top && windowScroll < curBanner.offset().top + bannerHeight) {
            var curOffset = curBannerIMG.width() - curBanner.width();
            var curPersent = windowScroll / (curBanner.offset().top + bannerHeight);
            curBannerIMG.css({'transform': 'translateX(-' + (curOffset * curPersent) + 'px)'});
        }
    });

});

$(window).on('load', function() {
    $('.preload').each(function() {;
        $('.preload-back').css({'transform': 'translateY(0)'});
        window.setTimeout(function() {
            $('.preload').fadeOut(function() {
                $('.preload').remove();
            });
        }, 1000);
    });
});