"use strict";
// create users object and add radio buttons

let users = {
  names: ["Dylan", "Ahmed", "Kaylee"]
};

users.names.forEach((name) => {
	console.log(name);
	$('.user-selects').append(`<input name="user" class="user" type="radio" value=${name}> ${name} `);
});

