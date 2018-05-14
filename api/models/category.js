'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var CategorySchema = new Schema({
  _name:{ type : String , unique : true, required : true },
});




module.exports = mongoose.model('categoryjobs', CategorySchema);
