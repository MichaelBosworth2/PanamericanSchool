/* eslint-env browser */
/* jshint browser: true */
/* global $ */

$(document).ready(function () {

    
    /* For the sticky navigation */
    $('.js--section-about').waypoint(function (direction) {
        if (direction === "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '10%'
    });
    
    
    /* Mobile nav */
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        
        nav.slideToggle(300);
        
        if (icon.hasClass('icon ion-md-menu')) {
            icon.removeClass('icon ion-md-menu');
            icon.addClass('icon ion-md-close');
        } else {
            icon.removeClass('icon ion-md-close');
            icon.addClass('icon ion-md-menu');
        }
    });
    
    $('.js--main-nav').bind("mousewheel", function() {
        return false;
    });
    
    /*Highlight menu*/
//    $(function(){
//      $('a').each(function() {
//        if ($(this).prop('href') == window.location.href) {
//          $(this).addClass('current');
//        }
//      });
//    });
    
    
    /* Animations on scroll */
    $('.js--wp-1').waypoint(function () {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-2').waypoint(function () {
        $('.js--wp-2').addClass('animated fadeInRight');
    }, {
        offset: '60%'
    });
    
    $('.js--wp-3').waypoint(function () {
        $('.js--wp-3').addClass('animated fadeInLeft');
    }, {
        offset: '60%'
    });
    
    $('.js--wp-4').waypoint(function () {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '50%'
    });
       
    
    /* For the main slider */
    $(".main-slider").on("init", function (event, slick) {
        "use strict";
        $(this).find(".slick-list").css("transform", "none");
        $(this).find(".slick-track").css("transform", "none");
    });
    $(".main-slider").slick({
        appendDots: $('.main-slider'),
        dots: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 3000
    });
    
    
    /* For the uni slider */
    var mq = window.matchMedia("(max-width: 768px)");
    if (mq.matches) {
        $(".slider-uni").slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1000,
            speed: 8000
        });
    } else {
        $(".slider-uni").slick({
            infinite: true,
            slidesToShow: 6,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1000,
            speed: 8000
        });
    }
    
    
    /* For the news */
    $(".news1").hover(
        function () {
            "use strict";
            $(".n-text1", this).css("display", "block");
        },
        function () {
            "use strict";
            $(".n-text1", this).css("display", "none");
        }
    );

    $(".news2").hover(
        function () {
            "use strict";
            $(".n-text2", this).css("display", "block");
        },
        function () {
            "use strict";
            $(".n-text2", this).css("display", "none");
        }
    );

    $(".news3").hover(
        function () {
            "use strict";
            $(".n-text3", this).css("display", "block");
        },
        function () {
            "use strict";
            $(".n-text3", this).css("display", "none");
        }
    );
    
    
    /* For the events */
    $(".event1").hover(
        function () {
            "use strict";
            $(".e-text1", this).css("display", "block");
        },
        function () {
            "use strict";
            $(".e-text1", this).css("display", "none");
        }
    );

    $(".event2").hover(
        function () {
            "use strict";
            $(".e-text2", this).css("display", "block");
        },
        function () {
            "use strict";
            $(".e-text2", this).css("display", "none");
        }
    );

    $(".event3").hover(
        function () {
            "use strict";
            $(".e-text3", this).css("display", "block");
        },
        function () {
            "use strict";
            $(".e-text3", this).css("display", "none");
        }
    );
});