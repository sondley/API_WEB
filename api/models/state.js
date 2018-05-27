'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StateJobSchema = new Schema({
  name:{ type : String , unique : true, required : true , default: 'active'}
});




module.exports = mongoose.model('jobstates', StateJobSchema);
