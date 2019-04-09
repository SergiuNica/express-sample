const express = require('express');
const path = require ('path');
const cookieParser = require ('cookie-parser');
const app = express();
const port = 9000;

const usersRouter = require('./routes/users');

app.use(cookieParser());

// app.use((req, res, next) => {
// res.cookie('cookies', 'yum');
//     res.send(req.cookies.cookies);
// next();
// });

app.use('/users', usersRouter);

//app.use('/inc',express.static(path.join(__dirname, 'inc')));
//app.get('/', (req, res)=> res.send('Hello!'));
app.get('/hello', (req, res)=> res.send('Hey there!'));
app.get('/users/:userId/:email', (req, res)=> {
    let uid = parseInt(req.params.userId);
    let email = req.params.email;
    res.send(`user ${uid}'s email set to ${email}`);
}    );

app.get('/numbers/:from-:to', (req, res)=>{
    let a = parseInt(req.params.from);
    let b = parseInt(req.params.to);
    let html = '';
    if(a>b){
        let t= a;
        a=b;
        b=t;
    }
    for (let x=a;x<=b;x++){
        html+=`<div>${x}</div>`;
    }
    res.send(html);
});

app.listen(port, 
    function() {
        return console.log(`Sample App ${port}!`)
    });