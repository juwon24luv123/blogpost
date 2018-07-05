var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var db = require('monk')('localhost:27017/blogpost');


/* GET home page. */
router.get('/', function(req, res, next) {
  var db = req.db;
  var posts = db.get('posts');
  posts.find({}).then(function(blogs){
    res.render('index', { posts: blogs });
  })

});

module.exports = router;
