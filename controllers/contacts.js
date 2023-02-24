const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getData = async(req, res, next) => {
    const result = await mongodb.getDb().db().collection('contacts').find();
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'app/json');
        res.status(200).json(lists);
    });
};

const getOne = async(req, res, next) => {
    const userNum = new ObjectId(req.params.id);
    const result = await mongodb
        .getDb()
        .db()
        .collection('contacts')
        .find({ _id: userId });
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'app/json');
        res.status(200).json(lists[0]);
    });
};

module.export = {getData, getOne}