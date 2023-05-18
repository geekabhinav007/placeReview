const mongoose = require('mongoose')
const Schema = mongose.Schema;

const PlaceSchema = new Schema({
    title: String,
    price: String,
    description : String,
    location: String
});

module.exports = mongoose.model('Place', PlaceSchema);