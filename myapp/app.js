var app = require('./config/express')();
var passport = require('./config/passport')(app);

var index = require('./routes/index')(passport);
app.use('/', index);
var posting = require('./routes/posting')(app);
var welcome = require('./routes/welcome')(app);
var community = require('./routes/community')(app);

app.listen(3003, function(){
    console.log('Connected 3003 port!!!');
});
