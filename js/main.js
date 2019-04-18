$("#toggle").click(function() {
  $(this).toggleClass("active");
  $("#overlay").toggleClass("open");
});

$(document).ready(function($) {
  $.Scrollax();

  var contentWayPoint = function() {
    var i = 0;
    $(".ftco-animate").waypoint(
      function(direction) {
        if (
          direction === "down" &&
          !$(this.element).hasClass("ftco-animated")
        ) {
          i++;

          $(this.element).addClass("item-animate");
          setTimeout(function() {
            $("body .ftco-animate.item-animate").each(function(k) {
              var el = $(this);
              setTimeout(
                function() {
                  var effect = el.data("animate-effect");
                  if (effect === "fadeIn") {
                    el.addClass("fadeIn ftco-animated");
                  } else if (effect === "fadeInLeft") {
                    el.addClass("fadeInLeft ftco-animated");
                  } else if (effect === "fadeInRight") {
                    el.addClass("fadeInRight ftco-animated");
                  } else {
                    el.addClass("fadeInUp ftco-animated");
                  }
                  el.removeClass("item-animate");
                },
                k * 50,
                "easeInOutExpo"
              );
            });
          }, 100);
        }
      },
      { offset: "95%" }
    );
  };
  contentWayPoint();

  var changeRadius = function() {
    var radius = 60; // adjust to move out items in and out

    console.log(window.outerWidth);
    if (window.outerWidth < 992) {
      radius = 80;
    }

    var bubbleWidth = $(".bubble").width();

    if (bubbleWidth > 350) {
      bubbleWidth = 350;
    }

    console.log(radius);
    var fields = $(".item1"),
      container = $("#container1"),
      width = container.width(),
      height = container.height();

    container.css({
      left: -0.15 * bubbleWidth,
      top: -0.1 * 350
    });

    if (window.outerWidth < 992) {
      container.css({
        left: -0.15 * bubbleWidth,
        top: -0.1 * 350
      });
    }
    var angle = 0,
      step = (2 * Math.PI) / fields.length;
    fields.each(function() {
      var x = Math.round(
        width / 2 + radius * Math.cos(angle) - $(this).width() / 2
      );
      var y = Math.round(
        height / 2 + radius * Math.sin(angle) - $(this).height() / 2
      );
      if (window.console) {
        console.log($(this).text(), x, y);
      }
      $(this).css({
        left: x + "px",
        top: y + "px"
      });
      angle += step;
    });

    var fields = $(".item2"),
      container2 = $("#container2"),
      width = container.width(),
      height = container.height();

    container2.css({
      left: 0.85 * bubbleWidth,
      top: 0.19 * 350
    });

    if (window.outerWidth < 992) {
      container2.css({
        left: 1.12 * bubbleWidth,
        top: 0.3 * 350
      });
    }
    var angle = 0,
      step = (2 * Math.PI) / fields.length;
    fields.each(function() {
      var x = Math.round(
        width / 2 + radius * Math.cos(angle) - $(this).width() / 2
      );
      var y = Math.round(
        height / 2 + radius * Math.sin(angle) - $(this).height() / 2
      );
      if (window.console) {
        console.log($(this).text(), x, y);
      }
      $(this).css({
        left: x + "px",
        top: y + "px"
      });
      angle += step;
    });
  };

  changeRadius();

  window.addEventListener("resize", function() {
    changeRadius();
  });
});
