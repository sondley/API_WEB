'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TokenSchema = new Schema({
  userId:'String',
  text: 'String',
  tokenTypeId: 'String',

});




module.exports = mongoose.model('cryptotokens',TokenSchema);

