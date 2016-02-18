var Chatty = function () {

	return {
	   // make request for contents of messages.json
	  	loadMessages: function () {
			$.ajax({
				url:'messages.json'
			}).done(createObject);

			function createObject(messageData) {
				var messages = messageData.messages;
				for (var i = 0; i < messages.length; i++) {
					var curr = messages[i];
					messages[i].timestamp = new Date();
					Chatty.outputToDOM(i, curr.message, curr.user, curr.timestamp);
				}
				// gets messages into private messagesArray var in output IIFE
				Chatty.populateArray(messages);
			}
	  	}
	}
}();
