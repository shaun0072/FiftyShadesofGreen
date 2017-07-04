/************************HOMEPAGE CAROUSEL******************************/
/* $('.single-item').slick({
	dots          :  true,
	autoplay      :  false
});

$('button.slick-arrow').removeAttr('style'); */
/************************TESTIMONIALS CAROUSEL******************************/
$('.testimonials').slick({
	dots          :  false,
	autoplay      :  true,
	arrows     : false,
});

/************************PHOTO GALLERY CAROUSEL******************************/




 $('.photo_gallery').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  asNavFor: '.photo_gallery_nav',
});

$('.photo_gallery_nav').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  asNavFor: '.photo_gallery',
  centerMode: true,
  focusOnSelect: true,
  arrows: true
});