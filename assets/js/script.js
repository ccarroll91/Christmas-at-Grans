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

/*----------------------------------------------------------------about--*/

document.querySelector('#secret-btn').addEventListener('click', toggle);

function toggle(event) {
    if (document.getElementById('secret').style.display == 'none') {
    event.target.innerText = 
    `Want to know a secret?`;
    document.getElementById('secret').style.display = '';
  } else {
    event.target.innerText = 'Want to know a secret?';
    document.getElementById('secret').style.display = 'none';
  }
}

/*---------------------------------------------------audio*/
/*---- A simple audio function that allows the user to click on the chosen image and play an audio file--*/
/*---- Format for inserting audio into HTML element is - onclick="playAudio('#.mp3')"---*/
function playAudio(url) {
  new Audio(url).play().volume='.5';
}