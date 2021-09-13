$(document).ready(function(){
    var item=document.querySelectorAll('.items .item')
    var itemlk=document.querySelectorAll('.items .item > a')
    const imgsrc=document.querySelectorAll('#imgsrc')
    var name2=document.getElementById('#imgnew')
    const imgN
    function setimg(i){
        imgN =imgsrc[i].getAttribute("src")
        $('img#imgnew').attr('src',imgsrc[i].getAttribute("src"))
    }
    for(let i=0;i<item.length;i++){
        
        $(item[i]).click(function(){
            setimg(i)
        })
    }
    $('img#imgnew').attr('src',imgN)
})