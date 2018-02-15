const express = require('express');
const router = express.Router();
const pool = require('../public/modules/pool');

console.log('in jokes router');

router.get('/', function(request, response){
  const sqlText = 'SELECT * FROM jokes';
  pool.query(sqlText)
    // query was successful
    .then(function(result) {
      console.log('Get result:', result);
      response.send(result.rows);
    })
    // bad things could happen...
    .catch(function(error){
      console.log('Error on Get:', error);
      response.sendStatus(500);
    })
});
router.post('/', function(req, res){
    console.log(req.body);
    res.sendStatus(200);

});
module.exports = router;
