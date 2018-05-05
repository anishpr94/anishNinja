var express = require("express");
var app     = express();
var path    = require("path");
var bodyParser = require('body-parser');

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
  console.log('listening on',this.address().port);
});

app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true })); 

console.log("Running at Port 3000");


var minutes = 20, the_interval = minutes * 60 * 1000;

setInterval(function() {
var options = {
host: 'dry-anchorage-70342.herokuapp.com'
};
http.get(options, function (http_res) {
console.log("Sent http request to myapp.herokuapp.com to stay awake.");
});
}, the_interval);

app.post('/form', function(req, res){
  // res.setHeader('Content-Type', 'text');

  //mimic a slow network connection
 
      // res.send(JSON.stringify({
      //     name: req.body.name || null,
      //     email: req.body.email || null,
      //     message: req.body.message || null
      // }));
     

 
  var nodemailer = require('nodemailer');
  console.log('gmai111l ready');
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'anishpr94@gmail.com',
      pass: 'herokupass'
    }
  });
  console.log('gmail ready');
  
  var mailOptions = {
    from: req.body.email,
    to:  'anishpr94@gmail.com',
    subject: 'Response from gypsy camp',
    text: req.body.message
  };
  console.log(mailOptions);
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: Anish ' + info.response);
      res.send('Message Sent Successfully! Thank you!');
    }
  });

  //debugging output for the terminal
  console.log('you posted: First Name: ' + req.body.name + ', Last Name: ' + req.body.email);
});

var a ='';
app.post('/gitUpdate', function(req, res){
  res.setHeader('Content-Type', 'application/json');

      res.send(
         a += req.body
     );
});