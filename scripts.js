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
  // $('.gotop').click(function(){
  //   $('html,body').animate({
  //     scrollTop:0
  //   },1800)
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
              "transform":"scale(0.8)"
          })
      },
      mouseleave: function() {
          $(this).css({
            "transform":"scale(1)"
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
            items:3
        },
        1000:{
            items:3
        }
    }
  });
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
    if($(window).scrollTop() >=3902 && $(window).scrollTop()<4290){
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

  const so_mon=7
  function dsmon(){
    var templist=document.querySelector('#list')
    for(var i=0;i<so_mon;i++){
    const temp=`
    <div class="list_">
        <div class="listImg">
          <img src="tai_nguyen/cake/cake_${i+1}.png"/>
          <div class="bglist"><p>san pham moi!</p></div>
          <div class="bglistTitle">
            <p>new !</P>
          </div>
          <a href="trang1.html">
            <div class="bglist_c fas fa-cart-plus"></div>
          </a>
        </div>
      <div class="deal_list">
        <p>${ramdomprice(4,7)}0.000Đ</p>
      </div>
    </div>
    `
      templist.insertAdjacentHTML("beforeend",temp)
    }
  }
  dsmon();
  
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

  const widthHeaderr=60;
  function showHeaderM(){
    var heightheader=document.querySelector('div.headerr.skit')
    var showopac=document.querySelector('nav.navv')
    var headerrSkitlogo=document.querySelector('div.headerr.skit #logo')
    function chuyenlogo(obj,top,left,width){
      $(obj).css({
        "top":`${top}px`,
        "left":`${left}px`,
        "width":`${width}px`,
        "opacity":"1",
        "transform":"translateX(0)"
      })
    }
    if($(window).width()<=1024){
      $(heightheader).css({
        "height":`50px`
      })
      chuyenlogo(headerrSkitlogo,0,0,50);
      $('div.headerr').addClass("skit")
    }else{
      $(window).scroll(function(){
        if($(window).scrollTop() > 5){
          $('#wall').css("opacity","0")
          $(heightheader).css({
            "height":`${widthHeaderr}px`
          })
          $(showopac).css({
            "opacity":"1"
          })

          chuyenlogo(headerrSkitlogo,2,0,60);
          $('div.headerr').addClass("skit")
        }else{
          $('#wall').css("opacity","1")
          $(heightheader).css({
            "height":"100vh"
          })
          $(showopac).css({
            "opacity":"0"
          })
          $(headerrSkitlogo).css({
            "top":"0",
            "left":"50%",
            "width":"600px",
            "opacity":"0.8",
            "transform":"translate(-50%,-25px)"
          })
          $('div.headerr').removeClass("skit")
        }
      })
    }
  }
  showHeaderM();

  function nav_ani(){
    var ani =document.querySelector('.nav_list .ani.move')
    var nis =document.querySelectorAll('.nav_list > li')
    var widthNav_list=$('.nav_list').width()
    function sett(j){
      const m=widthNav_list*1/5
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
    var listNews=document.querySelector('.nav_list li .list_hide_news')
    var heightheader=document.querySelectorAll('div.headerr.skit')
    //hàm ẩn đi list menu
    function headerrHide65(obj){
      $(obj).hide()
      $(heightheader).css({
        "height":`${widthHeaderr}px`
      })
      $('div.headerr').addClass("skit")
    }
    //hàm hiện list menu
    function headerrShowe65(obj,height){
      $(obj).show()
      $(heightheader).css({
        "height":`${height+widthHeaderr-5}px`
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
      if(j==3){
        headerrShowe65(listNews,$(listNews).height())
      }
    }
    function setleave(j){
      if(j==1){
        headerrHide65(listProfile)
      }
      if(j==2){
        headerrHide65(listMenu)
      }
      if(j==3){
        headerrHide65(listNews)
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
  
  function navbarMoblie(){
    var width=$(window).width()
    var navbar=document.querySelectorAll('div.navbar')
    var heightheader=document.querySelector('div.headerr.skit')
    var btnNavbar=document.querySelectorAll('#btnNavbar')
    function showNavbar(navbar,width){
      if(width <= 1024){
        $(navbar).show()
      }
    }
    showNavbar(navbar,width)
    if(width <=1024 && width >500){
      $(btnNavbar).click(function(){
        if($(heightheader).height()>65){
          $(heightheader).css({
            "height":`${widthHeaderr}px`
          })
        }else{
          $(heightheader).css({
            "height":"100vh"
          })
        }
      })
    }
    if(width <=500){
      $(btnNavbar).click(function(){
        if($(heightheader).height()>65){
          $(heightheader).css({
            "height":`${widthHeaderr-10}px`
          })
        }else{
          $(heightheader).css({
            "height":"100vh"
          })
        }
      })
    }
  }
  navbarMoblie();
  function stores(){
    var btnRe=document.querySelector('.recritmentTitle')
    var btnAb=document.querySelector('.aboutUsTitle')
    var storeRe=document.querySelector('.store .recritment')
    var storeAs=document.querySelector('.store .aboutUs')
    $(btnRe).click(function(){
      $(storeRe).toggleClass("showRe")
    })
    $(btnAb).click(function(){
      $(storeAs).toggleClass("showRe")
    })
  }
  stores();
  const img=document.querySelectorAll('.tt > img');
  function sliderBox(obj){
    obj.forEach((item) => item.addEventListener("click",sliderzoom));
    function sliderzoom(event){
      const imgsrc=event.target.getAttribute("src")
      console.log(imgsrc)
      const templ=
      `<div class="sliderBox">
          <div>
            <i class="fas fa-angle-left sliderBox_p"></i>
          </div>
          <div class="slideBox_content">
            <img src="${imgsrc}" class="slider_img"/>
          </div>
          <div>
            <i class="fas fa-angle-right sliderBox_n"></i>
          </div>
        </div>`;
        document.body.insertAdjacentHTML("beforeend",templ);
    }
    let index=0;
    document.body.addEventListener("click",function(event){
      const sliderimg=document.querySelector(".slideBox_content img")
      let slidersrc="";
      if(event.target.matches(".sliderBox")){
        event.target.parentNode.removeChild(event.target)
      }else if(event.target.matches(".sliderBox_n")){
        slidersrc=sliderimg.getAttribute("src")
        index=[...obj].findIndex(item => item.getAttribute("src")===slidersrc);  
        index=index +1;
        
        if(index > obj.length-1){
          index=0;
        }
        const newsrc=[...obj][index].getAttribute("src")
        sliderimg.setAttribute("src",newsrc)
      }else if(event.target.matches(".sliderBox_p")){
        slidersrc=sliderimg.getAttribute("src")
        index=[...obj].findIndex(item => item.getAttribute("src")===slidersrc);  
        index=index - 1;
        
        if(index < 0){
          index=obj.length-1;
        }
        const newsrc=[...obj][index].getAttribute("src")
        sliderimg.setAttribute("src",newsrc)
      }
    })
    
  }
  sliderBox(img);
});


