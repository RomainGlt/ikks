$(document).ready(function() {
  $(window).scroll(function() {
    if ($(document).scrollTop() > 500) {
      $("slide-2").addClass("slide-active");
    } else {
      $("slide-2").removeClass("slide-active");
    }
  });
});
