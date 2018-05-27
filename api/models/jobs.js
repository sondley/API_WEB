'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var JobSchema = new Schema({
  title:'String',
  description: 'String',
  type: 'String',
  location:'String',
  position: 'String',
  picture : 'String',
  url : 'String',
  email: 'String',
  campany: 'String',
  amount: 'Number',
  Category: 'String'
});




module.exports = mongoose.model('jobs', JobSchema);
