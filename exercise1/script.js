$('form').submit(function(){

	if ($('input').val() !== ''){
		var input_value = $('input').val();
		$('ul').append('<li>' + input_value + '</li>');
	};

	$('input').val('');
	return false;
	
});

$(document).on('click', 'li', function(e){
	$(this).addClass('colorize');
});

// $('ul').on('click', funciton(e) {
// 	console.dir(e)
	
// });
	
// $(document).on('click', 'li', function(e){
// 	if ($(this).css('color: red'){
// 		alert('this one is red')
// 	});
// });


