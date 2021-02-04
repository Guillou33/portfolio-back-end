const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const developpersController = require('../controllers/developpers.js');

router.get('/', asyncHandler(developpersController.getDevelopper));


module.exports = router;