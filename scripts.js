$(document).ready(function(){
  function ramdomprice(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
  //header
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

//foots
  var m=$('.foots.jq')
  for(var i=0;i<7;i++){
      m.append("<div>...</div>")
  }
  var or=document.querySelectorAll('div.order a')
//lsit list_ ds mon

  const so_mon=7 //số danh sach muốn tạo
  const namedisk=['cheesecake cà phê','cupcake cà phê','muffin cà phê','rau cau cà phê','cà phê ai len','sữa lắc cà phê','trà sữa cà phê']
  const pricedisk=[10,10,10,10,10,10,10,10,10,10]
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
          <div class="bglist_c fas fa-cart-plus"></div>
        </div>
      <div class="deal_list">
        <p>${pricedisk[i]}.000Đ</p>
      </div>
    </div>
    `//temp là các thành phần html muốn thêm vào 
      templist.insertAdjacentHTML("beforeend",temp) //dùng insertAdjacentHTML để thêm vào beforeend là thêm vào sao

    }
   
  }
  dsmon();
  function findx(){
    const kw=$('#kw'); //thẻ input
    var item =$('.listImg .bglist p') //thể p muốn tím

    function findItem(){ // thay hàm tương ứng
      for(var i=0;i<item.length;i++){
        if($(item[i]).text().indexOf(kw.val()) >= 0){
          $(item[i]).parent().parent().css("border","3px solid black")
          $('html,body').scrollTop($('.list').offset().top)
        }
      }
    }
    function setTime(){ //thay hàm tương ứng
      setTimeout(function(){
        var t=document.querySelectorAll('.listImg')
        for(var i=0;i<t.length;i++){
          $(t[i]).css("border","none")
        }
    },3000)
    }
    $('div.xclode').click( ()=>{
      kw.val("")
    })
    $('.ss .ss_ > span').click(function(){
      findItem();
      setTime();
      
    })  
    $('#kw').keypress(function(event){
      var keycode = (event.keyCode ? event.keyCode : event.which);
      if (keycode == '13') {
        findItem();
        setTime();
      }
    });
    
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
          if($(emailsmit).val().indexOf("@") == -1 || $(emailsmit).val().indexOf("@") == 0){
            alert("Sai cú pháp mail")
            checkMessNull(emailsmit)
          }else{
            alert("Đã gửi")
            clear(namesmit,emailsmit,$('#sendmes'))
          }
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
  // function showHeaderM(){
  //   var headerrSkitlogo=document.querySelector('div.headerr #logo')
  //   function chuyenlogo(obj,right,width){
  //     if(width <=1024){
  //       $(obj).css({
  //         "left":"unset",
  //         "right":`${right}px`
  //       })
  //     }else{
  //       $(obj).css({
  //         "right":"unset",
  //         "left":`${right}px`
  //       })
  //     }
  //   }
  //   const widthM=$(window).width();
  //   chuyenlogo(headerrSkitlogo,0,widthM);
  // }
  // showHeaderM();
  

  function nav_ani(){
    var ani =document.querySelector('.nav_list .ani.move')
    var nis =document.querySelectorAll('.nav_list > li')
    
    var widthNav_list=$('.nav_list').width()
    function sett(j){
      const m=widthNav_list*1/(nis.length) // width là 500 mỗi phần tử cần 100px lap 1/5
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
    var heightheader=document.querySelectorAll('div.headerr')
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
      const m=$(nis[j]).children(".meunshape")
      headerrShowe65(m,$(m).height())
    }
    function setleave(){
      const m=$(nis).children(".meunshape")
      headerrHide65(m)
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

  function navbarMoblie(){ //hàm của Mobile
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
    const store =document.querySelectorAll('.store')
    $(btnRe).click(function(){
      $(store).children(".recritment").toggleClass("showRe")
    })
    $(btnAb).click(function(){
      $(store).children(".aboutUs").toggleClass("showRe")
    })
  }
  stores();
  
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

    $("div.devBlogS.dev2").addClass("wow animate__slideInLeft")
    $("div.devBlogS.dev3").addClass("wow animate__slideInRight")
    $("div.recritment").addClass("wow animate__slideInLeft")
    $("div.aboutUs").addClass("wow animate__slideInRight")
    $("div.rrTitle").addClass("wow animate__slideInLeft")
    $('div.slider').addClass("wow animate__slideInUp")
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
    function numberTIme(){
      var cups=null;
    var orderdays=null;
    var nhan_vien=null;
    var at_hour=null;
    $(window).scroll(function(){
      if($(window).scrollTop() >=3901){
        
        if(cups===null){
          animateNumber(4000, 1000, 0, function (number) {
            cups = number.toLocaleString()
            $('#cups').text(cups+"+")
          })
        }
        if(orderdays===null){
          animateNumber(220, 1000, 0, function (number) {
            orderdays = number.toLocaleString()
            $('#orderdays').text(orderdays+"+")
          })
        }
        if(nhan_vien===null){
          animateNumber(60, 1000, 0, function (number) {
            nhan_vien = number.toLocaleString()
           $('#nhan_vien').text(nhan_vien)
         })
        }
        if(at_hour===null){
          animateNumber(40, 1000, 0, function (number) {
            at_hour = number.toLocaleString()
           $('#at_hour').text(at_hour)
         })
        }
      }
    })
    }
    numberTIme();
    $(".btnShopping").click(function(){
      $("div.shopBar").toggleClass("show");
    })
    function AddShoping(){
      const soMon =document.querySelectorAll("div.bglist_c");
      const tAdd=document.querySelector("div.shoBarCon");
      for(let i=0;i<soMon.length;i++){
        $(soMon[i]).click(()=>{
          
          const t =`<div class="shopItem">
          <img src="${$(soMon[i]).parent().children(0).attr("src")}"/>
          <div>
            <p>${namedisk[i]}</p>
            <p>${pricedisk[i]}.000Đ</p>
          </div>
          <div class="shopX">
            <i class="fas fa-times"></i>
          </div>
        </div>`
          tAdd.insertAdjacentHTML("afterbegin",t);
        })
      }
      $(tAdd).on("click", "div.shopItem div.shopX i", function() {
        $(this).parent().parent().remove()
      })
    }
    AddShoping();
});



