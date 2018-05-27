'use strict';
module.exports = function(app) {
  var todoStateJobs = require('../controllers/stateController');
  const auth = require('../middlewares/auth');
  // todoList Routes

  app.route('/getStateJobs')
    .get(todoStateJobs.list_all_jobs);

  app.route('/createStateJob')
    .post(todoStateJobs.create_a_jobState);


  app.route('/stateJob/:jobStateId')
    .get(todoStateJobs.read_a_jobState)
    .put(todoStateJobs.update_a_jobState)
    .delete(todoStateJobs.delete_a_jobState);

};
