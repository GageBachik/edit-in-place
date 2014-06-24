$(function() {

	$('.box-static').on('click', function(){
		var currentText = $(this).text();
		$(this).toggle();
		$('.box-editable textarea').text(currentText);
		$('.box-editable').toggle();
	});

	$('.save').on('click', function(){
		var currentText = $('.box-editable textarea').val();
		$('.box-static').text(currentText);
		$('.box-static').toggle();
		$('.box-editable').toggle();
	});

	$('.cancel').on('click', function(){
		$('.box-static').toggle();
		$('.box-editable').toggle();
	});

	$('.box-editable textarea').keyup(function(e) {
		if(e.keyCode === 13) {
			var currentText = $('.box-editable textarea').val();
			$('.box-static').text(currentText);
			$('.box-static').toggle();
			$('.box-editable').toggle();
		}
	});

});