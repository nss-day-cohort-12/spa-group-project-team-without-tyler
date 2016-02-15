// call loadMessages fn
Chatty.loadMessages();

// add user message when user hits enter key
var textInput = document.getElementById("text-input");

textInput.addEventListener("keyup", function() {
	if (event.keyCode === 13) {
		console.log("you hit enter");
		// this line won't work until Chatty.outputToDOM is created
		// Chatty.outputToDOM(container, textInput.value);
	}
})

var deleteButton = document.getElementById("delete");

deleteButton.addEventListener("click", function() {

})

var darkTheme = document.getElementById("dark-theme");

var largeText = document.getElementById("large-text");
