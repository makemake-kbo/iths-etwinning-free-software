$(document).click(function(){
	$('body').removeClass('menu-open');
});

$('.menu-toggle').click(function(event){
	event.stopPropagation();
    $('body').toggleClass('menu-open');
});