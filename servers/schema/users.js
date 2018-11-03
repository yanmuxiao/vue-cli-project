const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// 登录用户
const usersSchema = new Schema({
	name: {type: String},
	pwd: {type: String},
	uId: {type: Number}
})


module.exports = {
	usersSchema,
}