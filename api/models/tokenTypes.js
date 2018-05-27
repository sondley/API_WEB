'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TokenTypeSchema = new Schema({
  name:'String',

});




module.exports = mongoose.model('cryptotokenstypes', TokenTypeSchema);
