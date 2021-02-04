const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const interestsController = require('../controllers/interests.js');
// const protectByApiKey = require('../middlewares/protectByEnvAPIKey');
const requireRequestBody = require('../middlewares/requireRequestBody.js');

router.get('/', asyncHandler(interestsController.getinterests));
router.get('/:id', asyncHandler(interestsController.findOne));
router.post(
    '/',
    requireRequestBody,
    asyncHandler(interestsController.handlePost)
  );

  router.put(
    '/:id',
    requireRequestBody,
    asyncHandler(interestsController.update)
  );
  router.delete('/:id', asyncHandler(interestsController.delete));

module.exports = router;