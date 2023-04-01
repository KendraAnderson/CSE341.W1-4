//Define constants
const routes = require('express').Router();
const myController = require('../controllers');

//Define route for name function
routes.get('/', myController.nameFunction);

//Define route for another function
//routes.get('/another', myController.anotherFunction);

module.exports = routes;