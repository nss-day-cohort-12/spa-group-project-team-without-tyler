var Chatty = function (output) {
	var messageArray = [];
	messages.forEach(function(msg){
		messageArray.push(msg);
	})
	output.getMessages = function() {
		return messageArray;
	}
	return output;
}(Chatty);