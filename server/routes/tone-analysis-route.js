// import dependencies and initialize the express router
const express = require('express');
const ToneController = require('../controllers/tone-analysis-controller');

const router = express.Router();

// define routes
router.post('/', ToneController.getToneOfText);

module.exports = router;
