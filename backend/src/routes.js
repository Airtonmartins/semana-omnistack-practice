const express = require('express');
const DevController = require('./controller/DevController')

const routes = express.Router();



routes.get('/', (req, res) => {
    return res.json({ message: `Hello ${req.query.name}` });
});

routes.post('/devs', DevController.store);

module.exports = routes;