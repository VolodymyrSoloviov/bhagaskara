$(function () {
  $('.menu').fancybox({
  	type : 'inline',
  	padding : 0
  });

  $('.menu__close, .menu__link, .logo__menu-link').on('click', function(e) {
    e.preventDefault();
    $.fancybox.close();
  });
});
