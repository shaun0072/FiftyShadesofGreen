$('.submenu-icon').on('click', function() {
	
	var $submenu = $(this).parent().siblings('.submenu'),
	    pointingRight = 'matrix(-1, 1.22465e-16, -1.22465e-16, -1, 0, 0)',
		pointingDown = 'matrix(-1.83697e-16, -1, 1, -1.83697e-16, 0, 0)',
		$svgClicked = $submenu.siblings('div.tab-cont').find('svg'),
	    $transformValue = $svgClicked.css('transform');

	$('.submenu').each(function() {
				
		var $thisSubmenu = $(this)[0],
		    $clickedsubmenu = $submenu[0];
		
		if( $thisSubmenu !== $clickedsubmenu ) {
			$(this).slideUp();
			$(this).siblings('div.tab-cont').find('svg').css({
				'transform'      : pointingRight,
				'-moz-transform' : "rotate(270deg)"
				})
		}
	});
	
	$submenu.slideToggle();
	

	if( pointingRight === $transformValue ) {
		
		$transformValue = $svgClicked.css({
			'transform'      : pointingDown,
			'-moz-transform' : "rotate(315deg)"
			});
	} else {
		
		$transformValue = $svgClicked.css({
			'transform'      : pointingRight,
			'-moz-transform' : "rotate(270deg)"
			});
	}
})