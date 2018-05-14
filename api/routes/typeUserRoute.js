'use strict';
module.exports = function(app) {
  var todoTypeUsers = require('../controllers/typeUserController');
  const auth = require('../middlewares/auth');
  // todoList Routes

  app.route('/getTypeUsers')
    .get(todoTypeUsers.list_all_type_users);

  app.route('/createTypeUser')
    .post(todoTypeUsers.create_a_type_user);

  app.route('/typeUser/:typeUserId')
    .get(todoTypeUsers.read_a_type_user)
    .put(todoTypeUsers.update_a_type_user)
    .delete(todoTypeUsers.delete_a_type_user);

};
