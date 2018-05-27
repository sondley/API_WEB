'use strict';
require('../models/token.js');

var mongoose = require('mongoose');
const Token = mongoose.model('cryptotokens');

exports.list_all_tokens = function(req, res) {
  Token.find({}, function(err, token) {
    if (err)
      res.send(err);
    res.json(token);
  });
};




exports.create_a_token = function(req, res) {
  var new_token = new Token(req.body);
  new_token.save(function(err, token) {
    if (err)
      res.send(err);
    res.json(user);
  });
};


exports.findOneToken = function(req, res) {
  Token.findById(req.params.tokenId, function(err, token) {
    if (err)
      res.send(err);
    res.json(token);
  });
};


exports.update_a_token = function(req, res) {
  Token.findOneAndUpdate({_id: req.params.tokenId}, req.body, {new: true}, function(err, token) {
    if (err)
      res.send(err);
    res.json(token);
  });
};


exports.delete_a_token = function(req, res) {


  Token.remove({
    _id: req.params.tokenId
  }, function(err, token) {
    if (err)
      res.send(err);
    res.json({ message: 'Token successfully deleted' });
  });
};
