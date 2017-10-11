const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();

app.use(bodyParser.json());


// function filter( req, res, next) {
//  axios.post('http://localhost:3000/api/x').then 
//  (response => {
//     console.log('hi');
//     req.body.message = req.body.message +
//     response.data.name;
//     next();
//  });
// }
app.post('/api/checkin', function(req,res){
  return res.json({message: 'hey'});
  axios.post('http://192.168.1.18:3005/api/checkin').then(response => {
    res.json({ message: response.data.message + 'Pink Ranger' })
  })
})

app.post('/api/x', function(req,res){
  res.json({message: ',next'});
})

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
