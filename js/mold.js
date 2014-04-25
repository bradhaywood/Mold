$(function() {
  /* nav menu functionality */
  var menu = $('.menu');
  $('.toggle').click(function() {
      menu.slideToggle();
      if (menu.css("opacity") != 1)
        menu.css("opacity", 1);
  });

  window.addEventListener('resize', function(event){
    if (window.innerWidth > 481) {
      if (menu.css("display") != "block")
        menu.css("display", "block");
    }
  });
});
