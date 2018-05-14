'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TypeJobSchema = new Schema({
  name: { type : String , unique : true, required : true },
});




module.exports = mongoose.model('typejobs', TypeJobSchema);
