var controller = require('./controller');
var mid = require('./middleware');

function router(app) {
  app.get('/', mid.clearMasterSession, controller.home.homePage);
  app.get('/watch', controller.watch.watchPage);
  app.get('/history', mid.clearMasterSession, controller.history.historyPage);
  app.get('/validateUrl', controller.watch.validateUrl);
}

module.exports = router;