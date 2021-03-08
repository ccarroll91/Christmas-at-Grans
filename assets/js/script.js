$(document).ready(function(){
 

  $(".item1").click(function(){
    $("#myCarousel").carousel(0);
  });
  $(".item2").click(function(){
    $("#myCarousel").carousel(1);
  });
  $(".item3").click(function(){
    $("#myCarousel").carousel(2);
  });
  $(".item4").click(function(){
    $("#myCarousel").carousel(3);
  });
        
  $("#myCarousel").carousel({wrap: false});

  $(".left").click(function(){
    $("#myCarousel").carousel("prev");
  });
  $(".right").click(function(){
    $("#myCarousel").carousel("next");
  });
});

console.log("myCarousel")

$('#myCarousel').on('slid', '', checkitem);
$('#myCarousel').on('slid.bs.carousel', '', checkitem);

$(document).ready(function(){
    checkitem();
});

