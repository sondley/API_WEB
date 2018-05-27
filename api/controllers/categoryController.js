'use strict';
require('../models/category');

var mongoose = require('mongoose'),
Category = mongoose.model('categoryjobs');




/*exports.list_all_categories = function(req, res) {

  Category.find({}, function(err, category) {
    if (err)
      res.send(err);
    res.json(category);
  });
};*/

function list_all_categories() {

  return new Promise((fnResolve, fnReject) => {
    return Category.find({}, function(err, category) {
      if (err) {
        return fnReject(err);
      }
      return fnResolve(category);
    });
  });

}
exports.list_all_categories=list_all_categories;



exports.create_a_category = function(req, res) {
  var new_category = new Category(req.body);
  new_category.save(function(err, category) {
    if (err)
      res.send(err);
    res.json(category);
  });

}



/*exports.read_a_category = function(req, res) {

  Category.findById(req.params.categoryId, function(err, category) {
    if (err)
      res.send(err);
    res.json(category);
  });
};*/

function read_a_category(categoryId) {
  return new Promise((fnResolve, fnReject) => {
    return Category.findById(categoryId, function(err, category) {
      if (err) {
        return fnReject(err);
      }
      return fnResolve(category);
    });
  });

}
exports.read_a_category = read_a_category;

function getCatogoryByName(categoryName) {
  return new Promise((fnResolve, fnReject) => {
    return Category.findOne({Category: categoryName}, function(err, category) {
      if (err) {
        return fnReject(err);
      }
      return fnResolve(category);
    });
  });

}
exports.getCatogoryByName = getCatogoryByName;


exports.update_a_category = function(req, res) {

  Category.findOneAndUpdate({_id: req.params.categoryId}, req.body, {new: true}, function(err, category) {
    if (err)
      res.send(err);
    res.json(category);
  });

};


exports.delete_a_category = function(req, res) {

  Category.remove({
    _id: req.params.categoryId
  }, function(err, category) {
    if (err)
      res.send(err);
    res.json({ message: 'Category successfully deleted' });
  });
};
