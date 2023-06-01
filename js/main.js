$(function() {
  $(".spanirlod").toggle(1000, function() {
    $("body").css({ overflow: "auto" });
  });
});
const counters = document.querySelectorAll('.value');
const speed =1000;
counters.forEach( counter => {
   const animate = () => {
      const value = +counter.getAttribute('akhi');
      const data = +counter.innerText;
     
      const time = value / speed;
     if(data < value) {
          counter.innerText = Math.ceil(data + time);
          setTimeout(animate, 1);
        }else{
          counter.innerText = value;
        }
     
   }
   
   animate();
});
const counters1 = document.querySelectorAll('.value2');
const speed1 =1000;
counters1.forEach( counter => {
   const animate1 = () => {
      const value = +counter.getAttribute('aknum');
      const data = +counter.innerText;
     
      const time = value / speed1;
     if(data < value) {
          counter.innerText = Math.ceil(data + time);
          setTimeout(animate1, 1);
        }else{
          counter.innerText = value;
        }
     
   }
   
   animate1();
});
let showData = new Date()
let displaydata = showData.getFullYear();
document.querySelector(".cont-foot").innerHTML=`Copyright ${displaydata}. All rights reserved.`
$(".arrow-Up").fadeOut()

window.onscroll=()=>
{

    if(scrollY>=20)
    {
        $(".navbar").addClass("fixed-top");
        $(".arrow-Up").fadeIn(100)

    }   
     
    else
    {
          $(".navbar").removeClass("fixed-top");
          $(".arrow-Up").fadeOut(100)

    }
  }
  $(".icon-up").click(()=>{
    $("body,html").animate({scrollTop:"0"})
  })
  // $(".arrow-Up").fadeOut()
  // window.onscroll=()=>{
  //   if(scrollY>=300)
  //   {
  //      $(".arrow-Up").fadeIn(100)
  //   }
  //   else
  //   {
  //     $(".arrow-Up").fadeOut(100)
  //   }
  // }
   
  new WOW().init();
