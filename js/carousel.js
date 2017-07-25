
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
});

$('.photo_gallery_nav').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  asNavFor: '.photo_gallery',
  centerMode: true,
  focusOnSelect: true,
  arrows: true
});