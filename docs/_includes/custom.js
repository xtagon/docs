// bvanvugt: Init sidebar, taken directly from QuantumPro
(function(window, document, $, undefined) {
    "use strict";
    $(function() {
      // init sidebars
      // --------------------
      $(".nav.metismenu").metisMenu();
      // switch sidebar state mobile/desktop based on breakpoints
      // ----------------------------------------------------------
      var switchMenuState = function() {
        var $body = $("body"),
        $menuHeaderControls = $(".header-controls");
        if ($(window).width() < 992) {
          $body.removeClass("mini-sidebar");
          $menuHeaderControls.hide();
        } else if ($(window).width() > 992) {
          $body.removeClass("aside-left-open");
          $menuHeaderControls.show();
        }
      };
      $(window).on("resize", function() {
        debounce(switchMenuState, 300, false)();
      });
      // If sidebar is set to static
      // ------------------------------------------------
      if($("body.fixed-menu")){
        $("body.fixed-menu .main-menu").mCustomScrollbar({
          theme: "minimal-dark",
          scrollInertia: 100,
          setTop: "-999999px",
          mouseWheel: {
            preventDefault: true
          }
        });
      }

      // Toggle menu states
      // ----------------------------------
      var $toggleElement = $("[data-toggle-state]");
      $("[data-toggle-state]").on("click", function(e) {
        e.stopPropagation();
        var $body = $("body"),
        element = $(this),
        className = element.data("toggleState"),
        //key = element.data('key'),
        $target = $body;
        if (className) {
          if ($target.hasClass(className)) {
            $target.removeClass(className);
          } else {
            $target.addClass(className);
          }
        }
        menuIconState(className);
        backdropState(className);
      });

      // Toggle menu icon on Default Menu open/close
      // ----------------------------------
      var menuIconState = function(className) {
        if (className === "mini-sidebar") {
          if ($("body.mini-sidebar").length > 0) {
            $('[data-toggle-state="mini-sidebar"] > i')
            .removeClass("la-dot-circle-o")
            .addClass("la-circle");
          } else {
            $('[data-toggle-state="mini-sidebar"] > i')
            .removeClass("la-circle")
            .addClass("la-dot-circle-o");
          }
        }
      };
      // Load backdrop when sidebar is open
      // ----------------------------------
      var backdropState = function(className) {
        var backDrop =
        '<div class="aside-overlay-fixed" data-aos="fade-in" data-aos-duration="300"></div>';
        if (
          $("body.aside-right-open").length > 0 ||
          $("body.aside-left-open").length > 0 ||
          $("body.mail-compose-open").length > 0
        ) {
          $("body").append(backDrop);
          $(".aside-overlay-fixed").on("click", function() {
            $(this)
            .fadeOut("fast")
            .remove();
            $("body").removeClass(
              "aside-right-open aside-left-open mail-compose-open"
            );
          });
        }
      };
    });
  })(window, document, window.jQuery);
