$(document).ready(function(){
  function ramdomprice(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
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
  // $(window).scroll(function(){
  //   if($(window).scrollTop() >=2336){
  //     $('body').css("background-image","url('https://c.pxhere.com/photos/e3/78/mug_coffee_cup_drink-98978.jpg!d')")
  //   }else{
  //     $('body').css("background-image","url(none)")
  //   }
  // })
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
    responsive:{
        0:{
            items:2
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
    if($(window).scrollTop() >=2502 && $(window).scrollTop()<2990){
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
      
      $(ds_mon[j]).append('<img src='+r+'>')
      
      $(ds_mon[j]).append('<div class="deal_list"></div>')
      var rr=document.querySelectorAll('.list_s .deal_list')
      $(rr[j]).append('<div class="deal_list0"><p>BEST DEAL</p></div><div class="deal_list1">BEST DEAL</div>')
      // $(ds_mon[j]).append('<div class="deal_list1">BEST DEAL</div>')
      var price_t=`<p>${ramdomprice(4,7)}00000VND</p>`
      $(ds_mon[j]).append(price_t)
      
    }
  }
  dsmon();

  var list=document.querySelectorAll('#list_ .list_s')
  var list0=document.querySelectorAll('#list_ .list_s .deal_list .deal_list0')
  var list1=document.querySelectorAll('#list_ .list_s .deal_list .deal_list1')
  function hoverenter(h){
      $(list[h]).css({
        "transform":" translate(0,-10px)",
        "background":"red"
        
      })
      $(list0[h]).css({
        "background":"white",
        "width":"120px"
      })
  }
  function hoverout(h){
      $(list[h]).css({
        "transform":" translate(0,0)",
        "background":"#FFFFFF"
      })
      $(list0[h]).css({
        "background":"#AA0000",
        "width":"0"
      })
  }
  for(let h=0;h<list.length;h++){
      list[h].addEventListener("mouseenter",function(){
          hoverenter(h)
      })
      list[h].addEventListener("mouseleave",function(){
          hoverout(h)
      })
  }
  function sendsmit(){
    var modal_ct=".modal_ct .modal_box"
    var span=".modal_ct .modal_box .content span"
    var smit=document.querySelectorAll('.tt .send form input')
    $('#sendsmit').click(function(){
      event.preventDefault()
    })
    $('.close button').click(function(){
      $('.bgg').hide()
      $(modal_ct).toggleClass("shows")
    })
    
    function ret(){
      for(var i=0;i<smit.length-1;i++){
        if($(smit[i]).val() == ""){
          return i;
        }
      }
      return -1;
    }
    function err(j){
      for(j;j < smit.length-1;j++){
        $(smit[j]).css("border-color","red")
      }
      $('.bgg').show()
      $(modal_ct).toggleClass("shows")
      $(span).text("Please enter full infomation")
    }
    $('#sendsmit').click(function(){
      ret();
      if(ret()==-1){
        $('.bgg').show()
        $(modal_ct).toggleClass("shows")
        $(span).text("Comptele send messenger")
        var check=ret()
        for(var h=0;h < smit.length-1;h++){
          $(smit[h]).css("border-color","black")
        }
      }else{
        err(ret());
      }
    })
  }
  sendsmit();
  const widthHeaderr=65;
  function showHeaderM(){
    var heightheader=document.querySelector('div.headerr.skit')
    var headerrSkitNavv=document.querySelector('div.headerr.skit .navv')
    var headerrSkitlogo=document.querySelector('div.headerr.skit #logo')
    function navvshow(obj1,obj2,obj3){
      $(obj1).fadeToggle();
      $(obj2).fadeToggle("slow");
      $(obj3).fadeToggle(3000);
    }
    $(window).scroll(function(){
      if($(window).scrollTop() > 5){
        $(heightheader).css({
          "height":`${widthHeaderr}px`
        })
        $(headerrSkitNavv).css({
          "right":"0"
        })
        $(headerrSkitlogo).css({
          "top":"10px",
          "left":"10px",
          "width":"50px",
          "opacity":"1",
          "transform":"translateX(0)"
        })
        $('div.headerr').addClass("skit")
      }else{
        $(heightheader).css({
          "height":"100vh"
        })
        $(headerrSkitNavv).css({
          "right":"-150%"
        })
        $(headerrSkitlogo).css({
          "top":"15%",
          "left":"50%",
          "width":"400px",
          "opacity":"0.5",
          "transform":"translateX(-50%)"
        })
        $('div.headerr').removeClass("skit")
      }
    })
    $('.navbar .btn').click(function(){
      $('div.headerr').toggleClass("show_header_m")
    })
  }
  showHeaderM();

  function nav_ani(){
    var ani =document.querySelector('.nav_list .ani.move')
    var nis =document.querySelectorAll('.nav_list > li')
    function sett(j){
      const m=500*1/5
      var kt;
      var p=`${m}px`
      var left=m*(j)
      $(ani).css({
        "width":p,
        "left":left
      })     

    }
    for(let j=0;j<nis.length;j++){
      nis[j].addEventListener('mouseover',function(){
        sett(j)
      })
    }
  }
  nav_ani();
  function headerMeun(){
    var nis =document.querySelectorAll('.nav_list > li')
    var listProfile=document.querySelector('.nav_list li .list_hide_profile')
    var listMenu=document.querySelector('.nav_list li .list_hide_meun')
    var heightheader=document.querySelectorAll('div.headerr.skit')
    //hàm ẩn đi list menu
    function headerrHide65(obj){
      $(obj).css("display","none")
      $(heightheader).css({
        "height":`${widthHeaderr}px`
      })
      $('div.headerr').addClass("skit")
    }
    //hàm hiện list menu
    function headerrShowe65(obj,height){
      $(obj).css("display","block")
      $(heightheader).css({
        "height":`${height+widthHeaderr}px`
      })
      $('div.headerr').addClass("skit")
    }
    function setenter(j){
      if(j==1){
        headerrShowe65(listProfile,$(listProfile).height())
      }
      if(j==2){
        headerrShowe65(listMenu,$(listMenu).height())
      }
    }
    function setleave(j){
      if(j==1){
        headerrHide65(listProfile)
      }
      if(j==2){
        headerrHide65(listMenu)
      }
    }
    for(let j=0;j<nis.length;j++){
      nis[j].addEventListener('mouseenter',function(){
        setenter(j)
      })
      nis[j].addEventListener('mouseleave',function(){
        setleave(j)
      })
    }
  }
  headerMeun();
  function slider_mobile(){
    var slider=document.querySelectorAll('.sliders .tt')
    var dot=document.querySelectorAll('.dot .dots')
    var capl=document.querySelectorAll('.caption_left .caption_')
    var capr=document.querySelectorAll('.caption_right .caption_')
    var width=$(window).width()
    if(width <600){
      $('.slider .sliders').css({
        "width":width,
        "height":width
      })
      $('.slider .sliders .tt img').css({
        "width":width,
        "height":width
      })
      function setact(i){
        var m=`${i*-width}px`// width cua man hinh
        $(slider[0]).css({
            "margin-left":m
        })
        for(dots of dot){
            dots.classList.remove('act');
            dot[i].classList.add('act');
        }
        for(caps of capl){
          caps.classList.remove('act')
          capl[i].classList.add('act')
        }
        for(caps of capr){
          caps.classList.remove('act')
          capr[i].classList.add('act')
        }
      }
      for(let i=0;i<dot.length;i++){
        dot[i].addEventListener('click',function(){
            setact(i)
        })
      }
    }
  }
  slider_mobile();
});


