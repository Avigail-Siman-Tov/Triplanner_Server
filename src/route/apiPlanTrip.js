const router = require('express').Router();
const planTrip = require('../controller/planTripController');
const recommender = require('../controller/recommenderController');

router.get('/samesizekmeans', planTrip.sameSizeKMeans)
router.get('/recommender',recommender.recommendeCollaborativeFilterin)

module.exports = router;