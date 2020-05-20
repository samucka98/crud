const express = require('express');
const path = require('path');
const config = require('./config/config');

const app = express();

app.use('/', express.static(path.join(__dirname, 'public')));

app.listen(config.PORT, () => {console.log('Server running on port:', config.PORT)});