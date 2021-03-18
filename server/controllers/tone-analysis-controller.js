const ToneAnalyzerV3 = require('ibm-watson/tone-analyzer/v3');
const { IamAuthenticator } = require('ibm-watson/auth');

require('dotenv').config({
  silent: true,
});

const toneAnalyzer = new ToneAnalyzerV3({
  version: '2017-09-21',
  authenticator: new IamAuthenticator({
    apikey: process.env.TONE_ANALYZER_IAM_APIKEY,
  }),
  url: process.env.TONE_ANALYZER_URL,
});

exports.getToneOfText = async(req, res, next) => {
  try {
    const toneParams = {
      toneInput: { text: req.body.content },
      contentType: 'application/json',
    };
    const { result } = await toneAnalyzer.tone(toneParams);
    res.json(result);
  } catch (error) {
    console.log(error);
    next({ status: 400, message: 'Missing content field on body'});
  }
};
