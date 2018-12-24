let mongoose = require('mongoose');

var Schema = mongoose.Schema;

var servers = new Schema({
    id: Number,
    server:   String,
    cpu:  String,
    ram: String,
    overloaded: String,
    mail: String
});

var thing = mongoose.model('servers', servers);

module.exports = thing;
