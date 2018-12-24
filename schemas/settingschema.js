let mongoose = require('mongoose');

var Schema = mongoose.Schema;

var settings = new Schema({
    id: Number,
    name:   String,
    value:  String,
});

var thing = mongoose.model('settings', settings);

module.exports = thing;
// export const roomsmongo = thing