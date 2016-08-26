$('.submenu-icon').on('click', function() {
	
	var $submenu = $(this).parent().siblings('.submenu'),
		pointingRight = 'matrix(-1, 1.22465e-16, -1.22465e-16, -1, 0, 0)',
	    WEBKITpointingRight = 'matrix(-1, 0.00000000000000012246467991473532, -0.00000000000000012246467991473532, -1, 0, 0)',
		MOZpointingRight = 'matrix(0, -1, 1, 0, 0, 0)',
		pointingDown = 'matrix(-1.83697e-16, -1, 1, -1.83697e-16, 0, 0)',
		WEBKITpointingDown = 'matrix(-0.0000000000000002220446049250313, -1, 1, -0.0000000000000002220446049250313, 0, 0)',
		$svgClicked = $submenu.siblings('div.tab-cont').find('svg'),
	    $transformValue = $svgClicked.css('transform'),
		$MOZtransformValue = $svgClicked.css('-moz-transform'),
		$WEBKITtransformValue = $svgClicked.css('-webkit-transform');
//$('.submenu-icon').parent().siblings('.submenu').siblings('div.tab-cont').find('svg').css('-webkit-transform')

	$('.submenu').each(function() {
				
		var $thisSubmenu = $(this)[0],
		    $clickedsubmenu = $submenu[0];
		
		if( $thisSubmenu !== $clickedsubmenu ) {
			$(this).slideUp();
			$(this).siblings('div.tab-cont').find('svg').css({
				'-webkit-transform'  : WEBKITpointingRight,
				'-moz-transform'     : MOZpointingRight,
				'transform'          : pointingRight
				})
		}
	});
	
	$submenu.slideToggle();


	if( pointingRight === $transformValue || MOZpointingRight === $MOZtransformValue || WEBKITpointingRight === $WEBKITtransformValue) {

		$transformValue = $svgClicked.css({
			'-webkit-transform'   :  WEBKITpointingDown,
			'-moz-transform'      : 'rotate(360deg)',
			'transform'           :  pointingDown
			});
	} else {
		$transformValue = $svgClicked.css({
			'-webkit-transform'   : WEBKITpointingRight,
			'-moz-transform'      : MOZpointingRight,
			'transform'           : pointingRight
			});
	}
})