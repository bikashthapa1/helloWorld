var express = require('express');
var app = express();

app.get('/', function(req, res){
   res.send("Hello world! gg This is my new feature");
}); 

console.log(process.env.PORT);
app.listen(process.env.PORT);