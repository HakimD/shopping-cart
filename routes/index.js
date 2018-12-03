var express = require('express');
var router = express.Router();
var Product = require('../models/product');

/* GET home page. */
router.get('/', function(req, res, next) {
    var products = Product.find(function(err, docs) {
        res.render('user/signup', { title: 'Shopping Cart', products: docs });
    });    
});


module.exports = router;
