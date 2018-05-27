'use strict';
require('../models/user');
var bcrypt = require('bcrypt');
const BcryptX = require('../../blocks/bcrypt-x');
const service = require('../services/index');
//const Model = require('../models/index');//call the Model
var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
const auth = require('../middlewares/auth');
var jwtDecode = require('jwt-decode');
var mongoose = require('mongoose'),
User = mongoose.model('userwebs');


exports.list_all_users = function(req, res) {

  User.find({}, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};




exports.create_a_user = function(req, res) {
  return BcryptX.hashPassword(req.body.password).then((strHashedPassword) => {
    const ObjectUser = Object.assign({},{ name: req.body.name,tel:req.body.tel, direction: req.body.direction, lastName:req.body.lastName, email:req.body.email, password: strHashedPassword });
    var new_user = new User(ObjectUser);
    new_user.save(function(err, user) {
      if (err)
        res.send(err);
      service.createTokenLogin(user);
      res.json(user);
    });
  });
}



exports.sign_in = function(req, res) {

  return User.find({email:req.body.email}).then((userx)=> {
      console.log("userx : ", userx[0].email);
        if (userx[0].email==null) {
          res.status(401).json({ message: 'Authentication failed. User not found.' });
        } else if (userx) {
            return BcryptX.isValidPassword(req.body.password, userx[0].password).then(() => {
              return res.json({token: service.createTokenLogin(userx)});
            })
          } else {
              res.status(401).json({ message: 'Authentication failed. Wrong password.' });
            }
    //}
  }).catch(() => {
      return res.status(404).json({ message: 'Authentication failed. User not password Incorrect.' });
      });

};


function read_a_user(userId) {
  return new Promise((fnResolve, fnReject) => {
    return User.findById(userId, function(err, user) {
      if (err) {
        return fnReject(err);
      }
      return fnResolve(user);
    });
  });

}
exports.read_a_user = read_a_user;


/*exports.read_a_user = function(req, res) {

  User.findById(req.params.userId, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};*/


/*exports.update_a_user = function(req, res) {

  return BcryptX.hashPassword(req.body.password).then((strHashedPassword) => {
    const ObjectUser = Object.assign({},{ name: req.body.name,tel:req.body.tel, direction: req.body.direction, lastName:req.body.lastName, email:req.body.email, password: strHashedPassword });


    User.findOneAndUpdate({_id: req.params.userId}, ObjectUser, {new: true}, function(err, user) {
      if (err)
        res.send(err);
      res.json(user);
    });
  });
};*/

function update_a_user(userId,ObjectUser) {

  return new Promise((fnResolve, fnReject) => {
    return User.findOneAndUpdate({_id: userId}, ObjectUser, {new: true}, function(err, user) {
      if (err) {
        return fnReject(err);
      }
      return fnResolve(user);
    });
  });

}
exports.update_a_user = update_a_user;


/*exports.delete_a_user = function(req, res) {

  User.remove({
    _id: req.params.userId
  }, function(err, user) {
    if (err)
      res.send(err);
    res.json({ message: 'User successfully deleted' });
  });
};*/

function delete_a_user(userId) {
  return new Promise((fnResolve, fnReject) => {
    return User.remove({
      _id: userId
    }, function(err, user) {
      if (err) {
        return fnReject(err);
      }
      return fnResolve(user);
    });
  });

}
exports.delete_a_user = delete_a_user;
