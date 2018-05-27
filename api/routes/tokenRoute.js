'use strict';


module.exports = function(app) {
  var allTokens = require('../controllers/tokenController');

  // todoList Routes
  app.route('/Token')
  .get(allTokens.list_all_tokens);

  app.route('/TokenId/:id')
    .get(allTokens.findOneToken)
    .delete(allTokens.delete_a_token);
};
