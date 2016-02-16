var Chatty = function () {

	return {
	   // make request for contents of messages.json
	  loadMessages: function () {
	    var messageRequest = new XMLHttpRequest;
	    messageRequest.open("GET", "messages.json");
	    messageRequest.send();
	    // when contents of messages.json are available, do this:
	    messageRequest.addEventListener("load", function() {
	      var messagesData = JSON.parse(this.responseText);
	      messages = messagesData.messages;
	      console.log(messages);
	      // outputs preloaded messages from JSON file
	      messages.forEach(function(el, idx) {
	      	console.log(idx);
	      	console.log(el.message);
	      	Chatty.outputToDOM(idx, el.message);
	      });
	      // adds preloaded messages to private array & gets private array
	      Chatty.getMessages(messages);
	    });
	  }
	}

}();
