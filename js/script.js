$(function() {

    $(document).ready(function() {
  
      var scrollOffset = $('.navbar-fixed-top').offset();
  
      $(window).scroll(function() {
        if ($(document).scrollTop() > scrollOffset.top) {
          $('.navbar-fixed-top').addClass('scroll-fixed');
        }
        else {
          $('.navbar-fixed-top').removeClass('scroll-fixed');
        }
      });
    });
  });