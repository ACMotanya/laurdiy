$(window).on('load', function(){

});

$( document ).ready(function() {
$(".page-template-trade-page .categories span").click(function(){
	$(".page-template-trade-page .categories span").removeClass('active');
	$('.laurdiy-contact-form').removeClass('show');
	var $classname = $(this).attr('class');
	var formSelector = '.laurdiy-contact-form.' + $classname;
	$(formSelector).addClass('show');
	$('.intro').addClass('show');
	setTimeout(function() {
		$('.form-outer-container').addClass('expanded');
	},200);
	// var scrollPosition = $(".page-template-trade-page .categories").outerHeight();
	$(this).addClass('active');

	// if ($('.form-outer-container').hasClass('expanded') == false) {
	// 	setTimeout(function() {
	// 		console.log(scrollPosition);
	// 		// window.scrollBy(0,300);
	// 	},500);
	// }
});

$('section.groups').each(function(){
	if($(this).prev().hasClass('groups') == true || $(this).next().hasClass('groups') == true){

	} else {
		var count = $(this).children('.horizontal-scroller').children('.item').length;
		if(count <= 3) {
			$(this).addClass('grid-js');
		}
	}
});

$(".card .description-container a").click(function(e){
	e.preventDefault();
	$(this).closest('.card').toggleClass('open');
});

// $("#shoplink").click(function() {
// 	$('html,body').animate({scrollTop: $("#shop").offset().top},500);
// });

if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && $(window).width() > 767) { // only init skrollr on non-mobile devices
	skrollr.init();
}

});
$(window).on('resize', function () {
    if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) { // no reason to destroy on mobile
        if ($(window).width() <= 1024) {
          skrollr.init().destroy(); // skrollr.init() returns the singleton created above
        }
    }
});