const express = require('express');
const remediRouter = express.Router();

const remediController = require('../controller/controller');

remediRouter.put('/feelings/:id', remediController.updateFeelings)

remediRouter.get('/:id', remediController.show);
remediRouter.put('/:id', remediController.update);
remediRouter.delete('/:id', remediController.destroy);

remediRouter.get('/', remediController.index);
remediRouter.post('/', remediController.create);

module.exports = remediRouter;
