//WATSON FILE IN MODELS FOLDER
const ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');
const { iam_apikey, url } = require('../config');

const toneAnalyzer = new ToneAnalyzerV3({
  version_date: '2017-09-21',
  iam_apikey,
  url
});

const text = 'omg what';
const analyseTone = text => {
  const toneParams = {
    tone_input: { text },
    content_type: 'application/json'
  };
  return new Promise((resolve, reject) => {
    toneAnalyzer.tone(toneParams, function(error, toneAnalysis) {
      if (error) reject(error);
      else resolve(toneAnalysis);
    });
  });
};
analyseTone(text)
  .then(analysis => console.log(analysis))
  .catch(err => console.log(err)); //analyseTone(text) returns a PROMISE;
module.exports = { analyseTone };
