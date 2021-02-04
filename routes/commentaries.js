const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const commentariesController = require('../controllers/commentaries.js');

router.get('/', asyncHandler(commentariesController.getDevelopper));

module.exports = router;