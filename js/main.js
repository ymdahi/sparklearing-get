var siteNameLineHeight = $('.nav-logo svg').height() + 'px';
$('.nav-logo h1.site-name').css('line-height',siteNameLineHeight);

// slick slider
$(document).ready(function(){
  $('.slider-region').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
  });
});
$(document).ready(function(){
  $('.main-slider-region').slick({
    arrows: false,
    dots: true,
    autoplay: false,
    autoplaySpeed: 5000,
  });
});


// nav
$('.main-menu-button').click(function(){
  $('.off-canvas').css('width','250px');
  $('#main-wrapper').css('margin-left','250px');
  $('body').css('background-color','rgba(0,0,0,0.4)');
});
function closeNav() {
  $('.off-canvas').css('width','0px');
  $('#main-wrapper').css('margin-left','0px');
  $('body').css('background-color','#d9d9d9');
}

// match height
$('.featured-item').matchHeight();

// print current year for footer
var dteNow = new Date();
var intYear = dteNow.getFullYear();
$('.year').text(intYear);
