'use strict';
module.exports = function(app) {
  var todoUsers = require('../controllers/usersControllers');
  const auth = require('../middlewares/auth');
  const authAdmin = require('../middlewares/authAdmin');
  var bcrypt = require('bcrypt');
  const BcryptX = require('../../blocks/bcrypt-x');
  // todoList Routes

  app.route('/Users')
    .get(todoUsers.list_all_users);

  app.route('/SignUp')
    .post(todoUsers.create_a_user);

  /*app.route('/cryptoUsers/:userId')
    //.get(authAdmin,todoUsers.read_a_user)
    //.put(todoUsers.update_a_user)
    .delete(todoUsers.delete_a_user);*/

  app.route('/SignIn')
    .post(todoUsers.sign_in);

  app.route('/readUser/:userId').get((req, res) => {

    todoUsers.read_a_user(req.params.userId).then((objUser) => {
      if(objUser==null)
        res.json({result : "User is not found"});
      res.json({objUser});
    });
  });

  app.route('/updateUser/:userId').put((req, res) => {
    return BcryptX.hashPassword(req.body.password).then((strHashedPassword) => {
      const ObjectUser = Object.assign({},{ name: req.body.name,tel:req.body.tel, direction: req.body.direction, lastName:req.body.lastName, email:req.body.email, password: strHashedPassword });

      todoUsers.update_a_user(req.params.userId, ObjectUser).then((objUser) => {
        res.json({objUser});
      });
    });
  });

  app.route('/deleteUser/:userId').delete((req, res) => {

    todoUsers.delete_a_user(req.params.userId).then((objUser) => {
      res.json({objUser});
    });
  });


};
