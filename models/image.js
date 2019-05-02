const mongoose = require('mongoose');
const {Schema} = mongoose;

const ImageSchema = new Schema({
    fileName: {type: String, required: true},
    type: {type: String, required: true},
    base64: {type: String, required: true}
});

module.exports = mongoose.model('image', ImageSchema);