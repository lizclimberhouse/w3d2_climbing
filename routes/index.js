var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Climbing" })
})
// tried send, and variations of render. still cant get it.
module.exports = router;
