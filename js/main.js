
// $('.fixed-menu').on('click', function(){
//     $('.dropdown-content').css('display','block');
//     alert('helo');
// });
// $('body').not('.fixed-menu').on('click',function(){
//     $('.dropdown-content').css('display','none');
// })







$(document).ready(function(){
    $(document).scroll(function() {
        showFixedMenu();
      });
    
    function showFixedMenu(){
        let y1 = parseInt($('body').css('padding'))
               + parseInt($('.header').css('height'));
        let y2 = $(this).scrollTop();
        if (y2 > y1) {
            $('.fixed-menu').fadeIn();
        } else {
            $('.fixed-menu').fadeOut();
        }
    }
    // function trimOuterText(){
    //     var p=$('.p-container p');
    //     var divh=$('.p-container').height();
    //     while ($(p).outerHeight()>divh) {
    //         $(p).text(function (index, text) {
    //             return text.replace(/\W*\s(\S)*$/, '...');
    //         });
    // }
    // }
    

});