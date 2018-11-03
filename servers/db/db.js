const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mongoosesample');
const db = mongoose.connection;

db.on('error', function() {
	console.log('Database connection error.');
})
db.once('open', function() {
	console.log('The database has connected.');
})

