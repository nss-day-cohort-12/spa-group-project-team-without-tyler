var Chatty = function (output) {
	var messageArray = [];

	// populates messageArray from messages.json
	output.populateArray = function(arr) {
		arr.forEach(function(el) {
			messageArray.push(el.message);
		})
		console.log(messageArray);
	}

	// adds message to array and calls outputToDOM for that message
	output.addMessage = function(userInput, user) {
		messageArray.push(userInput);
		var date = new Date();
		Chatty.outputToDOM(messageArray.length - 1, userInput, user, date);
		console.log(messageArray);
	}

	// public getter for messageArray
	output.getMessages = function() {
		return messageArray;
	}

	// output to DOM
	output.outputToDOM = function(i, el, user, timestamp) {
		$('#messages-container').append(`
			<div id="message-${i}" class="message">
				<div class="row">
					<span class="name">${user}:</span>
					<span>${el}</span>
					<input type="text" class="edited-text hidden" id="edited-text-${i}">
					<button type="edit" class="edit" id="edit-${i}">Edit</button>
					<button type="delete-single" class="delete-single" id=${i}>Delete</button>
				</div>
				<div class="row">
					<span class="time">${timestamp}</span>
				</div>
			</div>`);
	}

	// remove single message from messageArray
	output.deleteMessageFromArray = function(text) {
		for (var i = 0; i < messageArray.length; i++) {
			if (messageArray[i] === text) {
				messageArray.splice(i, 1);
				console.log(messageArray);
			}
		}
		if (messageArray.length === 0) {
			$('#delete').attr("disabled", "disabled");
		}
	}

	return output;
}(Chatty);