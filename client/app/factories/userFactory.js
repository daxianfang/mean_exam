app.factory('userFactory', ['$http', function($http) {
	var factory = {};

	// factory.loggedUser = {};

	factory.register = function(user, callback, errback) {
		if (user.password === user.password_confirm) {
			$http.post('/register', user).then(callback, errback);
		} else {
			console.log("passwords don't match");
		}
	}

	factory.login = function(user, callback, errback) {
		$http.post('/login', user).then(callback, errback);
	}

	// factory.setLogin = function(user) {
	// 	factory.loggedUser = user;
	// }

	return factory;
}])