'use strict';
module.exports = function(app) {
  var todoJobs = require('../controllers/jobController');
  const auth = require('../middlewares/auth');
  const authAdmin = require('../middlewares/authAdmin');
  const authPoster = require('../middlewares/authPoster');
  // todoList Routes

  app.route('/getJobs')
    .get(todoJobs.list_all_jobs);

  app.route('/createJob')
    .post(todoJobs.create_a_job);

  app.route('/searchJobByName')
    .post(todoJobs.searchJobByName);

  app.route('/searchJobByCategory')
    .post(todoJobs.searchJobByCategory);

  app.route('/paginationJob')
    .get(todoJobs.paginationJob);

  app.route('/paginationJobByPriceMax')
    .get(todoJobs.paginationJobByPriceMax);

  app.route('/paginationJobByPriceMin')
    .get(todoJobs.paginationJobByPriceMin);

  app.route('/job/:jobId')
    .get(todoJobs.read_a_job)
    .put(authAdmin,todoJobs.update_a_job)
    .delete(todoJobs.delete_a_job);

};
