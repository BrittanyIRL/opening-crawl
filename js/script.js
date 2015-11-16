$(document).ready(function(){
	console.log('hello world');
	
	//scrollmagic
	var controller = new ScrollMagic.Controller();


	//animate.css
	$('.fade').addClass('animated fadeOut');
    $('.starwars').addClass('animated zoomOut');

    //lettering.js
	$(".star").lettering();
	$(".wars").lettering();

});