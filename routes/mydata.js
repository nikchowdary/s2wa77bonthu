var express = require('express');
var router = express.Router();

/* GET mydata page. */
router.get('/', function(req, res, next) {
  res.render('mydata', { title: 'Nikhil Chowdary Bonthu',fact: 'I like playing TT' });
});

module.exports = router;
