const mongoose = require('mongoose');
const {Schema} = mongoose;

const NoticeSchema = new Schema({
    title: {type: String, required: true},
    content: {type: String, required: true},
    notify: {type: String, required: true},
    images: []
});

module.exports = mongoose.model('notice', NoticeSchema);