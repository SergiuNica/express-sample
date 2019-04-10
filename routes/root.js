const router= require('express').Router();
const pageModel = require('../model/page');
const navmenuModel = require('../model/navmenu');

const pageRoute = async (pageName, req, res, next) =>{
    let page = await pageModel.getPage(pageName);
    let navmenu = await navmenuModel.getNavmenu();
    if(page[0]){
    page = page[0];
    return res.render('root', {title: page.title, page: page, nav: navmenu});
    } else {
        next();
    }
}

router.get('/', async (req, res, next)=> {
    pageRoute('home', req,res,next )
});

router.get('/:page', async (req, res, next)=> {
    let p = req.params.page.toLowerCase();
    pageRoute(p, req, res, next)   
});

router.get('/', (req, res)=> res.send('Welcome Home!'));
router.get('/hello', (req, res)=> res.send('Hey there!'));

module.exports = router;
