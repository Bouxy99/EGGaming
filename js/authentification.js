let error = [""]

// Login
function login() {
	email = document.getElementById("email").value;
	password = document.getElementById("password").value;
	fetch(url_base + 'auth/login', {
		method: 'POST',
		headers: {
			'accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			'email': email,
			'password': password
		})
	})
		.then(response => response.text())
		.then((response) => {
			document.getElementById("console").innerHTML = response;
			dict_storage.authToken = JSON.parse(response).authToken;
			saveLocalStorage();

			if (JSON.parse(response).message == undefined) {
				window.location.href = 'home.html';
			};
		})
		.catch(err => console.log(err));

};

// Signup
function signup() {
	pseudo = document.getElementById("pseudo").value;
	first_name = document.getElementById("first_name").value;
	last_name = document.getElementById("last_name").value;
	discord = document.getElementById("discord").value;
	email = document.getElementById("email").value;
	password = document.getElementById("password").value;
	activation_code = document.getElementById("activation_code").value;
	fetch(url_base + 'auth/signup', {
		method: 'POST',
		headers: {
			'accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			'pseudo': pseudo,
			'first_name': first_name,
			'last_name': last_name,
			'discord': discord,
			'email': email,
			'password': password,
			'activation_code': activation_code
		})
	})
		.then(response => response.text())
		.then((response) => {
			document.getElementById("console").innerHTML = response;
			dict_storage.authToken = JSON.parse(response).authToken;
			saveLocalStorage();

			if (JSON.parse(response).message == undefined) {
				window.location.href = 'home.html';
			};
		})
		.catch(err => console.log(err));

};

// Logout
function logout() {

};