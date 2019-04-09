const express = require('express');
const path = require ('path');
const cookieParser = require ('cookie-parser');
const app = express();
const port = 9000;

app.set('view engine', 'hbs');

const rootRouter = require('./routes/root');
const usersRouter = require('./routes/users');
const numbersRouter = require('./routes/numbers');


//app.use(cookieParser());

// app.use((req, res, next) => {
// res.cookie('cookies', 'yum');
//     res.send(req.cookies.cookies);
// next();
// });

app.use('/users', usersRouter);
app.use('/numbers', numbersRouter);
app.use('/', rootRouter);

app.use('/inc',express.static(path.join(__dirname, 'inc')));

app.listen(port, 
    function() {
        return console.log(`Sample App ${port}!`)
    });