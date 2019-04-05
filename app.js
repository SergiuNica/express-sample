const express = require('express');
const app = express();
const port = 9000;

app.get('/', (req, res)=> res.send('Hello!'));
app.get('/home', (req, res)=> res.send('Welcome Home!'));
app.get('/user/:username', (req, res)=> res.send('Welcome User! - '+ req.params.username));

app.listen(port, 
    function() {
        return console.log(`Sample App ${port}!`)
    });