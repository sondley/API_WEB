'use strict';
require('../models/typeUserWebs');

var mongoose = require('mongoose'),
TypeUser = mongoose.model('typeuserwebs');




exports.list_all_type_users = function(req, res) {

  TypeUser.find({}, function(err, typeUser) {
    if (err)
      res.send(err);
    res.json(typeUser);
  });
};




exports.create_a_type_user = function(req, res) {
  var new_typeUser = new TypeUser(req.body);
  new_typeUser.save(function(err, typeUser) {
    if (err)
      res.send(err);
    res.json(typeUser);
  });

}



exports.read_a_type_user = function(req, res) {

  TypeUser.findById(req.params.typeUserId, function(err, typeUser) {
    if (err)
      res.send(err);
    res.json(typeUser);
  });
};


exports.update_a_type_user = function(req, res) {

  TypeUser.findOneAndUpdate({_id: req.params.typeUserId}, req.body, {new: true}, function(err, typeUser) {
    if (err)
      res.send(err);
    res.json(typeUser);
  });

};


exports.delete_a_type_user = function(req, res) {

  TypeUser.remove({
    _id: req.params.typeUserId
  }, function(err, typeUser) {
    if (err)
      res.send(err);
    res.json({ message: 'TypeUser successfully deleted' });
  });
};
