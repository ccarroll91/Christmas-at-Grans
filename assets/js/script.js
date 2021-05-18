/*----------------------------------------------------------------dropdown--*/

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};

/*----------------------------------------------------------------carousel--*/

$(document).ready(function(){
 
  $("#myCarousel").carousel({wrap: false});  
  
  $(".left").click(function(){
    $("#myCarousel").carousel("prev");
  });
  $(".right").click(function(){
    $("#myCarousel").carousel("next");
  });
});

$('#myCarousel').on('slid', '');
$('#myCarousel').on('slid.bs.carousel', '');

$(document).ready(function(){
    checkitem();
});

function checkitem()
{
var $this = $('#myCarousel');
    if($('.carousel-inner .item:first').hasClass('active')) {
        $this.children('.left.carousel-control').hide();
        $this.children('.right.carousel-control').show();
    } else if($('.carousel-inner .item:last').hasClass('active')) {
        $this.children('.left.carousel-control').show();
        $this.children('.right.carousel-control').hide();
    } else {
        $this.children('.carousel-control').show();
    } 
}


/*----------------------------------------------------------------fullscreen--*/

var elem = document.getElementById("myCarousel");
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}

/*----------------------------------------------------------------secret--*/

function secretButton() {
  var x = document.getElementById("secret");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


/*---------------------------------------------------audio*/

document.getElementById('play1').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('audio1').play();
});

document.getElementById('play2').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('audio2').play();
});

document.getElementById('play3').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('audio3').play();
});

document.getElementById('play4').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('audio4').play();
});

document.getElementById('play5').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('audio5').play();
});

document.getElementById('play6').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('audio6').play();
});

document.getElementById('play7').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('audio7').play();
});

document.getElementById('play8').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('audio8').play();
});

document.getElementById('play9').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('audio9').play();
});

document.getElementById('play10').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('audio10').play();
});

document.getElementById('play11').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('audio11').play();
});

document.getElementById('play12').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('audio12').play();
});

document.getElementById('play13').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('audio13').play();
});

document.getElementById('play14').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('audio14').play();
});

document.getElementById('play15').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('audio15').play();
});

document.getElementById('play16').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('audio16').play();
});

document.getElementById('play17').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('audio17').play();
});

document.getElementById('play18').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('audio18').play();
});

document.getElementById('play19').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('audio19').play();
});

document.getElementById('play20').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('audio20').play();
});

document.getElementById('play21').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('audio21').play();
});

document.getElementById('play22').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('audio22').play();
});

document.getElementById('play23').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('audio23').play();
});

document.getElementById('play24').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('audio24').play();
});

document.getElementById('play25').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('audio25').play();
});

document.getElementById('play26').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('audio26').play();
});

document.getElementById('play27').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('audio27').play();
});

