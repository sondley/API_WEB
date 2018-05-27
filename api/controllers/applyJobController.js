'use strict';
require('../models/applyJobs');
require('../models/user');
require('../models/jobs');

var mongoose = require('mongoose'),
  ApplyJob = mongoose.model('applyjobs'),
  Job = mongoose.model('jobs'),
  User = mongoose.model('userwebs');

exports.list_all_applyJobs = function(req, res) {

  ApplyJob.find({}, function(err, _applyJob) {
    if (err)
      res.send(err);
    res.json(_applyJob);
  });
};


exports.create_an_applyJob = function(req, res) {

  User.findById(req.body.userId, function(err, user) {
    if (err)
      res.send(" doesn t Existe this User");
    else{
      Job.findById(req.body.jobId, function(err, job) {
        if(err)
          res.send(" doesn t Existe this Job");
        else{
          console.log("EveryThings is OK");
          var new_applyJob = new ApplyJob(req.body);
          new_applyJob.save(function(err, _applyJob) {
            if (err)
              res.send(err);
            res.json(_applyJob);
          });
        }
      })
    }
  });

}



exports.read_an_applyJob = function(req, res) {

  ApplyJob.findById(req.params.applyJobId, function(err, _applyJob) {
    if (err)
      res.send(err);
    res.json(_applyJob);
  });
};


exports.update_an_applyJob = function(req, res) {

  ApplyJob.findOneAndUpdate({_id: req.params.applyJobId}, req.body, {new: true}, function(err, _applyJob) {
    if (err)
      res.send(err);
    res.json(_applyJob);
  });

};


exports.delete_an_applyJob = function(req, res) {

  ApplyJob.remove({
    _id: req.params.applyJobId
  }, function(err, _applyJob) {
    if (err)
      res.send(err);
    res.json({ message: 'ApplyJob successfully deleted' });
  });
};
