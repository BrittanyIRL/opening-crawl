$(document).ready(function(){
	console.log('hello world');
	
	var wh = window.innerHeight,
		$outerS1 = $('.outerS1'),
		$innerS1 = $('.innerS1'),
		$outerS2 = $('.outerS2'),
		$innerS2 = $('.innerS2');
	//scrollmagic


	// init
	var ctrl = new ScrollMagic.Controller({
	    globalSceneOptions: {
	        triggerHook: 'onLeave'
	    }
	});
	 
	// Create scenes
	$("section").each(function() {
	   
	    new ScrollMagic.Scene({
	        triggerElement: this,
	        duration: '50%'
	    })
	    .setPin(this)
	    .addTo(ctrl);
	});


	var longLongAgo = TweenMax.from($outerS1, 1, {
    opacity: 0,
    ease: Cubic.easeIn
	});
	var longLongAgoScene = new ScrollMagic.Scene({
    duration: '70%'
	})
	.setTween(longLongAgo)
	.triggerElement($('.innerS1')[0])
	.addTo(ctrl);

	
	var intro = TweenMax.fromTo('.starwars', 3,
        {
            scale: 4,
         	left: -400
    	},
        {
         scale: 0,
         left: 400,
         repeat: -1, /* Aka infinite amount of repeats */
         yoyo: false /* Make it go back and forth */
        });
	var introScene = new ScrollMagic.Scene({
	  	duration: 700 /* How many pixels to scroll / animate */
	 }).setTween(intro).triggerElement($('.starwars')[0])
	.addTo(ctrl);
  


	var letters = TweenMax.fromTo('.outerS2 div', 3,
        {
        	scale: 2,
   			opacity: 1,
         	left: -400
    	},
        {
        	scale: 4,
        	transform: "rotateX(-80deg) rotateY(-40deg)",
         	left: 400
        });
	var lettersScene = new ScrollMagic.Scene({
	  	duration: 5000 /* How many pixels to scroll / animate */
	 }).setTween(letters).triggerElement($('.innerS2')[0])
	.addTo(ctrl);

	var tie = TweenMax.fromTo('.tie', 3,
	{
		scale: 1,
		opacity: 0

	},
	{
		opacity: 1,
		scale: 5,
		yPercent: 50,
		xPercent: 100
	});
	var tieScene = new ScrollMagic.Scene({
		duration: 400 }).setTween(tie).triggerElement($('.tie')[0]).addTo(ctrl);
	})


    //lettering.js
	$(".star").lettering();
	$(".wars").lettering();

});