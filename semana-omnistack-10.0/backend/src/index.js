const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');

const routes = require('./routes');
const { setupWebsocket } = require('./websocket');

const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect(
    'mongodb://mongo/express-mongo', 
    { useNewUrlParser: true }
    ).then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

app.use(cors())
app.use(express.json());    
app.use(routes);

server.listen(3333);

