const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

const moongose = require('./database');

//Settings
app.set('port', 3000);
//Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
//Routes
app.use('/api/tiburon-app', require('./routes/user.routes'));
//Starting the the server
app.listen(app.get('port'), () => {
    console.log(`App listening on port ${app.get('port')}`)
});
