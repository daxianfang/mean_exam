var mongoose = require('mongoose');
var Poll = mongoose.model('Poll');

function PollsController() {
	this.index = function(req, res) {
		Poll.find({}, function(err, results) {
			res.json(results);
		})
	}

	this.show = function(req, res) {
		console.log(req.params.id);
		Poll.findById(req.params.id, function(err, poll) {
			console.log(poll);
			res.json(poll);
		})
	}

	this.create = function(req, res) {
		var newPoll = new Poll(req.body);
		if (newPoll.question.length < 8) {
			res.json({errMessage: 'question must be at least 8 characters long'});
		} else if (newPoll.option_a.length < 3) {
			res.json({errMessage: 'option must be at least 3 characters long'});
		} else if (newPoll.option_b.length < 3) {
			res.json({errMessage: 'option must be at least 3 characters long'});
		} else if (newPoll.option_c.length < 3) {
			res.json({errMessage: 'option must be at least 3 characters long'});
		} else if (newPoll.option_d.length < 3) {
			res.json({errMessage: 'option must be at least 3 characters long'});
		} else {
			newPoll.save(function(err, newPoll) {
			if (err) {
				console.log(err);
			} else {
				res.json(newPoll);
			}
		})
		}
		
	}

	this.increment = function(req, res) {
		Poll.findById(req.params.id, function(err, poll) {
			if (err) {
				console.log(err);
			} else {
				if (req.params.num == 1) {
					poll.count_a += 1;
					poll.save(function(err, poll) {
						if (err) {
							console.log(err);
						} else {
							console.log(poll);
							res.json(poll);
						}
					})
				} else if (req.params.num == 2) {
					poll.count_b += 1;
					poll.save(function(err, poll) {
						if (err) {
							console.log(err);
						} else {
							console.log(poll);
							res.json(poll);
						}
					})
				} else if (req.params.num == 3) {
					poll.count_c += 1;
					poll.save(function(err, poll) {
						if (err) {
							console.log(err);
						} else {
							console.log(poll);
							res.json(poll);
						}
					})
				} else if (req.params.num == 4) {
					poll.count_d += 1;
					poll.save(function(err, poll) {
						if (err) {
							console.log(err);
						} else {
							console.log(poll);
							res.json(poll);
						}
					})
				}
			}
		})
	}

	// this.update = function(req, res) {
	// 	Friend.findById(req.params.id, function(err, friend) {
	// 		if (err) {
	// 			console.log(err);
	// 		} else {
	// 			friend.name = req.body.name || friend.name;
	// 			friend.age = req.body.age || friend.age;
	// 			friend.save(function(err, friend) {
	// 				if (err) {
	// 					console.log(err);
	// 				} else {
	// 					// console.log(friend);
	// 					res.json(friend);
	// 				}
	// 			})
	// 		}
	// 	})
	// }

	this.delete = function(req, res) {
		Poll.findByIdAndRemove(req.params.id, function(err) {
			if (err) {
				console.log(err);
			}
		});
	}
}

module.exports = new PollsController();