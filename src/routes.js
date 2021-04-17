const express = require('express');
const routes = express.Router();

const TimeStampController = require('./controllers/TimeStampController');

routes.get('/', TimeStampController.getUnixAndUtcFromCurrentDate);
routes.get('/:date', TimeStampController.getUnixAndUtcFromGivenDate);

module.exports = routes;
