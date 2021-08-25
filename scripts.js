
$(document).ready(function(){
  //header
  $('.btn').click(function(){
    $(this).toggleClass("click");
    $('.taskbar').toggleClass("show");
  });
  $('.search').click(function(){
    $(this).toggleClass("click");
    $('.ss').toggleClass("show");
  });
  $(window).scroll(function(){
    if($(window).scrollTop() >=350){
      $('.gotop').addClass("show")
    }else{
      $('.gotop').removeClass("show")
    }
  })
  $('.gotop').click(function(){
    $('html,body').animate({
      scrollTop:0
    },1800)
  })
  var x=$('#user').css("color")
  $(window).scroll(function(){
    if($(window).scrollTop()>100){
      $('div.headerr').css({
        "position": "fixed",
        "z-index":"1",
        "background": "rgba(0, 0 ,0,0.5)"
      })
      $('#user').css({
        "color": "red"
      })
    }else{
      $('div.headerr').css({
        "position":"absolute",
        "background": "none"
      })
      $('#user').css("color",x)
    }
  })
  $(window).scroll(function(){
    if($(window).scrollTop() >=2336){
      $('body').css("background-image","url('https://c.pxhere.com/photos/e3/78/mug_coffee_cup_drink-98978.jpg!d')")
    }else{
      $('body').css("background-image","url(none)")
    }
  })
  $('div.order').click(function(){
    event.preventDefault()
  })
  var od =document.querySelectorAll('div.orderonl img')
  for(var i=0; i<od.length;i++){
    var aa=od[i];
    $(aa).on({
      mouseenter: function() {
          $(this).css({
              "border-radius":"40px",
              "background-color": "gold",
          })
      },
      mouseleave: function() {
          $(this).css({
              "background-color":"white",
          })
      }
  })
  }
  $(".owl-carousel").owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
  });
  $('.i').hover(function(){
    $(this).toggleClass("show")
    $('.ii').toggleClass("shows")
    $('.iii').toggleClass("showss")
    $('.iiii').toggleClass("showsss")
    $('.content').toggleClass("contents")
  });

 $('.ss_ span').click(function(){
   $('.ss_').toggleClass("act")
 })
 //diemso
 function animateNumber(finalNumber, duration = 5000, startNumber = 0, callback) {
  let currentNumber = startNumber
  function updateNumber() {
      if (currentNumber < finalNumber) {
      let inc = Math.ceil(finalNumber / (duration / 17))
      if (currentNumber + inc > finalNumber) {
          currentNumber = finalNumber
          callback(currentNumber)
      } else {
          currentNumber += inc
          callback(currentNumber)
          requestAnimationFrame(updateNumber)
      }
      }
  }
  requestAnimationFrame(updateNumber)
  }
  
  $(window).scroll(function(){
    if($(window).scrollTop() >=2502 && $(window).scrollTop()<2590){
      animateNumber(4000, 1000, 0, function (number) {
        const formattedNumber = number.toLocaleString()
        $('#cups').text(formattedNumber+"+")
      })
      animateNumber(220, 1000, 0, function (number) {
        const formattedNumber = number.toLocaleString()
        $('#orderdays').text(formattedNumber+"+")
      })
      animateNumber(60, 1000, 0, function (number) {
        const formattedNumber = number.toLocaleString()
        $('#nhan_vien').text(formattedNumber)
      })
      animateNumber(40, 1000, 0, function (number) {
        const formattedNumber = number.toLocaleString()
        $('#at_hour').text(formattedNumber)
      })
    }
  })
//foots
  var m=$('.foots.jq')
  for(var i=0;i<7;i++){
      m.append("<div>...</div>")
  }
  var or=document.querySelectorAll('div.order a')
//lsit list_ ds mon

  var so_mon=4
  function dsmon(){
    for(var i=0;i<so_mon;i++){
    $('#list_').append('<div class="list_s"></div>') 
    }
    var ds_mon=document.querySelectorAll('#list_ .list_s')
    for(var j=0;j<ds_mon.length;j++){
      var r=`tai_nguyen/cake/cake_${j+1}.png`
      $(ds_mon[j]).append('<a herf="#"></a>')
      $(ds_mon[j]).append('<div class="deal_list"></div>')
      $(ds_mon[j]).append('<div class="deal_list1">BEST DEAL</div>')
      var rr=document.querySelectorAll('#list_ .list_s a')
      $(rr[j]).append('<img src='+r+'>')
    }
  }
  dsmon();

  var ds1=document.querySelectorAll('#list_ .list_s')
  var ds=document.querySelectorAll('#list_ .list_s .deal_list1')
  var ds2=document.querySelectorAll('#list_ .list_s .deal_list')
  function hoverenter(h){
      $(ds1[h]).css({
        "transform":" translate(0,-10px)",
        "background":"red"
      })
      $(ds[h]).css({
        "background":"none"
      })
      $(ds2[h]).css({
        "opacity":"1",
        "width":"120px"
      })
    
  }
  function hoverout(h){
      $(ds1[h]).css({
        "transform":" translate(0,0)",
        "background":"#FF7F24"
      })
      $(ds[h]).css({
        "background":"#AA0000"
      })
      $(ds2[h]).css({
        "opacity":"0",
        "width":"0"
      })
  }
  for(let h=0;h<ds1.length;h++){
      ds1[h].addEventListener("mouseenter",function(){
          hoverenter(h)
      })
      ds1[h].addEventListener("mouseleave",function(){
          hoverout(h)
      })
  }
});
