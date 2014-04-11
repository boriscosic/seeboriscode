$(function(){
	$(document).foundation().foundation('reveal', {animationSpeed:0});

	// disables open tabs from closing on itself.
	$('section p.title, section p.title a').click(function(e) {
		if($(this).closest('section').find('.content').is(':visible')) {
			e.stopPropagation();
		}
	});

	// hook up next step
	$('.cta-existing-contract, .cta-new-contract, .cta-finish-order').on('click', function(e) {
		e.preventDefault();
		$('.step-1, .step-2, .step-3').hide();
		$('.phone-history').hide();

		if($(this).hasClass('cta-existing-contract')) {
			$('.phone-history, .step-2').show();
		}
		else if($(this).hasClass('cta-new-contract')) {
			$('.step-2').show();
			$('.alert-box.success').hide();
		}
		else if($(this).hasClass('cta-finish-order')) {
			$('.step-3').show();
			$('#orderModal').foundation('reveal','close');
		}
	});
});