$(document).ready(function () {
	$('.header__menu-burger').click(function () {
		$('.header__menu-burger').toggleClass('open-menu');
		$('.header__nav').toggleClass('open-menu');
		// $('body').toggleClass('fixed-page');
	});
});