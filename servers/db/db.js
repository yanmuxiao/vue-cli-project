// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/vueDB');
// const db = mongoose.connection;

// db.on('error', function() {
// 	console.log('Database connection error.');
// })
// db.once('open', function() {
// 	console.log('The database has connected.');
// })

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/vueDB', { useNewUrlParser: true }, function(error) {
	if(error){
        console.log('Database connection error.');
    }else{
        console.log('The database has connected.');
    }
});

