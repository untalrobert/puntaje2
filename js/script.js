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

// datepicker Form

  $(function () {
      $("#datepicker").datepicker({ 
            autoclose: true, 
            todayHighlight: true
      }).datepicker('update', new Date());;
    });




// Form remember password        

    function muestra_oculta(id){
    if (document.getElementById){ //se obtiene el id
    var el = document.getElementById(id); //se define la variable "el" igual a nuestro div
    el.style.display = (el.style.display == 'none') ? 'block' : 'none'; //damos un atributo display:none que oculta el div
    }
    }
    window.onload = function(){/*hace que se cargue la función lo que predetermina que div estará oculto hasta llamar a la función nuevamente*/
    muestra_oculta('contenido');/* "contenido_a_mostrar" es el nombre que le dimos al DIV */
    }


// FORM EGRESADOS
   
$(document).ready(function(){
   $("#mayoria_edad").click(function(evento){
      if ($("#mayoria_edad").attr("checked")){
         $("#formulariomayores").css("display", "block");
      }else{
         $("#formulariomayores").css("display", "none");
      }
   });
});



 
