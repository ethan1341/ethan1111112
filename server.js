var express = require("express");
var cors = require("cors");
const app = express();
const jsonData = require('./cards.json');
app.use(require('body-parser').json({extended: true}));
app.use(cors());
app.get('/cards',function(req,res,next){
  console.log('cardsdata', jsonData)
  res.send(jsonData);
});

app.get('/cards',function(req,res,next){
  console.log('hit')
  res.send(jsonData);
});

app.listen(9000,function(){
  console.log('ayy');
})
