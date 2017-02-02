var mongoose = require('mongoose');

var PollSchema = new mongoose.Schema({
	question: {
		type: String,
		required: true,
	},

	option_a: {
		type: String,
		required: true,
	},

	count_a: {
		type: Number,
		default: 0
	},

	option_b: {
		type: String,
		required: true,
	},

	count_b: {
		type: Number,
		default: 0
	},

	option_c: {
		type: String,
		required: true,
	},

	count_c: {
		type: Number,
		default: 0
	},

	option_d: {
		type: String,
		required: true,
	},

	count_d: {
		type: Number,
		default: 0
	},

	user: {
		type: String,
	},


}, {
	timestamps: true
})

mongoose.model('Poll', PollSchema);