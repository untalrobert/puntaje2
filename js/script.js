(function($) {
	
	"use strict";
	

	//Clients Testimonial Slider
	if($('.testimonial-slider-full').length){
		$('.testimonial-slider-full').bxSlider({
			adaptiveHeight: true,
			auto:true,
			mode:'fade',
			controls: false,
			pause: 14000,
			speed: 1000,
			pager:true
		});
	}
	

	

})(window.jQuery);



  $(document).ready(function(){
  $('#divocultamuestra').hide()
   $("#botonocultamuestra").click(function () {
      $("#divocultamuestra").each(function() {
        displaying = $(this).css("display");
        if(displaying == "block") {
          $(this).fadeOut('slow',function() {
           $(this).css("display","none");
          });
        } else {
          $(this).fadeIn('slow',function() {
            $(this).css("display","block");
          });
        }
      });
    });
  });
 
