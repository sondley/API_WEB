'use strict';
require('../models/state');

var mongoose = require('mongoose'),
jobState = mongoose.model('jobstates');




exports.list_all_jobs = function(req, res) {

  jobState.find({}, function(err, _jobState) {
    if (err)
      res.send(err);
    res.json(_jobState);
  });
};




exports.create_a_jobState = function(req, res) {
  var new_jobState = new jobState(req.body);
  new_jobState.save(function(err, _jobState) {
    if (err)
      res.send(err);
    res.json(_jobState);
  });

}



exports.read_a_jobState = function(req, res) {

  jobState.findById(req.params.jobStateId, function(err, _jobState) {
    if (err)
      res.send(err);
    res.json(_jobState);
  });
};


exports.update_a_jobState = function(req, res) {

  jobState.findOneAndUpdate({_id: req.params.jobStateId}, req.body, {new: true}, function(err, _jobState) {
    if (err)
      res.send(err);
    res.json(_jobState);
  });

};


exports.delete_a_jobState = function(req, res) {

  jobState.remove({
    _id: req.params.jobStateId
  }, function(err, _jobState) {
    if (err)
      res.send(err);
    res.json({ message: 'JobState successfully deleted' });
  });
};
