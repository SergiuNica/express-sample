const router= require('express').Router();

router.get('/', (req, res)=> {
    return res.render('root', {title:'First express app'});
});
router.get('/', (req, res)=> res.send('Welcome Home!'));
router.get('/hello', (req, res)=> res.send('Hey there!'));

module.exports = router;
