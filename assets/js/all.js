// Slide in from bottom
$(document).ready(function() {
  $(window).width() < 840 && $(".js-slidein").removeClass("js-slidein"), $(".js-slidein").each(function(i) {
    var s = $(this).offset().top;
    $(window).scrollTop() + $(window).height() > s && $(this).removeClass("js-slidein")
  }), $(window).scroll(function() {
    $(".js-slidein").each(function(i) {
      var s = $(this).offset().top + $(this).outerHeight() / 3;
      $(window).scrollTop() + $(window).height() > s && $(this).addClass("js-slidein-visible")
    })
  })
});

// Slide in from left to right
$(document).ready(function() {
  $(window).width() < 840 && $(".js-slidein-left").removeClass("js-slidein-left"), $(".js-slidein-left").each(function(i) {
    var s = $(this).offset().top;
    $(window).scrollTop() + $(window).height() > s && $(this).removeClass("js-slidein-left")
  }), $(window).scroll(function() {
    $(".js-slidein-left").each(function(i) {
      var s = $(this).offset().top + $(this).outerHeight() / 3;
      $(window).scrollTop() + $(window).height() > s && $(this).addClass("js-slidein-left-visible")
    })
  })
});

// Slide in from right to left
$(document).ready(function() {
  $(window).width() < 840 && $(".js-slidein-right").removeClass("js-slidein-right"), $(".js-slidein-right").each(function(i) {
    var s = $(this).offset().top;
    $(window).scrollTop() + $(window).height() > s && $(this).removeClass("js-slidein-right")
  }), $(window).scroll(function() {
    $(".js-slidein-right").each(function(i) {
      var s = $(this).offset().top + $(this).outerHeight() / 3;
      $(window).scrollTop() + $(window).height() > s && $(this).addClass("js-slidein-right-visible")
    })
  })
});