var scrolled;!function(){"use strict";for(var n=document.querySelectorAll(".menu-open"),c=document.querySelector(".menu__hidden"),e=n.length-1;0<=e;e--){var o=n[e];o.addEventListener("click",function(n){n.preventDefault(),c.classList.toggle("menu-hide"),!0===this.classList.contains("is-active")?this.classList.remove("is-active"):this.classList.add("is-active")})}}(),window.onscroll=function(){5<(scrolled=window.pageYOffset||document.documentElement.scrollTop)&&($(".menu__fixed").css({background:"#ffffff"}).css({"box-shadow":"0px 4px 20px rgba(0, 0, 0, 0.1)"}),$(".menu__logo").css({background:"#ffffff"})),scrolled<5&&($(".menu__fixed").css({background:"none"}).css({"box-shadow":"none"}),$(".menu__logo").css({background:"none"}))},$(document).ready(function(){$(".comments__lists").slick({dots:!0})}),$("#content-1").click(function(){$("#label-1").click()}),$("#content-2").click(function(){$("#label-2").click()}),$("#content-3").click(function(){$("#label-3").click()}),$("#content-4").click(function(){$("#label-4").click()}),jQuery(function(n){n("#phone").mask("+7(999) 999-99-99")}),jQuery(function(n){n("#phone-start").mask("+7(999) 999-99-99")}),$("#email").blur(function(){$(this).val()});
