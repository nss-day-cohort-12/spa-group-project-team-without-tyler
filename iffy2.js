var Chatty = function (output) {
	var messageArray = [];

	output.getMessages = function(arr) {
		arr.forEach(function(msg) {
			messageArray.push(msg);
		});
		console.log("array", messageArray);
		return messageArray;
	}
	return output;
}(Chatty);