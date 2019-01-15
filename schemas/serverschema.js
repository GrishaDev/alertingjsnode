let mongoose = require('mongoose');

var Schema = mongoose.Schema;

var servers = new Schema({
    id: Number,
    server:   String,
    cpu:  Number,
    ram: Number,
    overloaded: Boolean
});

var thing = mongoose.model('servers', servers);

module.exports = thing;
