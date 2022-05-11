$(document).ready(function() {
	$('.header__burger').click(function(){
        $('.header__burger').toggleClass('open-menu');
        $('.header__menu').toggleClass('open-menu');
        $('.header').toggleClass('open-menu');
        // $('html').toggleClass('fixed-page')
        $('body').toggleClass('shadow');
	});
});

 