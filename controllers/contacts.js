const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

//Define a function to get all contacts
const getData = async(req, res, next) => {
    const result = await mongodb
        .getDb()
        .db()
        .collection('Contacts')
        .find();
        result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists);
    });
};

//Define a function to get one contact by id
const getOne = async(req, res, next) => {
    const userNum = new ObjectId(req.params.id);
    const result = await mongodb
        .getDb()
        .db()
        .collection('Contacts')
        .find({ _id: userNum });
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists[0]);
    });
};

//Define a function to post one contact to contacts list
const addContact = 

module.exports = { getData, getOne, addContact }