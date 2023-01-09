/**
 *
 * ---------------------------------------------------------------------------
 *
 * Template Name: Gardening Master - Gardening and Landscaping HTML5 Responsive Template
 * Template URL: http://lovesome.biz/tf-template/garden
 * Author : urosd
 * Version : 1.0
 *
 * ---------------------------------------------------------------------------
 *
 */

(function ($) {
  "use strict";
  /*  ======================================
            Mobile Menu
        ====================================== */
  var mobile_menu = $("ul.navigation");
  mobile_menu.slicknav({
    prependTo: ".responsive-menu-wrap",
  });

  /*  =========================
            sticky menu
        =========================*/
  $(".menu-area").sticky({
    topSpacing: 0,
  });

  /*  =========================
            Owl Carousel
        ========================= */
  /*---- main slider ----*/
  var slider_pulse = $(".slider-wraper");
  slider_pulse.owlCarousel({
    navText: [
      '<i class="fa fa-angle-left" aria-hidden="true"></i>',
      '<i class="fa fa-angle-right" aria-hidden="true"></i>',
    ],
    loop: true,
    dots: false,
    nav: true,
    autoplay: true,
    autoplayTimeout: 7000,
    mouseDrag: true,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
  // Owl Carousel Animation
  slider_pulse.on("translate.owl.carousel", function () {
    $(".slider-info h2").removeClass("fadeInDown animated").hide();
    $(".slider-info .garden-btn").removeClass("fadeInUp animated").hide();
  });
  slider_pulse.on("translated.owl.carousel", function () {
    $(".slider-info h2").addClass("fadeInDown animated").show();
    $(".slider-info .garden-btn").addClass("fadeInUp animated").show();
  });

  /*---- gallery slider ----*/
  var gallery_slider = $(".gallery");
  gallery_slider.owlCarousel({
    navText: [
      '<i class="fa fa-angle-left" aria-hidden="true"></i>',
      '<i class="fa fa-angle-right" aria-hidden="true"></i>',
    ],
    loop: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 7000,
    mouseDrag: true,
    smartSpeed: 500,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  });

  /*---------- blog slider ---------*/
  var blog_slider = $(".blog-slide");
  blog_slider.owlCarousel({
    navText: [
      '<i class="fa fa-angle-left" aria-hidden="true"></i>',
      '<i class="fa fa-angle-right" aria-hidden="true"></i>',
    ],
    loop: true,
    nav: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 5000,
    mouseDrag: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  /*---- client slider ----*/
  var client_slider = $(".client-wraper");
  client_slider.owlCarousel({
    loop: true,
    dots: false,
    nav: true,
    autoplay: true,
    mouseDrag: true,
    margin: 10,
    smartSpeed: 1200,
    navText: [
      '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
      '<i class="fa fa-arrow-right" aria-hidden="true"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 2,
      },
    },
  });

  /*  =========================
            Parallax 
        ========================= */
  var parallax_effect = $(".parallax");
  parallax_effect.jarallax({
    speed: 0.3,
  });

  /*  =========================
            Project Progress
        ========================= */
  var $progress = $(".counter");
  $progress.waypoint(
    function () {
      //counterUp
      var CounterUp = $(".counter");
      CounterUp.each(function () {
        var $this = $(this),
          countTo = $this.attr("data-count");
        $({
          countNum: $this.text(),
        }).animate(
          {
            countNum: countTo,
          },
          {
            duration: 2500,
            easing: "linear",
            step: function () {
              $this.text(Math.floor(this.countNum));
            },
            complete: function () {
              $this.text(this.countNum);
              //alert('finished');
            },
          }
        );
      });
    },
    {
      offset: "100%",
    }
  );

  /*  =========================
            Scroll Up
        ========================= */
  $.scrollUp({
    scrollName: "scrollUp", // Element ID
    topDistance: "300", // Distance from top before showing element (px)
    topSpeed: 300, // Speed back to top (ms)
    animation: "fade", // Fade, slide, none
    animationInSpeed: 200, // Animation in speed (ms)
    animationOutSpeed: 200, // Animation out speed (ms)
    scrollText: '<i class="fa fa-chevron-up" aria-hidden="true"></i>', // Text for element
    activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
  });

  /*  =========================
            google map
        ========================= */
  if ($("#map").length > 0) {
    var myCenter = new google.maps.LatLng(-33.7654872, 150.9103569);

    function initialize() {
      var mapProp = {
        zoom: 16,
        center: myCenter,
        scrollwheel: false,
        styles: [
          {
            featureType: "all",
            elementType: "labels.text.fill",
            stylers: [
              {
                saturation: 36,
              },
              {
                color: "#000000",
              },
              {
                lightness: 40,
              },
            ],
          },
          {
            featureType: "all",
            elementType: "labels.text.stroke",
            stylers: [
              {
                visibility: "on",
              },
              {
                color: "#000000",
              },
              {
                lightness: 16,
              },
            ],
          },
          {
            featureType: "all",
            elementType: "labels.icon",
            stylers: [
              {
                visibility: "off",
              },
            ],
          },
          {
            featureType: "administrative",
            elementType: "geometry.fill",
            stylers: [
              {
                color: "#000000",
              },
              {
                lightness: 20,
              },
            ],
          },
          {
            featureType: "administrative",
            elementType: "geometry.stroke",
            stylers: [
              {
                color: "#000000",
              },
              {
                lightness: 17,
              },
              {
                weight: 1.2,
              },
            ],
          },
          {
            featureType: "landscape",
            elementType: "geometry",
            stylers: [
              {
                color: "#000000",
              },
              {
                lightness: 20,
              },
            ],
          },
          {
            featureType: "poi",
            elementType: "geometry",
            stylers: [
              {
                color: "#000000",
              },
              {
                lightness: 21,
              },
            ],
          },
          {
            featureType: "road.highway",
            elementType: "geometry.fill",
            stylers: [
              {
                color: "#000000",
              },
              {
                lightness: 17,
              },
            ],
          },
          {
            featureType: "road.highway",
            elementType: "geometry.stroke",
            stylers: [
              {
                color: "#000000",
              },
              {
                lightness: 29,
              },
              {
                weight: 0.2,
              },
            ],
          },
          {
            featureType: "road.arterial",
            elementType: "geometry",
            stylers: [
              {
                color: "#000000",
              },
              {
                lightness: 18,
              },
            ],
          },
          {
            featureType: "road.local",
            elementType: "geometry",
            stylers: [
              {
                color: "#000000",
              },
              {
                lightness: 16,
              },
            ],
          },
          {
            featureType: "transit",
            elementType: "geometry",
            stylers: [
              {
                color: "#000000",
              },
              {
                lightness: 19,
              },
            ],
          },
          {
            featureType: "water",
            elementType: "geometry",
            stylers: [
              {
                color: "#000000",
              },
              {
                lightness: 17,
              },
            ],
          },
        ],
        mapTpeIdy: google.maps.MapTypeId.ROADMAP,
      };
      var map = new google.maps.Map(document.getElementById("map"), mapProp);
      //add your location marker here
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(-33.7654872, 150.9103569),
        map: map,
        draggable: true,
      });
    }
    google.maps.event.addDomListener(window, "load", initialize);
  }

  $(window).on("load", function () {
    /*  =========================
                preloader
            ========================= */
    $(".preloader").fadeOut("500");
  });
})(jQuery);
