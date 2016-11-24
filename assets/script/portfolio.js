$(document).ready(function () {
	$(window).scroll(function(){
	       var window_top = $(window).scrollTop();
	       var window_bottom = $(window).scrollTop() + $(window).height();
	       adjustStyling();
	    }); 
	 
	$('a[href^="#"]').on('click', function (e) {
	      e.preventDefault();
	        $(document).off("scroll");
	         $('a div').each(function () {
	            $(this).removeClass('active');
	        })
	        $(this).addClass('active');
	         var target = this.hash,
	         menu = target;
	         $target = $(target);
  	       $('html, body').stop().animate({
	            'scrollTop': $target.offset().top
	        }, 600, 'swing', function () {
	        	//console.log("trigger onscroll");
	            window.location.hash = target;
	            //$(document).on("scroll", onScroll);
	            //$(window).scroll();
	            adjustStyling();
	            
	        });
	});
});

function adjustStyling(){
	var scrollPos = $(document).scrollTop();
    var hero_height = parseInt($(".hero").css("height"),10);

    $('nav a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('nav a div').removeClass("active");
            currLink.children('div').addClass("active");
        }
        else{
            currLink.children('div').removeClass("active");
        }
    });

    if($(window).scrollTop() + $(window).height() == $(document).height()) {
    	$('nav a div').removeClass("active");
    	$('.b_contact').addClass("active");
   }

   if($(window).scrollTop() >= hero_height){
   		$('header').removeClass('header_static');
   		$('header').addClass('header_dynamic');
   } else {
   		$('header').removeClass('header_dynamic');
   		$('header').addClass('header_static');
   }
}