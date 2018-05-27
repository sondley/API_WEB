'use strict'
const jwt= require('jwt-simple');
const moment = require('moment');
const service = require('../services');
const Token= require('../models/token');

exports.createTokenLogin = function(user){
	console.log(user);
	const payload = {
		sub: user._id,
		iat: moment().unix(),
		exp : moment().add(14, 'days').unix()

	}
	var text=jwt.encode(payload, 'secret');

	Token.create({
		  text:text,
		  tokenTypeId: 1,
		  userId:user._id,

	}).then(newToken => {
		  return newToken;
		})

	return jwt.encode(payload, 'secret');
};

exports.createTokenForgetPassword = function(user){
	const payload = {
		sub: user._id,
		iat: moment().unix(),
		exp : moment().add(2, 'days').unix()

	}
	var text=jwt.encode(payload, 'secret');

	Model.Token.create({
		text:text,
		tokenTypeId: 2,
		userId:user._id,

	}).then(newToken => {
			return newToken;
		})

	return jwt.encode(payload, 'secret');
};



