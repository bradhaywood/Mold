$(function() {
  $('a.nav-toggle').click(function() {
    $('ul.nav').toggle();
  });

  $('a.nav-toggle').blur(function() {
    $('ul.nav').toggle();
  });
});
