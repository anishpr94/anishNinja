var express = require("express");
var app     = express();
var path    = require("path");

app.use(express.static('public'))
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/myPortal.html'));
  //__dirname : It will resolve to your project folder.
});

// app.get('/about',function(req,res){
//   res.sendFile(path.join(__dirname+'/about.html'));
// });

// app.get('/sitemap',function(req,res){
//   res.sendFile(path.join(__dirname+'/sitemap.html'));
// });
app.listen(process.env.PORT || 3000, function(){
  console.log('listening on', http.address().port);
});

console.log("Running at Port 3000");