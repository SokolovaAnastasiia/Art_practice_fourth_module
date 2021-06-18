$(document).scroll(function() {
    let y1 = parseInt($('body').css('padding'))
           + parseInt($('.header').css('height'));
    let y2 = $(this).scrollTop();
    if (y2 > y1) {
      $('.fixed-menu').fadeIn();
    } else {
      $('.fixed-menu').fadeOut();
    }
  });

