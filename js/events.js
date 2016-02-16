// call loadMessages fn
Chatty.loadMessages();

// add user message when user hits enter key
var textInput = document.getElementById("text-input");

textInput.addEventListener("keyup", function() {
	if (event.keyCode === 13) {
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
	container.innerHTML = "";
	messagesArray = [];
	deleteButton.setAttribute("disabled", "disabled");
});



document.querySelector("body").addEventListener("click", function(event) {
  if (event.target.className === "delete-single") {
    var id = event.target.id;
    var text = event.target.previousSibling.innerHTML;
    Chatty.deleteSingleMessage(id, text);
  }
});


var darkTheme = document.getElementById("dark-theme");

var largeText = document.getElementById("large-text");

var body = document.getElementById("egg");

darkTheme.addEventListener("click", function() {
	body.classList.toggle("dark-theme")
});

largeText.addEventListener("click", function(){
// when checkbox clicked, toggle this
  container.classList.toggle("large-text-theme")
  console.log(event.target);
});

