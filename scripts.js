
$(document).ready(function(){
  $('.btn').click(function(){
    $(this).toggleClass("click");
    $('.taskbar').toggleClass("show");
  });
  $('.search').click(function(){
    $(this).toggleClass("click");
    $('.ss').toggleClass("show");
  });
  $(window).scroll(function(){
    if($(window).scrollTop() >=120){
      $('.gotop span').show("slow")
    }else{
      $('.gotop span').hide("slow")
    }
  })
  $(window).scroll(function(){
    if($(window).scrollTop()>100){
      $('div.headerr').css({
        "position": "fixed",
        "z-index":"1",
        "background": "rgba(0, 0 ,0,0.5)"
      })
    }else{
      $('div.headerr').css({
        "position":"absolute",
        "background": "none"
      })
    }
  })
  $('.gotop span').click(function(){
    $('html,body').animate({
      scrollTop:0
    },2000)
  })    

  var od =document.querySelectorAll('div.orderonl img')
  for(var i=0; i<od.length;i++){
    var aa=od[i];
    $(aa).on({
      mouseenter: function() {
          $(this).css({
              "border-radius":"40px",
              "background-color": "gold"
          })
      },
      mouseleave: function() {
          $(this).css({
              "background-color":"white"
          })
      }
  })
  }
});
