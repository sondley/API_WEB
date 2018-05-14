'use strict';
module.exports = function(app) {
  var todoApplyJobs = require('../controllers/applyJobController');
  const auth = require('../middlewares/auth');
  // todoList Routes

  app.route('/getApplyJobs')
    .get(todoApplyJobs.list_all_applyJobs);

  app.route('/createApplyJob')
    .post(todoApplyJobs.create_an_applyJob);


  app.route('/applyJob/:applyJobId')
    .get(todoApplyJobs.read_an_applyJob)
    .put(todoApplyJobs.update_an_applyJob)
    .delete(todoApplyJobs.delete_an_applyJob);
};
