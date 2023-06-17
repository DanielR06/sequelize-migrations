const { getAll, create, getOne, remove, update } = require('../controllers/brand.controllers');
const express = require('express');

const brandRouter = express.Router();

brandRouter.route('/')
    .get(getAll)
    .post(create);

brandRouter.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = brandRouter;
