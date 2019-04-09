const router= require('express').Router();
const db = require('../config/db.js');

// async function getUsers(){
//     let connection = await db.getConnection();
//     const rows = await connection.query("SELECT * FROM user");
//     connection.end();
//     return rows;
// }

async function getPage(pagekey){
    let connection = await db.getConnection();
    const rows = await connection.query("SELECT * FROM page WHERE pageKey = ?", [pagekey]);
    connection.end();
    return rows;
}

router.get('/', async (req, res)=> {
    
    let page = await getPage('home');
    page = page[0];
    //let users = await getUsers();
    //console.log(page);
    return res.render('root', {title: page.title, page: page});
});

router.get('/:page', async (req, res, next)=> {
    let p= req.params.page.toLowerCase();
    let page = await getPage(p);
    if(page[0] !==undefined){
    page = page[0];
    return res.render('root', {title: page.title, page: page});
    } else {
        next();
    }        
});

router.get('/', (req, res)=> res.send('Welcome Home!'));
router.get('/hello', (req, res)=> res.send('Hey there!'));

module.exports = router;
