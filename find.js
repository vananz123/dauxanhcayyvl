$(document).ready(function(){
    function findItem(){ // thay hàm tương ứng
        const kw=$('#kw').val().toLowerCase(); //thẻ input
        if(kw!=""){
            const item =document.querySelectorAll("div.listImg .bglist >p")//thể p muốn tím
            for(var i=0;i<item.length;i++){
                if($(item[i]).text().toLowerCase().indexOf(kw) >= 0){
                console.log("tim thay");
                $(item[i]).parent().parent().css("border","3px solid black")
                $('html,body').scrollTop($('.list').offset().top)
                }
            }
        }
    }
    function setTime(){ //thay hàm tương ứng
        setTimeout(function(){
            var t=document.querySelectorAll('div.listImg')
            for(var i=0;i<t.length;i++){
            $(t[i]).css("border","none")
            }
        },3000)
    }
    $('div.xclode').click( ()=>{
        const kw=$('#kw')
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

})