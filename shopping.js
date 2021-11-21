$(document).ready(function(){
    const SO_CAKE=6 //số danh sach muốn tạo
    const SO_GOI_CAFE=3;
    const SO_CAFE=6;
    const namedisk=['cheesecake cà phê','cupcake cà phê','muffin cà phê','kem cà phê','kem cà phê sữa','bánh mì cà phê']
    const priceDisk=[50,50,70,40,50,60]
    const nameDrink=['cà phê tiramisu','cà phê ai len','pubbing cà phê','sữa lắc cà phê','trà sữa cà phê','cà phê mocha']
    const priceDirnk=[50,50,70,40,50,50,50]
    const nameCoffeeBeans =["Euta cafe","Cà phê Kimbo","Cà phê thái nguyên"];
    const priceBeans=[200,300,250]
   
    function dsmon(){
      var templist=document.querySelector('#list')
      var templist1=document.querySelector('#list1')
      var templist2=document.querySelector('#list2')
      for(var i=0;i<SO_CAKE;i++){
        const temp=`
        <div class="list_">
            <div class="listImg">
              <img src="tai_nguyen/cake/cake_${i+1}.png"/>
              <div class="bglist"><p>${namedisk[i]}</p></div>
              <div class="bglistTitle">
                <p>new !</P>
              </div>
              <div class="bglist_c fas fa-cart-plus"></div>
              <div class="deal_list">
                <p>
                <span>${priceDirnk[i]}.000</span><sup>đ</sup>
                </p>
              </div>
            </div>
        </div>
        `//temp là các thành phần html muốn thêm vào 
        templist.insertAdjacentHTML("beforeend",temp) //dùng insertAdjacentHTML để thêm vào beforeend là thêm vào sao
      }
      for(var i=0;i<SO_CAFE;i++){
        const temp=`
        <div class="list_">
            <div class="listImg">
              <img src="tai_nguyen/coffee/cafe_${i+1}.png"/>
              <div class="bglist"><p>${nameDrink[i]}</p></div>
              <div class="bglistTitle">
                <p>new !</P>
              </div>
              <div class="bglist_c fas fa-cart-plus"></div>
              <div class="deal_list">
                <p>
                <span>${priceDisk[i]}.000</span><sup>đ</sup>
                </p>
              </div>
            </div>
        </div>
        `
        templist1.insertAdjacentHTML("beforeend",temp) 
      }
      for(var i=0;i<SO_GOI_CAFE;i++){
        const temp=`
        <div class="list_">
            <div class="listImg">
              <img src="tai_nguyen/goicafe/goi_cafe_${i+1}.png"/>
              <div class="bglist"><p>${nameCoffeeBeans[i]}</p></div>
              <div class="bglistTitle">
                <p>new !</P>
              </div>
              <div class="bglist_c fas fa-cart-plus"></div>
              <div class="deal_list">
                <p>
                <span>${priceBeans[i]}.000</span><sup>đ</sup>
                </p>
              </div>
            </div>
          
        </div>
        `//temp là các thành phần html muốn thêm vào 
        templist2.insertAdjacentHTML("beforeend",temp) //dùng insertAdjacentHTML để thêm vào beforeend là thêm vào sao
      }
     
    }
    dsmon();
    const btnAdd =document.querySelectorAll("div.bglist_c");
    btnAdd.forEach(function(shopAdd,index){
      shopAdd.addEventListener("click",function(e){{
        var btnItem =e.target
        var product =btnItem.parentElement
        var productImg =product.querySelector("img").src;
        var productName =product.querySelector("div.bglist > p").innerText;
        var productPrice =product.querySelector("div.deal_list span").innerText;
        addListProduct(productImg,productName,productPrice);
        
      }})
    })
    
    function addListProduct(productImg,productName,productPrice){
      const tAdd=document.querySelector("div.shoBarCon");
      const t =`
          <div class="shopItem">
            <img src="${productImg}"/>
            <div class="titleItem">
              <p class="nameItem">${productName}</p>
              <p class="priceItem"><span>${productPrice}</span><sup>đ</sup></p>
            </div>
            <div class="shopX">
              <i class="fas fa-times"></i>
            </div>
            <div class="shopAdd">
              <span>Số lượng: </span>
              <input type="number" value="1" min="0"/>
            </div>
          </div>`
      let ck=checkAdd(productName)
      if(ck!= -1){
        addInput(ck);
      }else{
        tAdd.insertAdjacentHTML("afterbegin",t);
      }
      sumTotal();
      inputChange();
      const btnDel =document.querySelectorAll("div.shopItem .shopX");
      btnDel.forEach(function(btnDel,index){
        btnDel.addEventListener("click",function(e){{
          deleteShop(e.target);
        }})
      })
      resetBtn();
    }
    function resetBtn(){
      const allPrice =document.querySelectorAll("div.shoBarCon .shopItem");
      const btn =document.querySelector("div.btnShopping p");
      btn.innerText=allPrice.length;
    }
    function deleteShop(del){
      $(del).parent().parent().remove();
      sumTotal();
      resetBtn();
    }
    function sumTotal(){
      const allPrice =document.querySelectorAll("div.shoBarCon .shopItem");
      var toTal =0;
      for(let i=0;i<allPrice.length;i++){
        var toTal1=parseInt(allPrice[i].querySelector("div.titleItem .priceItem span").innerHTML);
        var toTal2=parseInt(allPrice[i].querySelector("input").value);
        var total3 =toTal1*toTal2;
        toTal +=total3;
      }
      const sumTotal=document.querySelector("#sumPrice")
      sumTotal.innerText=`${toTal}.000`
      console.log(toTal);
    }
    function checkAdd(productName){
      const check=document.querySelectorAll("div.shopItem .titleItem .nameItem");
      for(let i=0;i<check.length;i++){
        if(check[i].innerText ==productName){
          return i
        }
      }
      return -1;
    }
    function inputChange(){
      const allPrice =document.querySelectorAll("div.shoBarCon .shopItem");
      for(let i=0;i<allPrice.length;i++){
        var input=allPrice[i].querySelector("input");
        input.addEventListener("change",function(){
          sumTotal();
          checkInput();
        })
      }
    }
    function checkInput(){
      const allPrice =document.querySelectorAll("div.shoBarCon .shopItem");
      for(let i=0;i<allPrice.length;i++){
        var inDel=allPrice[i].querySelector("input");
        var input=allPrice[i].querySelector("input").value;
        if(input=="0"){
          deleteShop(inDel);
        }
      }
    }
    function addInput(e){
      const allPrice =document.querySelectorAll("div.shoBarCon .shopItem");
      var inDel=allPrice[e].querySelector("input");
      var input=allPrice[e].querySelector("input").value;
      input =parseInt(input)+1;
      inDel.value =input;
    }
})