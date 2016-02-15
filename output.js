var Chatty = function (output) {
	var messageArray = [];

	// is this function allowed?
	output.addMessage = function(userInput) {
		messageArray.push(userInput);
		Chatty.outputToDOM(messageArray.length - 1, userInput);
	}

	output.getMessages = function(arr) {
		arr.forEach(function(msg) {
			messageArray.push(msg.message);
		});
		console.log("array", messageArray);
		// get messages into DOM -- not sure if this should go here
		for (var i = 0; i < messageArray.length; i++) {
			var id = i;
			console.log("id", id);
			var input = messageArray[i];
			console.log("input", input);
			Chatty.outputToDOM(id, input);
		};
		return messageArray;
	}

	output.outputToDOM = function(id, input) {
		// remove disabled attribute on delete button once messages are on DOM
		var messageDiv = "";
		messageDiv += `<div id=${id} class="message">`;
		messageDiv += `<span>${input}</span>`;
		messageDiv += `<button type="delete-single" class="delete-single" id=${id}>Delete Message</button>`;
		messageDiv += `</div>`;
		container.innerHTML += messageDiv;
	}

	output.deleteMessageFromArray = function(text) {
		console.log("text", text);
		for (var i = 0; i < messageArray.length; i++) {
			if (messageArray[i] === text) {
				console.log("match!");
				messageArray.splice(i, 1);
				console.log(messageArray);
			}
		}
		if (messageArray.length === 0) {
			deleteButton.setAttribute("disabled", "disabled");
		}
	}

	return output;
}(Chatty);