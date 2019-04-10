/* eslint-disable quotes */
const router = require('express').Router();
const pageController = require('../controllers/pagecontrol');

router.get('/', async (req, res, next) => {
	pageController.pageRoute('home', req, res, next);
});

router.get('/:page', async (req, res, next) => {
	let p = req.params.page.toLowerCase();
	pageController.pageRoute(p, req, res, next);
});

// router.get('/', (req, res)=> res.send('Welcome Home!'));
// router.get('/hello', (req, res)=> res.send('Hey there!'));

module.exports = router;
