let mongoose = require('mongoose');

var Schema = mongoose.Schema;

var groups = new Schema({
    server:   String,
    group:  String,
});

var thing = mongoose.model('groups', groups);

module.exports = thing;