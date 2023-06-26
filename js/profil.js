
// My Profil
function getMyProfile() {
	if (typeof dict_storage.authToken !== 'undefined') {
		fetch(url_base + 'profil/me', {
			headers: {
				'accept': 'application/json',
				'Authorization': 'Bearer ' + dict_storage.authToken
			}
		})
			.then(response => response.text())
			.then((response) => {
				dict_eggaming.user_profil = JSON.parse(response);
			})
			.catch(err => console.log(err));
		
		return true
	}
	else {
		return false
	}
}

// Modify Profile
function modifyProfile() {
	pseudo = document.getElementById("pseudo").value;
	first_name = document.getElementById("first_name").value;
	last_name = document.getElementById("last_name").value;
	discord = document.getElementById("discord").value;
	fetch(url_base + 'profil/edit', {
		method: 'POST',
		headers: {
			'accept': 'application/json',
			'Content-Type': 'application/json',
			'Authorization': 'Bearer ' + dict_storage.authToken
		},
		body: JSON.stringify({
			'pseudo': pseudo,
			'first_name': first_name,
			'last_name': last_name,
			'discord': discord
		})
	})
		.then(response => response.text())
		.then((response) => {
			dict_eggaming.user_profil = JSON.parse(response);
		})
		.catch(err => console.log(err));

};