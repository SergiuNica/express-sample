const express = require('express');
const path = require ('path');
const cookieParser = require ('cookie-parser');
const dbLayer = require('./config/db');
const app = express();
const rootRouter = require('./routes/root');
const usersRouter = require('./routes/users');
const numbersRouter = require('./routes/numbers');
const hbs = require('hbs');

const port = 9000;

app.set('view engine', 'hbs');
hbs.registerPartials(path.join(__dirname, 'views/partials'));

app.use(cookieParser());

app.use((req, res, next) => {
	if (req.cookies.vcount == undefined) {
		req.vcount = 1;
		res.cookie("vcount", 1);
	} else {
		req.vcount = parseInt(req.cookies.vcount) + 1;
		res.cookie("vcount", req.vcount);
	}
	next();
});

app.use('/users', usersRouter);
app.use('/numbers', numbersRouter);
app.use('/', rootRouter);

app.use('/inc',express.static(path.join(__dirname, 'inc')));

app.listen(port, 
    function() {
        dbLayer.init();
        return console.log(`Sample App ${port}!`)
    });