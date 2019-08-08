const express = require('express');
const DevController = require('./controller/DevController');
const LikeController = require('./controller/LikeController');

const routes = express.Router();



routes.get('/', (req, res) => {
    return res.json({ message: `Hello ${req.query.name}` });
});

routes.post('/devs', DevController.store);
routes.post('/devs/:devId/likes', LikeController.store);

module.exports = routes;