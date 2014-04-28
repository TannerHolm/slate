$(document).ready(function() {
	$('.box-product > div .image').hover(function () {
		$(this).fadeTo('fast', '0.8', function () {
			$(this).fadeTo('fast', '0.9');
		});
	}, function () {
		$(this).fadeTo('fast', '1.0');
	});

	$('.button').button();

});