var express = require('express');
var cors = require('cors');
var multer  = require('multer')
var upload = multer()
  
require('dotenv').config()

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/api/fileanalyse',upload.any(),(req,res)=>{
  var result = {name:req.files[0].originalname,type:req.files[0].mimetype,size:req.files[0].size};
  console.log(result);
  res.json(result);
})


const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
