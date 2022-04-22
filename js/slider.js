jQuery(document).ready(function ($) {
	const imgScale = 1.5;
	const activeImgScale = 1.0;
	let prevSlide;

	$('.hero').slick({
		dots: false,
		infinite: true,
		initialSlide: 0,
		speed: 500,
		fade: true,
		cssEase: 'linear',
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		draggable: false,
		arrows: false,
		customPaging: function (slick) { return (slick.currentSlide + 1) + '/' + slick.slideCount; },
		responsive: [
			{
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
	}).on('afterChange', function (event, slick, currentSlide) {
		$('.page-header-slider-item-ctrl-text').text(slick.options.customPaging.call(this, slick));

		prevSlide.find('img').css({
			'-webkit-transform': 'scale(' + imgScale + ')',
			'-moz-transform': 'scale(' + imgScale + ')',
			'-ms-transform': 'scale(' + imgScale + ')',
			'-o-transform': 'scale(' + imgScale + ')',
			'transform': 'scale(' + imgScale + ')'
		});
	}).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
		prevSlide = $(slick.$slides.get(currentSlide));
		
		$(slick.$slides.get(nextSlide)).find('img').css({
			'-webkit-transform': 'scale(' + activeImgScale + ')',
			'-moz-transform': 'scale(' + activeImgScale + ')',
			'-ms-transform': 'scale(' + activeImgScale + ')',
			'-o-transform': 'scale(' + activeImgScale + ')',
			'transform': 'scale(' + activeImgScale + ')'
		});
	});
		
	$('body').on('click', '.page-header-slider-item-arrow-prev', function (e) {	
		$('.hero').slick('slickPrev');
		e.preventDefault();
	});

	$('body').on('click', '.page-header-slider-item-arrow-next', function (e) {
		$('.hero').slick('slickNext');
		e.preventDefault();
	});

	//$('.hero').slick('slickNext');
});