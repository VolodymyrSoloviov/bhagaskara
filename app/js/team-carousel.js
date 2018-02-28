$(function() {
	var owl = $(".team__list").owlCarousel({
		items: 3,
		loop: true,
		responsive: {
			0: {
				items : 1
			},
			460: {
				items: 1,
			},
			730: {
				items : 2
			},
			950: {
				items: 3
			}
		}

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
