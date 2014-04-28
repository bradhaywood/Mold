$(function() {
  /* Nav stuff */
  var ulNav = $('ul.nav'),
      navToggle = $('a.nav-toggle');

  navToggle.click(function() {
    ulNav.toggle();
  });

  navToggle.blur(function() {
    ulNav.toggle();
  });
});
