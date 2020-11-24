const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

// settings
app.set('port', process.env.PORT || 4000);

// middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.use('/api/user', require('./routes/user.routes'));
app.use('/', (req, res) => {
	res.send({ message: 'Hello World' });
});

module.exports = app;
