// call loadMessages fn
Chatty.loadMessages();
var user;

// choose a user
$('.user').on('click', function() {
	user = $(this).val();
})

// add user message on enter keypress
$('#text-input').on('keyup', function(event){
	if (event.which === 13) {
		if (user) {
			Chatty.addMessage($(this).val(), user);
		} else {
			Chatty.addMessage($(this).val(), "ghostwriter");
		}
		$(this).val('');
		$('#delete').removeAttr('disabled');
	}
});

// delete all messages button
$('#delete').on('click', function(){
	$('#messages-container').html('');
	messagesArray = [];
	$(this).attr('disabled', 'disabled');
})

// single message delete buttons
$(document).on('click', 'button[class="delete-single"]', function(){
	var id = $(this).attr('id');
	var text = $(this).prev().html();
	Chatty.deleteSingleMessage(id, text);
});

// edit buttons
$(document).on('click', 'button[id*="edit"]', function(){
	// assign message text to variable
	var textToReset = $(this).prev().prev();
	var editBox = $(this).prev();
	console.log(textToReset);
	// show input field
	$(editBox).toggleClass('hidden');
	$(textToReset).toggleClass('hidden');
	// // set value of input to original message & focus on input
	$(editBox).val($(textToReset).html());
	$(editBox).focus();
	$(editBox).on('keyup', function(event) {
		if (event.which === 13) {
			// replace original time with edited time
			var timeChange = new Date();
			console.log("time?", timeChange);
			var timeSlot = $(editBox).parent().next().children();
			$(timeSlot).html(`Edited ${timeChange}`);
			// hide input
			$(editBox).toggleClass('hidden');
			// show span
			$(textToReset).toggleClass('hidden');

		}
		// bind edits to div immediately
		var newText = $(editBox).val();
		$(textToReset).html(newText);
	});
});


// dark theme
$('#dark-theme').on('click', function(){
	$('#messages-container').toggleClass('dark-theme');
})

// large text
$('#large-text').on('click', function(){
	$('#messages-container').toggleClass('large-text-theme');
})

