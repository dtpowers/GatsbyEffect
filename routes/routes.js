var multer = require('multer');
var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'secrets');
  },
  filename: function(req, file, cb) {
    cb(null, randomString(8, '0123456789abcdefghijklmnopqrstuvwxyz') + ".wav");
  }
})

var upload = multer({
  storage: storage
})

// Define the routes for this controller
exports.init = function(app) {

  app.get('/', home);

  app.post('/saveBlob', upload.single('file'), saveBlob);

}

home = function(req, res) {
  res.render('index');
}

saveBlob = function(req, res) {
  console.log(req.file);
  res.status(200);
  res.end();

}

function randomString(length, chars) {
  var result = '';
  for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
  return result;
}