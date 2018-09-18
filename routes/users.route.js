const userControl = require('./../control/users');

module.exports = function(app) {  
	app.route('/register')
		.get(function(req,res) {
			res.send('Register Page');
		})
		.post(userControl.register);

    app.route('/user')
        .get(function (req, res) {
            res.send('Hello World!');
        })
        .post(function (req, res) {
            res.send('Got a POST request');
        })
        .put(function (req, res) {
            res.send('Got a PUT request at /user');
        })
        .delete(function (req, res) {
            res.send('Got a DELETE request at /user');
        });
}