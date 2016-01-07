$(function() {
    "use strict";

    /* ==========================================================================
   Sub Form   
   ========================================================================== */



    $('#mc-form').ajaxChimp({
        language: 'cm',
        url: 'http://csmthemes.us3.list-manage.com/subscribe/post?u=9666c25a337f497687875a388&id=5b881a50fb'
            //http://xxx.xxx.list-manage.com/subscribe/post?u=xxx&id=xxx
    });


    $.ajaxChimp.translations.cm = {
        'submit': 'Submitting...',
        0: '<i class="fa fa-envelope"></i> Awesome! We have sent you a confirmation email',
        1: '<i class="fa fa-exclamation-triangle"></i> Please enter a value',
        2: '<i class="fa fa-exclamation-triangle"></i> An email address must contain a single @',
        3: '<i class="fa fa-exclamation-triangle"></i> The domain portion of the email address is invalid (the portion after the @: )',
        4: '<i class="fa fa-exclamation-triangle"></i> The username portion of the email address is invalid (the portion before the @: )',
        5: '<i class="fa fa-exclamation-triangle"></i> This email address looks fake or invalid. Please enter a real email address'
    };


    /* ==========================================================================
   Tweet
   ========================================================================== */


    $('.tweet').twittie({
        username: 'envatomarket', // change username here
        dateFormat: '%b. %d, %Y',
        template: '{{tweet}} {{user_name}}',
        count: 10
    }, function() {
        var item = $('.tweet ul');

        item.children('li').first().show().siblings().hide();
        setInterval(function() {
            item.find('li:visible').fadeOut(500, function() {
                $(this).appendTo(item);
                item.children('li').first().fadeIn(500);
            });
        }, 5000);
    });


    /* ==========================================================================
   sticky nav
   ========================================================================== */

    $('.navbar-default').waypoint('sticky', {
        offset: 30
    });

    /* ==========================================================================
   litebox
   ========================================================================== */

    $('.litebox-hero, .litebox-tour').magnificPopup({
        type: 'iframe'
    });


    /* ==========================================================================
       Number animation
       ========================================================================== */


    $('.welcome-message').waypoint(function() {

        var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',');

        $('.total-number-1').animateNumber({
            number: 50, //change value here
            numberStep: comma_separator_number_step
        }, 6000);

    }, {
        offset: '80%'

    });




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







    $(window).scroll(function(){
        var scrollTop = $(window).scrollTop();
        if(scrollTop != 0){
            $("nav.navbar").addClass("nav-fixed");
            $(".scroll.top").fadeIn(1000);
            // $(".submenu").slideUp(1000);
            return false;
        } else {
            $("nav.navbar").removeClass("nav-fixed");
            $(".scroll.top").fadeOut(1000);
            // $(".submenu").slideDown(1000);
            return false;
        }
    });







    (function($) {
    'use strict';
    /*
    Variable
    =========================== */
    var $window_w = $(window).width(),
        $body = $("body"),
        $nav = $("nav");

    /*
    Features
    =========================== */
    $("ul.feature-two").each(function(){
        var $this = $(this),
            $window_w = $(window).width(),
            $gHeight = $this.height();

        $this.append("<span class='line'></span>");
        $("li", this).last().css("margin-bottom","-19px");
    });
    
    /*
    Gallery
    =========================== */
    $(".wrap-gallery").each(function(){
        var $this = $(this);
        $(".img-wrapper", this).append("<span class='bg-gallery'></span>");
        $this.on("mouseenter", function() {
            $("a.hover", this).stop().fadeIn({queue:false});
            $(".bg-gallery", this).stop().fadeIn({queue:false});
            return false;
        });
        $this.on("mouseleave", function() {
            $("a.hover", this).stop().fadeOut({queue:false});
            $(".bg-gallery", this).stop().fadeOut({queue:false});
            return false;
        });
    });
    
    /*
    Animated Scroll
    =========================== */   
    $(window).scroll(function(){
        var scrollTop = $(window).scrollTop();
        if(scrollTop != 0){
            $("nav.navbar").addClass("nav-fixed");
            $(".scroll.top").fadeIn(1000);
            $(".submenu").slideUp(1000);
            return false;
        } else {
            $("nav.navbar").removeClass("nav-fixed");
            $(".scroll.top").fadeOut(1000);
            $(".submenu").slideDown(1000);
            return false;
        }
    });
    
    /*
    Blog Current
    =========================== */
    function blog_current(){
        $(".post.current").each(function(){
            var $window_w = $(window).width();
            if( $window_w < 981 && $window_w > 641 ){
                $(".img-post", this).addClass("col-sm-push-6");
                $(".content-post", this).addClass("col-sm-pull-6");
            }else{
                $(".img-post", this).removeClass("col-sm-push-6");
                $(".content-post", this).removeClass("col-sm-pull-6");
            }
        });
    }
    $(window).on("load", blog_current);
    $(window).on("resize", blog_current);
    
})(jQuery);
