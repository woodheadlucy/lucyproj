const { analyseTone } = require('../models/watson');
exports.getAnalysis = (req, res, next) => {
  const text = 'hi';
  analyseTone(text)
    .then(analysis => {
      res.send({ analysis });
    })
    .next();
};
