let mongoose = require('mongoose');

var Schema = mongoose.Schema;

var mails = new Schema({
    server:   String,
    mail:  String,
});

var thing = mongoose.model('mails', mails);

module.exports = thing;