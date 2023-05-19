const mongoose = require('mongoose')
const Schema = mongose.Schema;

const ImageSchema = new Schema({
    url: String,
    filename: String
});

ImageSchema.virtual('thumbnail').get(function () {
    return this.url.replace('/upload', '/upload/w_200');
});

const opts = { toJSON: { virtuals: true } };


module.exports = mongoose.model('Campground', CampgroundSchema);