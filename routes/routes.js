// Define the routes for this controller
exports.init = function(app) {

  app.get('/', home);

}

home = function(req, res) {
  res.render('index');
}