//Define constants
const routes = require('express').Router();
const myController = require('../controllers/contacts.js');

//Define route for name function
//routes.get('/', myController.nameFunction);

//Define route for contacts function
routes.get('/contacts', myController.getData);

//Define route for one contact function
routes.get('/contact', myController.getOne);

module.exports = routes;