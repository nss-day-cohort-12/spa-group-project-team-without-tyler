var Chatty = function(deleter) {

	deleter.deleteSingleMessage = function(id, text) {
		var divToRemove = document.getElementById(id);
		divToRemove.parentNode.removeChild(divToRemove);
		console.log("id inside deleter IIFE", id);
		Chatty.deleteMessageFromArray(text);
	}

	return deleter;
}(Chatty);