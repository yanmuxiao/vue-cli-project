const mongoose = require('mongoose');

const users = require('../schema/users.js');


const Models = {
	Users: mongoose.model('Users', users.usersSchema),
}


module.exports = Models