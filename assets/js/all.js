$(document).ready(function() {
  $(window).scroll(function() {
    if ($(document).scrollTop() > 100) {
      $("#slider").addClass("slide-scrolled");
    } else {
      $("#slider").removeClass("slide-scrolled");
    }
  });
});
