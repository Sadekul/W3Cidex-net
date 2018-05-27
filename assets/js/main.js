$(document).ready(function(){
    
    //magnific popup
  $('.youtube-video').magnificPopup({
      type:'iframe',
      iframe: {
          
      patterns: {
        youtube: {
          index: 'youtube.com/',
          id: 'v=',
          src: 'http://www.youtube.com/embed/%id%?autoplay=1'
        },
        
      },

      srcAction: 'iframe_src',
    }
  });
    
   //Slicknav js
    $('#menu').slicknav();
    
    
    //mixitup js
    var mixer = mixitup('.portfolio-content');
    
    
    //Modal set time
    setTimeout(function() {
        $('#exampleModal').modal();
    }, 6000);

});



//This code is for add sticky 
  $(window).on('scroll',function() {    
   var scroll = $(window).scrollTop();
   console.log($('.single-right').outerHeight() + $(window).height());
  if (scroll > 400 && scroll < $('.single-right').outerHeight()) {
    $("#sticky_content").addClass("sticky");
   }else{
    $("#sticky_content").removeClass("sticky");
   }
   
});



/*
	Load more content with jQuery - May 21, 2013
	(c) 2013 @ElmahdiMahmoud
*/   

$(function () {
    $(".left-single-blog").slice(0, 3).show();
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $(".left-single-blog:hidden").slice(0, 3).slideDown();
        if ($(".left-single-blog:hidden").length == 0) {
            $("#load").fadeOut('slow');
        }
        $('html,body').animate({
            scrollTop: $(this).offset().top
        }, 1500);
    });
});

$('a[href=#top]').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 600);
    return false;
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('.totop a').fadeIn();
    } else {
        $('.totop a').fadeOut();
    }
});







