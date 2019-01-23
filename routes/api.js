const apiRouter = require('express').Router();
const { getAnalysis } = require('../controllers/tone');

apiRouter.router('/').post(getAnalysis);
module.exports = apiRouter;
