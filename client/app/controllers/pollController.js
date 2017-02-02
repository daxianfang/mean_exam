app.controller('pollController', ['pollFactory', '$location', '$routeParams', '$cookies', function(pollFactory, $location, $routeParams, $cookies) {
	var self = this;
	self.poll = {};

	if (!$cookies.get('userId')) {
		$location.url('/');
	} else {
		self.poll.user = $cookies.get('userEmail');
		console.log(self.poll.user);
	}

	var setPolls = function(polls) {
		self.polls = polls;
	}

	var setOnePoll = function(poll) {
		self.poll = poll;
	}

	pollFactory.getPolls(setPolls);

	self.createPoll = function() {
		pollFactory.createPoll(self.poll, function(response) {
			if (response.data.errMessage) {
				self.errMessage = response.data.errMessage;
				alert(self.errMessage);
			} else {
				self.poll = {};
				$location.url('/dashboard');	
			}
		});

	}

	self.showPoll = function() {
		pollFactory.showPoll($routeParams.id, setOnePoll);
	}

	self.increment = function(id) {
		pollFactory.increment($routeParams.id, id, setOnePoll);
	}

	// self.updateFriend = function() {
	// 	friendsFactory.updateFriend($routeParams.id, self.friend, setFriends);
	// 	friendsFactory.getFriends(setFriends);
	// 	self.friend = {};
	// 	$location.url('/');
	// }

	self.deletePoll = function(id) {
		pollFactory.deletePoll(id, setPolls);
		$location.url('/dashboard');
	}


	self.logout = function() {
		$cookies.remove('userId');
		$cookies.remove('userEmail');
		$location.url('/');
	}

}])