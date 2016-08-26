$('.submenu-icon').on('click', function() {
	
	var $submenu = $(this).parent().siblings('.submenu'),
	    pointingRight = 'matrix(-1, 1.22465e-16, -1.22465e-16, -1, 0, 0)',
		MOZpointingRight = 'matrix(0, -1, 1, 0, 0, 0)',
		pointingDown = 'matrix(-1.83697e-16, -1, 1, -1.83697e-16, 0, 0)',
		$svgClicked = $submenu.siblings('div.tab-cont').find('svg'),
	    $transformValue = $svgClicked.css('-webkit-transform');
		$MOZtransformValue = $svgClicked.css('-moz-transform');
		$

	$('.submenu').each(function() {
				
		var $thisSubmenu = $(this)[0],
		    $clickedsubmenu = $submenu[0];
		
		if( $thisSubmenu !== $clickedsubmenu ) {
			$(this).slideUp();
			$(this).siblings('div.tab-cont').find('svg').css({
				'-webkit-transform'  : pointingRight,
				'-moz-transform'     : MOZpointingRight
				})
		}
	});
	
	$submenu.slideToggle();
		console.log($transformValue);
		console.log($MOZtransformValue);

	if( pointingRight === $transformValue || MOZpointingRight === $MOZtransformValue) {
		
		$transformValue = $svgClicked.css({
			'-webkit-transform'   :  pointingDown,
			'-moz-transform'      : 'rotate(360deg)'
			});
	} else {
		$transformValue = $svgClicked.css({
			'-webkit-transform'   : pointingRight,
			'-moz-transform'      : MOZpointingRight
			});
	}
})