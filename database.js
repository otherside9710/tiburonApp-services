const mongoose = require('mongoose');

const URI = 'mongodb://52.14.94.46/tiburon-app';

mongoose.connect(URI)
    .then(db => console.log('DB OK!'))
    .catch(err => console.error(err));

module.exports = mongoose;