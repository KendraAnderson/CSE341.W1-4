//Define constants

const routes = require('express').Router();

routes.use('/', require('./contacts'));

module.exports = routes;
