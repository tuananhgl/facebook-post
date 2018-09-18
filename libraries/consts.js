module.exports = {
	API_URL: 'http://localhost:3500/',
	saltRounds: 15,
	permission: {
		agency: 1,
		admin: 3,
		master: 12
	},
	reason: {
		paramsNotNull: "Params NULL",
		emailValidate: "Email Invalid",
		dataExist: "Data Exist",
	},
	message: {
		paramsNotNull: "Params can't be null",
		emailValidate: "Email is incorrect . Check again ",
		dataExist: "Data has been exist",
		registerSuccess: "Register Successfully"
	}
}