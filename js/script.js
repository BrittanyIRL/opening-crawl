$(document).ready(function(){
	console.log('hello world');
	
	//scrollmagic

	// Init ScrollMagic Controller
  	var scrollMagicController = new ScrollMagic();
  	
  	//animates "star wars" to fade out repeatedly
  	var tween = TweenMax.fromTo('.animationTrigger', 4,
        {
            scale: 5,
         	left: -400
    	},
        {
         scale: 0,
         left: 400,
         repeat: -1, /* Aka infinite amount of repeats */
         yoyo: false /* Make it go back and forth */
        });
  
	  // Create the Scene and trigger when visible
	  var scene = new ScrollScene({
	    triggerElement: '.starwars',
	    duration: 700 /* How many pixels to scroll / animate */
	  	}).setTween(tween);
  
	  // Add debug indicators fixed on right side
	 
	//should fade crawl text at top of page
	 //  var bg_tween = TweenMax.from('.letterCrawl', 3, {
		//   console.log('tween2 found');
		//   backgroundColor: 'red',
		//   scale: 5
		// });
	 //  var bg_scene = new  ScrollScene({
		//   triggerElement: '.letterCrawl',
		//   duration: 800
		// }).setTween(bg_tween);

	  //adds tweens to controller
		scrollMagicController.addScene([
  			scene
		]);
  



	//animate.css
	//$('.fade').addClass('animated fadeOut');
    //$('.starwars').addClass('animated zoomOut');

    //lettering.js
	$(".star").lettering();
	$(".wars").lettering();

});