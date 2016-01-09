$(document).ready(function(){
	console.log('hello world');
	
	//using fullpage js to control animation starts and stops
	$(document).ready(function() {
    $('#fullpage').fullpage({
        //Navigation
        lockAnchors: true,
        anchors:['I', 'II', 'III'],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['I', 'II', 'III'],
        showActiveTooltip: true,
        slidesNavigation: true,
        slidesNavPosition: 'bottom',

        //Scrolling
        css3: true,
        scrollingSpeed: 900,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 1000,
        scrollBar: true,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: false,
        continuousVertical: true,
        normalScrollElements: '#element1, .element2',
        scrollOverflow: false,
        touchSensitivity: 30,
        normalScrollElementTouchThreshold: 20,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: false,

        //Design
        controlArrows: false,
        verticalCentered: true,
        resize : false,
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
});


    //lettering.js
	$(".star").lettering();
	$(".wars").lettering();

	//triggering animation on visibility
	var $animation_elements = $('.animation-element');
	var $window = $(window);

	$window.on('scroll resize', check_if_in_view);

	$window.trigger('scroll');

	function check_if_in_view() {
	  var window_height = $window.height();
	  var window_top_position = $window.scrollTop();
	  var window_bottom_position = (window_top_position + window_height);

	  $.each($animation_elements, function() {
	    var $element = $(this);
	    var element_height = $element.outerHeight();
	    var element_top_position = $element.offset().top;
	    var element_bottom_position = (element_top_position + element_height);

	    //check to see if this current container is within viewport
	    if ((element_bottom_position >= window_top_position) &&
	        (element_top_position <= window_bottom_position)) {
	      $element.addClass('in-view');
	    } else {
	      $element.removeClass('in-view');
	    }
	  });
	}


});