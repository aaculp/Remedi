const express = require('express');
const remediRouter = express.Router();

const remediController = require('../controller/controller');

remediRouter.get('/', remediController.index);
remediRouter.post('/', remediController.create);

remediRouter.get('/:id', remediController.show);
remediRouter.put('/:id', remediController.update);
remediRouter.put('/feelings/:id', remediController.updateFeelings)
remediRouter.delete('/:id', remediController.destroy);

module.exports = remediRouter;
