const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const developpersController = require('../controllers/developpers.js');
// const protectByApiKey = require('../middlewares/protectByEnvAPIKey');
const requireRequestBody = require('../middlewares/requireRequestBody.js');

router.get('/', asyncHandler(developpersController.findOne));
router.post('/auth', requireRequestBody, asyncHandler(developpersController.login));

module.exports = router;