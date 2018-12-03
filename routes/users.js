var express = require('express');
var router = express.Router();
var User = require('../models/user');

/* GET usersList page. */
router.get('/users', function(req, res, next) {
    var users = User.find(function(err, docs) {
        res.render('admin/users', { title: 'Shopping Cart', users: docs });
    });    
});

module.exports = router;
