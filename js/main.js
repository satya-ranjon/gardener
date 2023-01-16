/**
*****************************************
@File: Gardener Theme Custom Js

This files contents are outlined below>>>>>
******************************************
* 1. dynamic counting effect
* 2. theme banner slider
* 3. theme dropdwon
* 3. mainmenu submenu toggler
* 4. theme carousel 
* 5. shop price ranger
* 6 google map
* 7. theme accrodion
* 8. theme skin switcher
* 9. main menu sticky
* 10. theme lightbox active
* 11. theme gallery filter 

*****************************************
**/

"use strict";

// =1. dynamic counting effect
function counterUp() {
  if ($(".counter").length) {
    $(".counter").counterUp({
      delay: 10,
      time: 1300,
    });
  }
}

// =2. theme banner slider
function thmRevSlider() {
  if ($("#main_slider").length) {
    $("#main_slider").revolution({
      sliderType: "standard",
      sliderLayout: "auto",
      loops: false,
      delay: 10000,
      navigation: {
        arrows: {
          style: "hades",
          enable: true,
          hide_onmobile: false,
          hide_onleave: false,
          tmp: '<div class="tp-arr-allwrapper"> <div class="tp-arr-imgholder"></div></div>',
          left: {
            h_align: "left",
            v_align: "center",
            h_offset: 10,
            v_offset: 0,
          },
          right: {
            h_align: "right",
            v_align: "center",
            h_offset: 10,
            v_offset: 0,
          },
        },
      },

      responsiveLevels: [2540, 1280, 975, 991, 767, 479],
      gridwidth: [1320, 1170, 975, 750, 480, 450],
      gridheight: [800, 800, 650, 500, 500, 500],
      shadow: 0,
      spinner: "off",
      autoHeight: "off",
      disableProgressBar: "on",
      hideThumbsOnMobile: "off",
      hideSliderAtLimit: 0,
      hideCaptionAtLimit: 0,
      hideAllCaptionAtLilmit: 0,
      debugMode: false,
      fallbacks: {
        simplifyAll: "off",
        disableFocusListener: false,
      },
    });
  }
}
// =3. theme dropdwon
function dropDown() {
  if ($(".dropdown-menu li").length) {
    $(".dropdown-menu li").on("click", function () {
      $(this)
        .parents(".dropdown")
        .find(".btn-dropdown")
        .html($(this).text() + ' <i class="fa fa-angle-down"></i>');
      $(this)
        .parents(".dropdown")
        .find(".btn-dropdown")
        .val($(this).data("value"));
    });
  }
}
// =3. mainmenu submenu toggler
function mainMenuSubmenuToggler() {
  if ($(".main_menu nav ul li.sub_dropdown").length) {
    $(".main_menu nav ul li.sub_dropdown").append(function () {
      return '<i class="fa fa-sort-desc"></i>';
    });
    $(".main_menu nav ul li.sub_dropdown .fa").on("click", function () {
      $(this).parent("li").children("ul").slideToggle();
    });
  }
}

// =4. theme carousel
function thmCarousel() {
  if ($("#owl-demo").length) {
    var owl = $("#owl-demo");

    owl.owlCarousel({
      items: 2,
      itemsDesktop: [992, 2],
      itemsDesktopSmall: [768, 1],
      itemsTablet: [450, 1],
      itemsMobile: false, // itemsMobile disabled - inherit from itemsTablet option
      pagination: false,
      autoPlay: 4000,
    });

    // Custom Navigation Events
    $(".next").on("click", function () {
      owl.trigger("owl.next");
    });
    $(".prev").on("click", function () {
      owl.trigger("owl.prev");
    });
  }
}

// =5. shop price ranger
function priceRanger() {
  if ($(".price-ranger").length) {
    $(".price-ranger #slider-range").slider({
      range: true,
      min: 0,
      max: 1200,
      values: [99, 1035],
      slide: function (event, ui) {
        $(".price-ranger .ranger-min-max-block .min").val("$" + ui.values[0]);
        $(".price-ranger .ranger-min-max-block .max").val("$" + ui.values[1]);
      },
    });
    $(".price-ranger .ranger-min-max-block .min").val(
      "$" + $(".price-ranger #slider-range").slider("values", 0)
    );
    $(".price-ranger .ranger-min-max-block .max").val(
      "$" + $(".price-ranger #slider-range").slider("values", 1)
    );
  }
}

// =6 google map
function googleMap() {
  if ($("#contact-google-map").length) {
    var settingsItemsMap = {
      zoom: 12,
      center: new google.maps.LatLng(40.758896, -73.98513),
      zoomControlOptions: {
        style: google.maps.ZoomControlStyle.LARGE,
      },
      scrollwheel: false,
      styles: [
        {
          featureType: "water",
          stylers: [
            {
              color: "#c0d887",
            },
          ],
        },
        {
          featureType: "road",
          stylers: [
            {
              color: "#f2f2f2",
            },
          ],
        },
      ],
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    };
    var map = new google.maps.Map(
      document.getElementById("contact-google-map"),
      settingsItemsMap
    );
    var image = "images/home/map-icon.png";
    var myMarker = new google.maps.Marker({
      position: new google.maps.LatLng(40.758896, -73.98513),
      draggable: true,
      icon: image,
    });

    map.setCenter(myMarker.position);
    myMarker.setMap(map);
    // Google map
  }
}

// =7. theme accrodion
function thnAccordion() {
  if ($("#accordion > .panel").length || $("#accordion_two > .panel").length) {
    $("#accordion > .panel").on("show.bs.collapse", function (e) {
      var heading = $(this).find(".panel-heading");
      heading.addClass("active-panel");
    });

    $("#accordion > .panel").on("hidden.bs.collapse", function (e) {
      var heading = $(this).find(".panel-heading");
      heading.removeClass("active-panel");
      //setProgressBar(heading.get(0).id);
    });
    $("#accordion_two > .panel").on("show.bs.collapse", function (e) {
      var heading = $(this).find(".panel-heading");
      heading.addClass("active-panel");
    });

    $("#accordion_two > .panel").on("hidden.bs.collapse", function (e) {
      var heading = $(this).find(".panel-heading");
      heading.removeClass("active-panel");
      //setProgressBar(heading.get(0).id);
    });
  }
}

// =8. theme skin switcher
function thmSkinSwitcher() {
  if ($(".switch_btn button").length) {
    $(".switch_btn button").on("click", function () {
      $(".switch_menu").toggle(300);
    });
    $("#boxed").on("click", function () {
      $(".layout_changer").addClass("home_boxed");
    });
    $("#full_width").on("click", function () {
      $(".layout_changer").removeClass("home_boxed");
    });
    $(".bg1").on("click", function () {
      $(".home_boxed").addClass("bg1");
      $(".home_boxed").removeClass("bg2 bg3 bg4");
    });
    $(".bg2").on("click", function () {
      $(".home_boxed").addClass("bg2");
      $(".home_boxed").removeClass("bg1 bg3 bg4");
    });
    $(".bg3").on("click", function () {
      $(".home_boxed").addClass("bg3");
      $(".home_boxed").removeClass("bg2 bg1 bg4");
    });
    $(".bg4").on("click", function () {
      $(".home_boxed").addClass("bg4");
      $(".home_boxed").removeClass("bg2 bg3 bg1");
    });

    $("#myonoffswitch").on("click", function () {
      $(".main_menu").toggleClass("menu_fixed");
      $(".main_menu").removeClass("fixed");
    });
  }
}
// =9. main menu sticky
function menuSticky() {
  if ($(".menu_fixed.main_menu").length) {
    var sticky = $(".menu_fixed.main_menu"),
      scroll = $(window).scrollTop();

    if (scroll >= 190) sticky.addClass("fixed");
    else sticky.removeClass("fixed");
  }
}
// =10. theme lightbox active
function thmLightbox() {
  if ($(".fancybox").length) {
    $(".fancybox").fancybox({
      helpers: {
        overlay: {
          css: {
            background: "rgba(0,0,0,0.7)",
          },
        },
      },
    });
  }
}
// =11. theme gallery filter
function thmGallyerSorter() {
  if ($("#mixitup_list").length) {
    $("#mixitup_list").mixItUp(); // mix it up
  }
}

// Select menu

function selectDropdown() {
  if ($(".selectmenu").length) {
    $(".selectmenu").selectmenu();
  }
}

//Contact Form Validation
function contactFormValidation() {
  if ($(".contact-form").length) {
    $(".contact-form").validate({
      // initialize the plugin
      rules: {
        fname: {
          required: true,
        },
        lname: {
          required: true,
        },
        email: {
          required: true,
          email: true,
        },
        city: {
          required: true,
        },
        phone: {
          required: true,
        },
        zip: {
          required: true,
        },
        message: {
          required: true,
        },
        subject: {
          required: true,
        },
      },
      submitHandler: function (form) {
        // sending value with ajax request
        $.post(
          $(form).attr("action"),
          $(form).serialize(),
          function (response) {
            $(form).parent("div").append(response);
            $(form).find('input[type="text"]').val("");
            $(form).find('input[type="email"]').val("");
            $(form).find("textarea").val("");
          }
        );
        return false;
      },
    });
  }
}

// document ready event
jQuery(document).on("ready", function () {
  (function ($) {
    mainMenuSubmenuToggler();
    dropDown();
    thmRevSlider();
    thmCarousel();
    priceRanger();
    googleMap();
    thnAccordion();
    thmSkinSwitcher();
    counterUp();
    thmLightbox();
    thmGallyerSorter();
    selectDropdown();
    contactFormValidation();
  })(jQuery);
});

// window sccroll event
jQuery(window).on("scroll", function () {
  (function ($) {
    menuSticky();
  })(jQuery);
});
