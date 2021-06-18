$(window).scroll(function(){
    if ($(this).scrollTop() > 50) {
       $('slide').addClass('slide-active');
    } else {
       $('slide').removeClass('slide-active');
    }
});
