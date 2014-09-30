
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



$('button').on("click", function(){
	//grab data from form
	var data = $('input').val();
	console.log(data)
	//make new li and append it to ul
	var li = "<li>" + data + "</li>"
	$('ul').append(li);
	//clear the form
	$('input').val('');
});

