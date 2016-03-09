$(function() {
    "use strict";

  

    /* ==========================================================================
   sticky nav
   ========================================================================== */

    $('.navbar-default').waypoint('sticky', {
        offset: 30
    });



  $(document).ready(function(){
        $('#IrArriba').hide();
        $(function(){
            $(window).scroll(function(){
                if($(this).scrollTop() > 200){
                    $('#IrArriba').fadeIn();
                }else{
                    $('#IrArriba').fadeOut();
                }
            })
            $('#IrArriba span').click(function(){
                $('body,html').animate({
                    scrollTop: 0
                }, 1500);
                return false;
            })
        })
    })




    /* ==========================================================================
   Feature image absolute position height fix
   ========================================================================== */

    $(window).load(function() {
        var featureImg = function() {
            $(".features div[class='row'] .col-md-7").each(function() {
                var newHeight = 0,
                    $this = $(this);
                $.each($this.children(), function() {
                    newHeight += $(this).height();
                });
                $this.height(newHeight);
            });
        };


        featureImg();


        $(window).on("resize", function() {
            featureImg();
        });


    });




    /* ==========================================================================
   Smooth scroll
   ========================================================================== */

    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({

                    scrollTop: (target.offset().top - 40)
                }, 1000);
                return false;
            }
        }
    });




});




$("ul.feature-two").each(function(){
        var $this = $(this),
            $window_w = $(window).width(),
            $gHeight = $this.height();

        $this.append("<span class='line'></span>");
        $("li", this).last().css("margin-bottom","-19px");
    });

