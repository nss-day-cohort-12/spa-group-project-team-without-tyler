// create users object and add radio buttons

var users = {
  names: ["Dylan", "Ahmed", "Kaylee"]
}

users.names.forEach(function(name) {
	console.log(name);
	$('.user-selects').append(`<input name="user" class="user" type="radio" value=${name}> ${name} `);
});

