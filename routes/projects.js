const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const projectsController = require('../controllers/projects.js');
// const protectByApiKey = require('../middlewares/protectByEnvAPIKey');
const requireRequestBody = require('../middlewares/requireRequestBody.js');

router.get('/', asyncHandler(projectsController.getProjects));

router.get('/:id', asyncHandler(projectsController.findOne));
router.post(
    '/',
    requireRequestBody,
    asyncHandler(projectsController.handlePost)
  );

  router.put(
    '/:id',
    requireRequestBody,
    asyncHandler(projectsController.update)
  );
  router.put(
    '/client/:id',
    requireRequestBody,
    asyncHandler(projectsController.updateClient)
  );
  router.delete('/:id', asyncHandler(projectsController.delete));

module.exports = router;