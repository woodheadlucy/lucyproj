const apiRouter = require('express').Router();
const { getAnalysis } = require('../controllers/tone');

apiRouter.post(getAnalysis);

module.exports = apiRouter;
