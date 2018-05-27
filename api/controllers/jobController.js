'use strict';
require('../models/jobs');
require('../models/category');
var mongoose = require('mongoose'),
  Job = mongoose.model('jobs'),
  Category = mongoose.model('categoryjobs');
  var todoCategories = require('../controllers/categoryController');




exports.list_all_jobs = function(req, res) {

  Job.find({}, function(err, job) {
    if (err)
      res.send(err);
    res.json(job);
  });
};


/*function create_a_job(userId,ObjectUser) {

  return new Promise((fnResolve, fnReject) => {
    return User.findOneAndUpdate({_id: userId}, ObjectUser, {new: true}, function(err, user) {
      if (err) {
        return fnReject(err);
      }
      return fnResolve(user);
    });
  });

}*/
//exports.update_a_user = update_a_user;
/*exports.create_a_job = function(req, res) {

  var _name= req.body.category;
  Category.find({_name:_name}).then((category)=> {

    if(category[0]._name==null){
      var new_job = new Job(req.body);
      new_job.save(function(err, job) {
        if (err)
          res.send(err);
        res.json(job);
      });
    }else{
      console.log("category not found");
    }


  });
}*/

function create_a_job(objJob) {
  console.log("*********HERE**********8");
  //var _name= objJob.category;
  return new Promise((fnResolve, fnReject) => {
    return todoCategories.getCatogoryByName(objJob.Category).then(objCategory=>{
      console.log("objCategory : ",objCategory);
      if(objCategory!=null){
        var new_job = new Job(objJob);
        return new_job.save(function(err, job) {
          if (err) {
           return fnReject(err);
          }
          return fnResolve(job);
        })

      }
    });
  });
}
exports.create_a_job = create_a_job;



exports.read_a_job = function(req, res) {

  Job.findById(req.params.jobId, function(err, job) {
    if (err)
      res.send(err);
    res.json(job);
  });
};


exports.update_a_job = function(req, res) {

  Job.findOneAndUpdate({_id: req.params.jobId}, req.body, {new: true}, function(err, job) {
    if (err)
      res.send(err);
    res.json(job);
  });

};


exports.delete_a_job = function(req, res) {

  Job.remove({
    _id: req.params.jobId
  }, function(err, job) {
    if (err)
      res.send(err);
    res.json({ message: 'Job successfully deleted' });
  });
};


exports.searchJobByName = function(req, res) {

  /*Job.findOne({_name:req.body._name}).then((jobs)=> {
    res.json(jobs);
  });*/

  var pageOptions = {
      page: req.query.page || 0,
      limit: req.query.limit || 25
  }

  Job.findOne({_name:req.body._name})
    .skip(pageOptions.page*pageOptions.limit*1)
    .limit(pageOptions.limit*1)
    .exec(function (err, listJob) {
        if(err) { res.status(500).json(err); return; };
        res.status(200).json(listJob);
    })
};

exports.searchJobByCategory = function(req, res) {

  /*Job.findOne({Category:req.body.Category}).then((jobs)=> {
    res.json(jobs);
  });*/

  var pageOptions = {
      page: req.query.page || 0,
      limit: req.query.limit || 25
  }

  Job.findOne({Category:req.body.Category})
    .skip(pageOptions.page*pageOptions.limit*1)
    .limit(pageOptions.limit*1)
    .exec(function (err, listJob) {
        if(err) { res.status(500).json(err); return; };
        res.status(200).json(listJob);
    })
};


exports.paginationJob = function(req, res) {
  var pageOptions = {
      page: req.query.page || 0,
      limit: req.query.limit || 10
  }

  console.log(pageOptions.limit);

  Job.find()
    .skip(pageOptions.page*pageOptions.limit*1)
    .limit(pageOptions.limit*1)
    .exec(function (err, listJob) {
        if(err) { res.status(500).json(err); return; };
        res.status(200).json(listJob);
    })
}

exports.paginationJobByPriceMax = function(req, res) {
  var pageOptions = {
      amount: req.query.amount || 0,
  }

    console.log(pageOptions.amount*1);
  return Job.find( { amount: { $gte: (pageOptions.amount*1) } } ).then(listJob=>{
    res.status(200).json(listJob);
  });
}

exports.paginationJobByPriceMin = function(req, res) {
  var pageOptions = {
      amount: req.query.amount || 0,
  }

    console.log(pageOptions.amount*1);
  return Job.find( { amount: { $lte: (pageOptions.amount*1) } } ).then(listJob=>{
    res.status(200).json(listJob);
  });

  /*Job.find({amount: req.query.amount}).max({amount: req.query.amount})
    .exec(function (err, listJob) {
        if(err) { res.status(500).json(err); return; };
        res.status(200).json(listJob);
    })*/
}



