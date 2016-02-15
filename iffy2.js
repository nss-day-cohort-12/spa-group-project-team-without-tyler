var Chatty = function (output) {
	var messageArray = [];

	output.getMessages = function(arr) {
		arr.forEach(function(msg) {
			messageArray.push(msg);
		});
		console.log("array", messageArray);
		return messageArray;
	}

	output.outputToDOM = function(id, input) {
		var container = document.getElementById("messages-container");
		var messageDiv = "";
		messageDiv += `<div id=${id}>`;
		messageDiv += `<span>${input}</span>`;
		messageDiv += `<button type="delete-single" class="delete-single" id=${id}>Delete Message</button>`;
		messageDiv += `</div>`;
		container.innerHTML = messageDiv;
	}

	return output;
}(Chatty);