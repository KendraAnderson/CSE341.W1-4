//Define constants
const routes = require('express').Router();
const myController = require('../controllers/contacts');

//Define route for name function
//routes.get('/', myController.nameFunction);

//Define route for contacts function
routes.get('/', myController.getData);

//Define route for one contact function
routes.get('/', myController.getOne);

module.exports = routes;