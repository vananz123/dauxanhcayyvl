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
      $('.gotop span').css({
        "display":"block"
      })
    }else{
      $('.gotop span').css({
        "display":"none"
      })
    }
  })
  $(window).scroll(function(){
    if($(window).scrollTop()>100){
      $('div.headerr').css({
        "background": "black"
      })
    }else{
      $('div.headerr').css({
        "background": "none"
      })
    }
  })
  $('.gotop span').click(function(){
    $('html,body').animate({
      scrollTop:0
    },2000)
  })    
});