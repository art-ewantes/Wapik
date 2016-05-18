$(document).ready(function() {
	
	function heightDetect() {
		$(".main_header").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});
	
	$(".toggle_mnu").click(function() {
		$(".sandwich").toggleClass("active");
	});

	$(".top_mnu ul a").click(function() {
		$(".top_mnu").fadeOut(600);
		$(".sandwich").toggleClass("active");
		$(".top_text").css("opacity", "1");
	}).append("<span>");

	$(".popup").magnificPopup({type:"image"});
	$(".popup_content").magnificPopup({
		type:"inline",
		midClick: true
	});


	$(".toggle_mnu").click(function() {
		if ($(".top_mnu").is(":visible")) {
			$(".top_text").css("opacity", "1");
			$(".top_mnu").fadeOut(600);
			$(".top_mnu li a").removeClass("fadeInUp animated");
		} else {
			$(".top_text").css("opacity", ".1");
			$(".top_mnu").fadeIn(600);
			$(".top_mnu li a").addClass("fadeInUp animated");
		};
	});
	
	$("input, select, textarea").jqBootstrapValidation();
  $(".top_mnu ul a").mPageScroll2id();

	

// $(document).ready(function() {
 
//   var owl = $(".owl-carousel");
 
//   owl.owlCarousel();
 
//   // Custom Navigation Events
//   $(".next").click(function(){
//     owl.trigger('owl.next');
//   })
//   $(".prev").click(function(){
//     owl.trigger('owl.prev');
//   })
 
// });



$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(600).fadeOut("slow");

	// $(".top_text h1").animated("fadeInDown", "fadeOutUp");
	// $(".top_text p").animated("fadeInUp", "fadeOutDown");

}); 

$(document).ready(function() {
  $(".owl-carousel").owlCarousel({
	autoplay: true,
	loop:true,
  	nav:true,
  	navText: ["<img src='../img/prev.png'>","<img src='../img/next.png'>"],
	dots: true,
	items: 1,
	// singleItem: true,
	autoplayTimeout:6000,
	mouseDrag: true,
	touchDrag: true,
	navSpeed: 700,
  });

  });

$(document).ready(function() {
  $(".owl-carousel-partners").owlCarousel({
	autoplay: true,
	loop:true,
  	// nav:true,
  	// navText: ["<img src='../img/prev.png'>","<img src='../img/next.png'>"],
	// dots: true,
	// singleItem: true,
	autoplayTimeout:6000,
	mouseDrag: true,
	touchDrag: true,
	navSpeed: 700,
	items: 4,
	responsive:{
		0:{
            items:1,
             stagePadding:100
        },
        600:{
            items:2,
             stagePadding:130,
        },
        840:{
         items:1,
            stagePadding:0
        },
        900:{
         items:2,
            stagePadding:0
        },
        1000:{
            items:4,
            stagePadding:0
        },
        1200:{
            items:4,
            stagePadding:0
        },
        1900:{
            items:4
            
        }     
	}
  });

  });
});