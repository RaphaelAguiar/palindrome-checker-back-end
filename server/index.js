var app = require('./config/express')();

app.listen(8080,function(){
    console.log('Palindrome-checker-back-end is running...');
});