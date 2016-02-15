var Chatty = function(deleter) {

	deleter.deleteSingleMessage = function(idx, text) {
		var divToRemove = document.getElementById(idx);
		divToRemove.parentNode.removeChild(divToRemove);
		console.log("idx inside deleter IIFE", idx);
		Chatty.deleteMessageFromArray(text);
	}

	return deleter;
}(Chatty);