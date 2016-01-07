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


	var longLongAgo = TweenMax.from($outerS1, 2, {
    opacity: 0,
    ease: Cubic.easeIn
	});
	var longLongAgoScene = new ScrollMagic.Scene({
    duration: '40%'
	})
	.setTween(longLongAgo)
	.triggerElement($('.container')[0])
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
	  	duration: 500 /* How many pixels to scroll / animate */
	 }).setTween(intro).triggerElement($('.starwars')[0])
	.addTo(ctrl);
  




	var crawl = new TimelineMax()
	.from(currentArticle.find('section > header.food_header > hgroup'), 3, {opacity:0, top:'-40px', ease: Power4.easeOut}, 0)
	.from(currentArticle.find('section > summary > p'), 3, {opacity:0, top:'40px', ease: Power4.easeOut}, 0);

	var scene = new ScrollScene({triggerElement: currentArticle, triggerHook:.3})
	.setTween(crawl)
	.addTo(controller);

	});



    //lettering.js
	$(".star").lettering();
	$(".wars").lettering();

});