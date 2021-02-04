const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const skillsController = require('../controllers/skills.js');
// const protectByApiKey = require('../middlewares/protectByEnvAPIKey');
const requireRequestBody = require('../middlewares/requireRequestBody.js');

router.get('/', asyncHandler(skillsController.getSkills));

router.get('/:id', asyncHandler(skillsController.findOne));
router.post(
    '/',
    requireRequestBody,
    asyncHandler(skillsController.handlePost)
  );
  router.put(
    '/:id',
    requireRequestBody,
    asyncHandler(skillsController.update)
  );
  router.delete('/:id', asyncHandler(skillsController.delete));

  module.exports = router;