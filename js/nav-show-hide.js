$('.nav_toggle_btn').on('click', function() {
	var $navigationStatus = $('.nav-outer-cont').css('margin-left'),
		$pointingRight = 'matrix3d(-0.866025, 0, -0.5, 0, 0, 1, 0, 0, 0.5, 0, -0.866025, 0, 0, 0, 0, 1)';
		
	if( $navigationStatus === '0px') {
	
		$('.nav-outer-cont').css('margin-left', '-250px');
		$('.nav_toggle_btn .arrow').css('transform', $pointingRight);
		$('.mainarea').css('margin-left', '0px');
	} else {
		
		$('.nav-outer-cont').css('margin-left', '0px');
		$('.nav_toggle_btn .arrow').css('transform', 'rotateY(0deg)');
		$('.mainarea').css('margin-left', '250px');
	}
})