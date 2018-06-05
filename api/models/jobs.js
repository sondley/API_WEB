'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var JobSchema = new Schema({
  description: 'String',
  type: 'String',
  location:'String',
  position: 'String',
  picture : 'String',
  url : 'String',
  email: 'String',
  company: 'String',
  instruction: 'String',
  Category: 'String'
});

JobSchema.index({'$**': 'text'});




module.exports = mongoose.model('jobs', JobSchema);
