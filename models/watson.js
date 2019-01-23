//WATSON FILE IN MODELS FOLDER
const ToneAnalyzerV3 = require(‘’);
const { } = require('./config')
const toneAnalyzer = new Toneanalyzer({
    version: ’’,
    api_key: ’’,
    url: ''
})
const text = ‘’
const analyseTone = text => {
    const toneParams = {
        tone_input: { text },
        content_type: 'application/json'
    };
    return new Promise((resolve, reject) => {
        toneAnalyzer.tone(toneParams, function (error, toneAnalysis) {
            if (err) reject(err);
            else resolve(toneAnalysis);
        })
    })
}
analyseTone(text).then(analysis => console.log(analysis)).catch(err => console.log(err)) //analyseTone(text) returns a PROMISE;
module.exports = { analyseTone }
