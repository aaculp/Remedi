const express = require('express');
const remediRouter = express.Router();

const remediController = require('../controller/controller');

remediRouter.get('/', () => console.log('working'));
remediRouter.post('/', () => console.log('working'));

remediRouter.get('/:id', () => console.log('working'));
remediRouter.put('/:id', () => console.log('working'));
remediRouter.delete('/:id', () => console.log('working'));

module.exports = remediRouter;
