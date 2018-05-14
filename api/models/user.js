'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name:'String',
  lastName: 'String',
  password: 'String',
  tel:'String',
  email:{ type : String , unique : true, required : true },
  direction: 'String',
  typeUsers:{
    type: String,
    default: 'User'
  }
});

//full time,
//parc time
//frelance





module.exports = mongoose.model('userwebs', UserSchema);
