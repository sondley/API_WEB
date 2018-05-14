'use strict';
require('../models/tokenTypes');

var mongoose = require('mongoose'),
  TokenType = mongoose.model('cryptotokenstypes');

exports.list_all_tokenTypes = function(req, res) {
  TokenType.find({}, function(err, tokenType) {
    if (err)
      res.send(err);
    res.json(tokenType);
  });
};




exports.create_tokenType = function(req, res) {
  var new_tokenType = new TokenType(req.body);
  new_tokenType.save(function(err, tokenType) {
    if (err)
      res.send(err);
    res.json(tokenType);
  });
};


exports.findOneTokenType = function(req, res) {
  TokenType.findById(req.params.tokenTypeId, function(err, tokenType) {
    if (err)
      res.send(err);
    res.json(tokenType);
  });
};


exports.updateTokenType = function(req, res) {
  TokenType.findOneAndUpdate({_id: req.params.tokenTypeId}, req.body, {new: true}, function(err, tokenType) {
    if (err)
      res.send(err);
    res.json(tokenType);
  });
};


exports.deleteTokenType = function(req, res) {


  TokenType.remove({
    _id: req.params.tokenTypeId
  }, function(err, tokenType) {
    if (err)
      res.send(err);
    res.json({ message: 'tokenType successfully deleted' });
  });
};








