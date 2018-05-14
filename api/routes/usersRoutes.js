'use strict';
module.exports = function(app) {
  var todoUsers = require('../controllers/usersControllers');
  const auth = require('../middlewares/auth');
  const authAdmin = require('../middlewares/authAdmin');
  // todoList Routes

  app.route('/Users')
    .get(authAdmin,todoUsers.list_all_users);

  app.route('/SingUp')
    .post(todoUsers.create_a_user);

  app.route('/cryptoUsers/:userId')
    .get(authAdmin,todoUsers.read_a_user)
    .put(todoUsers.update_a_user)
    .delete(todoUsers.delete_a_user);

  app.route('/SingIn')
    .post(todoUsers.sign_in);

};
