$(document).ready(function(){


	$('input[type=range]').on('input', function(){
		 inputType = $(this).attr('id');
		 inputValue = $(this).val();

		 if (inputType == 'rdct'){
		 	$('#face').css('--leet-axis', inputValue);
		 }else{
		 	$('#face').css('--mouth-axis', inputValue);
		 }

	});

	$('#play').click(function(){
		$('#face').toggleClass('animated');
	});

});
	