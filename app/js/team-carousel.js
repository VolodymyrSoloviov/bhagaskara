$(function() {
	var owl = $(".team__list").owlCarousel({
		items: 3,
		loop: true
	});

	$('.team__btn-right').click(function(e) {
		e.preventDefault();
    owl.trigger('next.owl.carousel');
	});

	$('.team__btn-left').click(function(e) {
		e.preventDefault();
    owl.trigger('prev.owl.carousel');
	});
});
