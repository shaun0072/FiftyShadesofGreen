/******************Service Item Hover***********************/
$('.service_item').on('mouseenter', function() {
	$(this).find('.service_overlay').stop().fadeIn();
	$(this).find('.service_overlay .service_overlay_content').stop().animate({
		top: "45px",
		opacity: "1"
		}, 200, "linear");
	$(this).find('.service_title_container').stop().animate({
		top : "52%"
	}, 200);
}).on('mouseleave', function() {
	$(this).find('.service_overlay').stop().fadeOut();
	$(this).find('.service_overlay .service_overlay_content').stop().animate({
		top: "100px",
		opacity: "0"
		}, 200);
	$(this).find('.service_title_container').stop().animate({
		top : "47%"
	});
})

/******************Flow Navigation***********************/
$('.nav-list li').on('mouseenter', function() {
	$(this).find('.services_nav_list').stop().slideDown("fast");
}).on('mouseleave', function() {
	$(this).find('.services_nav_list').stop().slideUp("fast");
})

/******************Phone Input Formatting***********************/
$("input[name='phone']").keyup(function() {
    $(this).val($(this).val().replace(/^(\d{3})(\d{3})(\d)+$/, "($1)$2-$3"));
});

/******************Header Scroll Shrink***********************/
$(function(){
    $('.header_and_nav').data('size','big');
});

$(window).scroll(function(){
    if($(document).scrollTop() > 0)
    {
        if($('.header_and_nav').data('size') == 'big')
        {
            $('.header_and_nav').data('size','small');
			$('.nav-list').addClass("shrink_nav_list");
			$('.logo').addClass("shrink_logo");
			$('.contact_info').addClass("shrink_contact_info");
			$('.header_and_nav').addClass("shrink_header_and_nav");
			$('.services_nav_list').addClass("services_list_shrink_adjustment");
        }
    }
    else
    {
        if($('.header_and_nav').data('size') == 'small')
        {
            $('.header_and_nav').data('size','big');
			$('.nav-list').removeClass("shrink_nav_list");
			$('.logo').removeClass("shrink_logo");
			$('.contact_info').removeClass("shrink_contact_info");
			$('.header_and_nav').removeClass("shrink_header_and_nav");
			$('.services_nav_list').removeClass("services_list_shrink_adjustment");
        }  
    }
});

/******************Content Scroll Fade/Slide In***********************/
$(window).scroll(function(){
	if($(document).scrollTop() > 600) {
		$('.outer:eq(' + '0'+ ')').removeClass('hide_it');
	}
	if($(document).scrollTop() > 1500) {
		$('.outer:eq(1)').removeClass('hide_it');
	}
	if($(document).scrollTop() > 2100) {
		$('.outer:eq(2)').removeClass('hide_it');
	}
	
});