$(document).ready(function () {
	$('.menu-toggle').click(function (event) {
		$('.menu-toggle,.header-content__info').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

$(function () {
	$('.maintop-slider').slick({
		dots: true,
		appendArrows: '.slider__buttons',
		prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right"></i></button>',
	});

	$('.client-slider').slick({
		dots: true,
		appendArrows: '.client-slider__buttons',
		prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right"></i></button>',
	});

	$('.review-slider').slick({
		dots: true,
		appendArrows: '.review-slider__buttons',
		prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right"></i></button>',
	});
});
