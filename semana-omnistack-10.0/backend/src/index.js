const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

mongoose.connect(
    'mongodb://mongo/express-mongo', 
    { useNewUrlParser: true }
    ).then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

app.use(cors())
app.use(express.json());    
app.use(routes);

app.listen(3333);

