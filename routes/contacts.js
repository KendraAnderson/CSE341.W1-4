//Define constants

const routes = require('express').Router();
const myController = require('../controllers/contacts');

//Define route for name function
routes.get('/contacts', myController.getData);

//Define route for contacts function
routes.get('/:id', myController.getOne);

//Define a route for posting to contacts
//routes.

module.exports = routes;