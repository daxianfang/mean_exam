app.factory('pollFactory', ['$http', function($http) {
	var factory = {};

	factory.getPolls = function(callback) {
		$http.get('/polls').then(function(response) {
			polls = response.data;
			callback(polls);
		})
	}

	factory.createPoll = function(poll, callback) {
		$http.post('/polls', poll).then(function(response) {
			callback(response);
		});
		// callback(response);
	}

	factory.showPoll = function(id, callback) {
		$http.get('/polls/' + id).then(function(response) {
			poll = response.data;
			callback(poll);
		});
	}

	factory.increment = function(id, num, callback) {
		$http.put('/increment/' + id + '/' + num).then(function(response) {
			poll = response.data;
			callback(poll);
		})
	}

	// factory.updateFriend = function(id, friend, callback) {
	// 	$http.put('/friends/' + id, friend).then(function(response) {
	// 		friend = response.data;
	// 		callback(friend);
	// 	});
	// }

	factory.deletePoll = function(id, callback) {
		$http.delete('/polls/' + id).then(function() {
			callback(polls);
		})
	}

	

	return factory;
}])