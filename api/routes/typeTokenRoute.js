'use strict';


module.exports = function(app) {
  var allTypeTokens = require('../controllers/typeTokenController');

  // todoList Routes
  app.route('/TypeToken')
    .get(allTypeTokens.list_all_tokenTypes)
    .post(allTypeTokens.create_tokenType);


  app.route('/TypeTokenId/:id')
     .get(allTypeTokens.findOneTokenType)
     .put(allTypeTokens.updateTokenType)
     .delete(allTypeTokens.deleteTokenType);

};



