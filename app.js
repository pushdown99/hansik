var express = require('express');
var request = require('request');
var moment  = require('moment');
var xlsx    = require('xlsx');

var app    = express();
var path   = require('path');
var server = require('http').createServer(app);
var port = process.env.PORT || 8085;

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

jsonlist.forEach(e => {
  console.log(e["한식"] + ": " + e["URL"]);
});

server.listen(port, () => { console.log('Server listening at port %d', port); });

app.get('/', function(req, res){
  res.render('index', {json: "'" + jsonlist + "'"});
})

app.get('/json', function(req, res){
  var workbook = xlsx.readFile("hansik.xlsx");
  var jsonlist = xlsx.utils.sheet_to_json(workbook.Sheets['menu'],{defval:""})

  jsonlist.forEach(e => {
    console.log(e["한식"] + ": " + e["URL"]);
  });
  res.send(JSON.stringify(result));
})

app.get('/menus/:menu', function(req, res){
  var menu = req.params.menu;
  res.send("");
})

