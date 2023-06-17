const express = require('express');
const productRouter = require('./product.router');
const brandRouter = require('./brand.router');
const categoryRouter = require('./category.router');
const router = express.Router();

router.use('/products', productRouter);

router.use('/brands', brandRouter);

router.use('/categories', categoryRouter);

module.exports = router;
