$(document).ready(function(){
	console.log('hello world');
	
	//using fullpage js to control animation starts and stops
	$('#fullpage').fullpage({
		lockAnchors: false,
		anchors:['IV', 'V', 'VI'],
		navigation: true,
		navigationPosition: 'right',
		showActiveTooltip: false,
		slidesNavigation: true,
		css3: true,
		scrollingSpeed: 1500,
		autoScrolling: true,
		fitToSection: true,
		fitToSectionDelay: 3000,
		scrollBar: false,
		easing: 'easeIn',
		easingcss3: 'ease',
		loopBottom: false,
		loopTop: false,
		continuousVertical: false,		
		touchSensitivity: 2,
		normalScrollElementTouchThreshold: 90,
		keyboardScrolling: true,
		animateAnchor: true,
		recordHistory: false,
		controlArrows: false,
        verticalCentered: true,
        resize : true,
        // sectionsColor : ['#ccc', '#fff'],
        // paddingTop: '3em',
        // paddingBottom: '10px',
        // fixedElements: '#header, .footer',
        responsiveWidth: 0,
        responsiveHeight: 0,

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        //events
        onLeave: function(index, nextIndex, direction){},
        afterLoad: function(anchorLink, index){},
        afterRender: function(){},
        afterResize: function(){},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
	});


    //lettering.js
	$(".star").lettering();
	$(".wars").lettering();

	//triggering animation on visibility



});