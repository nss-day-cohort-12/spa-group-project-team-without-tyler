var Chatty = function(deleter) {

	deleter.deleteSingleMessage = function(id, text) {
		$("#message-" + id).remove();
		Chatty.deleteMessageFromArray(text);
	}

	return deleter;
}(Chatty);