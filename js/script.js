(function() {
  "use strict";
  var toggles = document.querySelectorAll('.menu-open');
  var open = document.querySelector('.menu__hidden');
  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };

  function toggleHandler(toggle) {
    toggle.addEventListener("click", function(e) {
      e.preventDefault();
      open.classList.toggle('menu-hide');
      (this.classList.contains("is-active") === true) ? this.classList.remove("is-active"): this.classList.add("is-active");
    });
  }
})();

var scrolled;
window.onscroll = function() {
    scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if(scrolled > 5){
        $(".menu__fixed").css({"background": "#ffffff"}).css({"box-shadow": "0px 4px 20px rgba(0, 0, 0, 0.1)"});
        $(".menu__logo").css({"background": "#ffffff"});
    }
    if(5 > scrolled){
        $(".menu__fixed").css({"background": "none"}).css({"box-shadow": "none"});
        $(".menu__logo").css({"background": "none"});
    }
};

$(document).ready(function(){
  $('.comments__lists').slick({
    dots: true,
  });
});

$('#content-1').click(function(){
  $('#label-1').click()
});

$('#content-2').click(function(){
  $('#label-2').click()
});

$('#content-3').click(function(){
  $('#label-3').click()
});

$('#content-4').click(function(){
  $('#label-4').click()
});

jQuery(function($) {
  $("#phone").mask("+7(999) 999-99-99");
});

jQuery(function($) {
  $("#phone-start").mask("+7(999) 999-99-99");
});

$("#email").blur(function() {
  var email = $(this).val();
  var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
});
