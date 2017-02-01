var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(function(err, req, res, next) {

    // error handling logic
    //console.error(err.stack);
    res.status(500).send('invalid data');

});

app.get('*', function (req, res){
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
});

app.post('/authenticate', function(req, res){
    var data = req.body;
    var result =  {OK: false, message: ''};

    if(data.username && data.password){
        if(data.username === 'test' && data.password === 'test'){
            result.OK = true;
            result.message = 'success';
        }
        else{
            result.message = 'invalid username and/or password';
        }
    }
    else{
        result.message = 'username and password are required';
    }

    res.json(result);
});


app.listen(PORT, function(){
    console.log('running at port ' + 3000);
});

