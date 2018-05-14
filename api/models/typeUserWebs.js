'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var typeUserSchema = new Schema({
  name:{
    type: String,
    default: 'User',
    unique : true,
    required : true
  }
});




module.exports = mongoose.model('typeuserwebs', typeUserSchema);
