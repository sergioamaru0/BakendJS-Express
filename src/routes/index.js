const express = require('express');

const userRoute = require('./user.route');

function routeApi(app) {
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/users', userRoute);
}

module.exports = routeApi;