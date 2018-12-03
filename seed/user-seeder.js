var Product = require('../models/user');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopping', {useNewUrlParser: true } )

var users = [
    new User({
        id: 1,
        username: 'HakimD',
        username: 'pass',
        email: 'djabou.hakim@gmail.com',
        profilPicture: 'https://st2.depositphotos.com/1006318/5909/v/950/depositphotos_59095529-stock-illustration-profile-icon-male-avatar.jpg'
    })
];

var done = 0;
for (var i = 0; i < users.length; i++) {
    users[i].save(function(err, result) {
        done++;
        if (done === users.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}