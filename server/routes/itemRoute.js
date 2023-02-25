const express = require('express');
const { AddITem, getSingleCategory } = require('../controllers/itemController');
const Router = express.Router();

Router.post('/',AddITem);
Router.get('/:category',getSingleCategory);

module.exports = Router;