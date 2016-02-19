"use strict";
let Chatty = function () {

	return {
	   // make request for contents of messages.json
	  	loadMessages: function () {
			$.ajax({
				url:'messages.json'
			}).done(createObject);

			function createObject(messageData) {
				let messages = messageData.messages;
				for (let i = 0; i < messages.length; i++) {
					let curr = messages[i];
					messages[i].timestamp = new Date();
					Chatty.outputToDOM(i, curr.message, curr.user, curr.timestamp);
				}
				// gets messages into private messagesArray var in output IIFE
				Chatty.populateArray(messages);
			}
	  	}
	};
}();

