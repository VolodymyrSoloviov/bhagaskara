$(function() {
	var div = $('.portfolio__list'),
			content = $('.button__text_portfolio');

	$('.button__link_portfolio').on('click', function(e){
		e.preventDefault();

		if(!div.hasClass('portfolio__list_active')) {
			div.addClass('portfolio__list_active');
			content.text("Watch less");
		}	else {
			div.removeClass('portfolio__list_active');
			content.text("Watch more");	
		}	
	});
});