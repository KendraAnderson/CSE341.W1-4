//Define constants

const routes = require('express').Router();
const myController = require('../controllers/contacts');

//Define route for name function
routes.get('/', myController.getData);

//Define route for contacts function
routes.get('/:id', myController.getOne);

module.exports = routes;