const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const commentariesController = require('../controllers/commentaries.js');
// const protectByApiKey = require('../middlewares/protectByEnvAPIKey');
const requireRequestBody = require('../middlewares/requireRequestBody.js');

router.get('/', asyncHandler(commentariesController.getCommentaries));
router.post(
    '/',
    requireRequestBody,
    asyncHandler(commentariesController.handlePost)
  );
router.delete('/:id', asyncHandler(commentariesController.delete));

module.exports = router;