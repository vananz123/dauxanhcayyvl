$(document).ready(function(){
  function ramdomprice(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
  //header
  $('.btn').click(function(){
    $(this).toggleClass("click");
    $('.taskbar').toggleClass("show");
  });

  $(window).scroll(function(){
    if($(window).scrollTop() >=350){
      $('.gotop').addClass("show")
    }else{
      $('.gotop').removeClass("show")
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
  
  // $(window).scroll(function(){
  //   if($(window).scrollTop() >=3902 && $(window).scrollTop()<4290){
  //     animateNumber(4000, 1000, 0, function (number) {
  //       const formattedNumber = number.toLocaleString()
  //       $('#cups').text(formattedNumber+"+")
  //     })
  //     animateNumber(220, 1000, 0, function (number) {
  //       const formattedNumber = number.toLocaleString()
  //       $('#orderdays').text(formattedNumber+"+")
  //     })
  //     animateNumber(60, 1000, 0, function (number) {
  //       const formattedNumber = number.toLocaleString()
  //       $('#nhan_vien').text(formattedNumber)
  //     })
  //     animateNumber(40, 1000, 0, function (number) {
  //       const formattedNumber = number.toLocaleString()
  //       $('#at_hour').text(formattedNumber)
  //     })
  //   }
  // })
//foots
  var m=$('.foots.jq')
  for(var i=0;i<7;i++){
      m.append("<div>...</div>")
  }
  var or=document.querySelectorAll('div.order a')
//lsit list_ ds mon

  const so_mon=7 //số danh sach muốn tạo
  const namedisk=['cheesecake cà phê','cupcake cà phê','muffin cà phê','rau cau cà phê','cà phê ai len','sữa lắc cà phê','trà sữa cà phê']
  function dsmon(){
    var templist=document.querySelector('#list')//thẻ html muốn thêm 
    
    var dd=document.querySelectorAll('.bglist > p')
    for(var i=0;i<so_mon;i++){
    const temp=`
    <div class="list_">
        <div class="listImg">
          <img src="tai_nguyen/cake/cake_${i+1}.png"/>
          <div class="bglist"><p>${namedisk[i]}</p></div>
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
    `//temp là các thành phần html muốn thêm vào 
      templist.insertAdjacentHTML("beforeend",temp) //dùng insertAdjacentHTML để thêm vào beforeend là thêm vào sao

    }
   
  }
  dsmon();
  function findx(){
    $('.ss .ss_ > span').click(function(){
      var kw=$('#kw').val();
      var item =$('.listImg .bglist p')
      for(var i=0;i<item.length;i++){
        if($(item[i]).text().indexOf(kw) >= 0){
          console.log("oke")
          $(item[i]).parent().parent().css("border","3px solid black")
          $('html,body').scrollTop($('.list').offset().top)
        }
      }
      setTimeout(function(){
          var t=document.querySelectorAll('.listImg')
          for(var i=0;i<t.length;i++){
            $(t[i]).css("border","none")
          }
      },3000)
    })  
  }
  findx();
  
  function sendsmit(){
    const namesmit =$('#namesmit')
    const emailsmit=$('#emailsmit')
    function checkMessNull(obj){
      $(obj).css("border","1px solid red")
    }
    function checkMess(obj){
      $(obj).css("border","1px solid #9b9ba1")
    }
    function clear(obj,obj1,obj2){
      $(obj).val('')
      $(obj1).val('')
      $(obj2).val('')
    }
    $('#sendsmit').click(function(){
        event.preventDefault()
      })
    $('#sendsmit').click(function(){
      if($(namesmit).val() != "" && $(emailsmit).val() != ""){
        checkMess(namesmit)
        checkMess(emailsmit)
        if(confirm("Bạn chắc chắn muốn gửi email cho chúng tôi")==true){
          alert("Đã gửi")
          clear(namesmit,emailsmit,$('#sendmes'))
        }
      }else{
        alert("Vui lòng nhập đầy đủ thông tin")
        if($(namesmit).val() == ""){
          checkMessNull(namesmit)
        }else{
          checkMess(namesmit)
        }
        if($(emailsmit).val() == ""){
          checkMessNull(emailsmit)
        }else{
          checkMess(emailsmit)
        }
      }
    })
  }
  sendsmit();

  const widthHeaderr=50;
  function showHeaderM(){
    var headerrSkitlogo=document.querySelector('div.headerr #logo')
    function chuyenlogo(obj,right,width){
      if(width <=1024){
        $(obj).css({
          "left":"unset",
          "right":`${right}px`
        })
      }else{
        $(obj).css({
          "right":"unset",
          "left":`${right}px`
        })
      }
    }
    const widthM=$(window).width();
    chuyenlogo(headerrSkitlogo,0,widthM);
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
    }
    //hàm hiện list menu
    function headerrShowe65(obj,height){
      $(obj).show()
      $(heightheader).css({
        "height":`${height+widthHeaderr}px`
      })
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
    function setleave(){
      headerrHide65(listProfile)
      headerrHide65(listMenu)
      headerrHide65(listNews)
    }
    for(let j=0;j<nis.length;j++){
      nis[j].addEventListener('mouseenter',function(){
        setenter(j)
      })
      nis[j].addEventListener('mouseleave',function(){
        setleave();
      })
    }
  }
  headerMeun();
  function navbarMoblie(){
    var width=$(window).width()
    var navbar=document.querySelectorAll('div.navbar')
    var heightheader=document.querySelector('div.headerr')
    var btnNavbar=document.querySelectorAll('#btnNavbar')
    function showNavbar(navbar,width){
      if(width <= 1024){
        $(navbar).show();
      }
    }
    showNavbar(navbar,width);
    if(width <=1024){
      $('body').css("background-image","unset")
      var gggg=document.querySelectorAll('.navbarshape > div > a')
      $(gggg).click(function(){
        $(heightheader).css({
          "height":`${widthHeaderr}px`
        })
      })
      $(btnNavbar).click(function(){
        if($(heightheader).height()>65){
          $(heightheader).css({
            "height":`${widthHeaderr}px`,
            "overflow":"hidden"
          })
        }else{
          $(heightheader).css("overflow","unset")
          $(heightheader).css({
            "height":"100vh",
            "overflow-y":"auto"
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
  function navbarMbtn(){
    var btnli=document.querySelectorAll('ul.task-item li')
    var downM=document.querySelectorAll('div.navbarshape')
    function setbtn(j){
      $(downM[j-2]).toggleClass("show")//do bo đi phàn title vo trang chủ nen tru 2
    }
    for(let j=0;j< btnli.length;j++){
      btnli[j].addEventListener('click',function(){
        setbtn(j)
      })
    }
  }
  navbarMbtn();

  function animateWow(){
    $("div.devBlogS").addClass("wow animate__slideInLeft")
    $("div.devBlogT").addClass("wow animate__slideInRight")
    $("div.recritment").addClass("wow animate__slideInLeft")
    $("div.aboutUs").addClass("wow animate__slideInRight")
    $("div.rrTitle").addClass("wow animate__slideInLeft")
    wow = new WOW(
      {
      boxClass:     'wow',      // default
      animateClass: 'animate__animated', // default
      offset:       0,          // default
      mobile:       true,       // default
      live:         true        // default
    }
    )
    wow.init();
  }
  animateWow();
});



