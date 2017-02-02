var mongoose = require('mongoose');
var User = mongoose.model('User');

function UsersController() {
	this.register = function(req, res) {
		console.log(req.body);
		if (req.body.email && req.body.password) {
			console.log('not empty');
		}
		var newUser = new User(req.body);
		newUser.save(function(err, data) {
			if (err) {
				console.log(err);
				res.json(err);
			} else {
				console.log(data);
				res.json(data);
			}
		})
	}

	this.login = function(req, res) {
		console.log(req.body);
		User.findOne({email: req.body.email}, function(err, data) {
			if (data == null) {
				console.log('User does not exist');
				res.json({errors: {message: "The user does not exist"}});
			} else if (data && data.validPassword(req.body.password)) {
				console.log('Login successful');
				res.json({
					id: data._id,
					email: data.email
				});
			} else {
				console.log('Password incorrect')
				res.json({errors: {message: "Password incorrect"}});
			}
		})
	}
}

module.exports = new UsersController();