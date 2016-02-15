// call loadMessages fn
Chatty.loadMessages();

// add user message when user hits enter key
var textInput = document.getElementById("text-input");

textInput.addEventListener("keyup", function() {
	if (event.keyCode === 13) {
		console.log("you hit enter");
		Chatty.addMessage(textInput.value);
		textInput.value = "";
		deleteButton.removeAttribute("disabled");
	}
});

// this is for deleting ALL messages
var container = document.getElementById("messages-container");
var deleteButton = document.getElementById("delete");
deleteButton.removeAttribute("disabled");

deleteButton.addEventListener("click", function() {
	event.preventDefault();
	console.log("delete button works");
	container.innerHTML = "";
	messagesArray = [];
	deleteButton.setAttribute("disabled", "disabled");
});



document.querySelector("body").addEventListener("click", function(event) {
  console.log(event);

  // Handle the click event on any DOM element with a certain class
  if (event.target.className === "delete-single") {
    console.log("You clicked a delete button");
    console.log(event.target.id);
    var idx = event.target.id;
    var text = event.target.previousSibling.innerHTML;
    console.log("text", text);
    // this won't work until we create IIFE #3
    Chatty.deleteSingleMessage(idx, text);
  }
});


var darkTheme = document.getElementById("dark-theme");

var largeText = document.getElementById("large-text");

