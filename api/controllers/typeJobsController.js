'use strict';
require('../models/typejobs');
require('../models/category');
var mongoose = require('mongoose'),
  TypeJob = mongoose.model('typejobs');





exports.list_all_type_jobs = function(req, res) {

  TypeJob.find({}, function(err, typejob) {
    if (err)
      res.send(err);
    res.json(typejob);
  });
}



exports.create_a_job = function(req, res) {
  var new_typejob = new TypeJob(req.body);
  new_typejob.save(function(err, typejob) {
    if (err)
      res.send(err);
    res.json(typejob);
  });

}



exports.read_a_type_job = function(req, res) {

  TypeJob.findById(req.params.TypeJobId, function(err, typejob) {
    if (err)
      res.send(err);
    res.json(typejob);
  });
};


exports.update_a_job = function(req, res) {

  TypeJob.findOneAndUpdate({_id: req.params.TypeJobId}, req.body, {new: true}, function(err, typejob) {
    if (err)
      res.send(err);
    res.json(typejob);
  });

};


exports.delete_a_job = function(req, res) {

  TypeJob.remove({
    _id: req.params.TypeJobId
  }, function(err, typejob) {
    if (err)
      res.send(err);
    res.json({ message: 'typejob successfully deleted' });
  });
};




