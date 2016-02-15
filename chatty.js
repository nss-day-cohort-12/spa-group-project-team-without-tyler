var Chatty = function () {
	var messages;
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
	      Chatty.getMessages(messages);
	      return messages;
	    });
	  }
	}

}();
