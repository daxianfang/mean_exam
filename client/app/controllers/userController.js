app.controller('userController', ['userFactory', '$location', '$cookies', function(userFactory, $location, $cookies) {
	var self = this;

	if ($cookies.get('userId')) {
		$location.url('/dashboard');
	}
	self.register = function() {
		var newUser = {};
		newUser = self.regUser || newUser;
		console.log(self.regUser);
		userFactory.register(newUser, function(data) {
			console.log(data);
		}, function(err) {
			console.log(err);
		})
	}

	self.login = function() {
		console.log(self.logUser);
		userFactory.login(self.logUser, function(data) {
			console.log(data);
			$cookies.put('userId', data.data.id);
			$cookies.put('userEmail', data.data.email);
			$location.url('/dashboard');
			// userFactory.setLogin(data);
		}, function(err) {
			console.log('There is an error');
		})
	}


}])