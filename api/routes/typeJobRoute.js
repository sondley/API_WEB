'use strict';
module.exports = function(app) {
  var todoTypeJob = require('../controllers/typeJobsController');
  const auth = require('../middlewares/auth');
  // todoList Routes

  app.route('/getTypeJob')
    .get(todoTypeJob.list_all_type_jobs);

  app.route('/createTypeJob')
    .post(todoTypeJob.create_a_job);


  app.route('/TypeJob/:TypeJobId')
    .get(todoTypeJob.read_a_type_job)
    .put(todoTypeJob.update_a_job)
    .delete(todoTypeJob.delete_a_job);

};
