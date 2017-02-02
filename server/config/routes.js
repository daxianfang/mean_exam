var users = require('../controllers/users.js');
var polls = require('../controllers/polls.js');


module.exports = function(app) {
	app.post('/register', users.register);
	app.post('/login', users.login);
	app.get('/polls', polls.index);
	app.get('/polls/:id', polls.show);
	app.post('/polls', polls.create);
	app.put('/increment/:id/:num', polls.increment);
	app.delete('/polls/:id', polls.delete);
}