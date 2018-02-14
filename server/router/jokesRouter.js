const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

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
})

router.post('/add', (request, response) function{
  const jokes = request.body;
  console.log('Add jokes:', jokes);

  const sqlText = `INSERT INTO Jokes
      (whoseJoke, jokeQuestion, punchLine, funniness, dateAdded)
      VALUES ($1, $2, $3, $4, $5,)`;


router.post('/', (req, res) function{
    console.log(req.body);
    res.sendStatus(200);

});

router.get('/', (req, res) function{
    res.send(jokes)
});

module.exports.router;
