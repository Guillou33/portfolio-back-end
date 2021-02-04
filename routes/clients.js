const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const clientsController = require('../controllers/clients.js');
// const protectByApiKey = require('../middlewares/protectByEnvAPIKey');
const requireRequestBody = require('../middlewares/requireRequestBody.js');

router.get('/', asyncHandler(clientsController.getClients));
router.get('/:id', asyncHandler(clientsController.findOne));
router.post(
    '/',
    requireRequestBody,
    asyncHandler(clientsController.handlePost)
  );

  router.put(
    '/:id',
    requireRequestBody,
    asyncHandler(clientsController.update)
  );
  router.delete('/:id', asyncHandler(clientsController.delete));

module.exports = router;