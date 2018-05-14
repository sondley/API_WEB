'use strict';
module.exports = function(app) {
  var todoCategories = require('../controllers/categoryController');
  const auth = require('../middlewares/auth');
  // todoList Routes

  app.route('/getCategories')
    .get(todoCategories.list_all_categories);

  app.route('/createCategory')
    .post(todoCategories.create_a_category);


  app.route('/category/:categoryId')
    .get(todoCategories.read_a_category)
    .put(todoCategories.update_a_category)
    .delete(todoCategories.delete_a_category);

};
