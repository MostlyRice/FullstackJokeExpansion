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
router.post('/', (req, res) => {
  console.log('req.body: ', req.body);
  const queryText = 'INSERT INTO jokes(authors_id, jokequestion, punchline, funniness) VALUES ($1, $2, $3, $4)';
  // use prepared statements!!!!!!!!!
  pool.query(queryText,[1, req.body.jokeQuestion, req.body.punchLine, req.body.funniness]) // TODO: hardcoded 1 for an int for authors_id
  .then((result) => {
    console.log('query results: ', result);
    res.sendStatus(201);
  })
  // error handling
  .catch((err) => {
    console.log('error making insert query:', err);
    res.sendStatus(500);
  });
});

router.post('/', function(req, res){
  console.log(req.body);
  res.sendStatus(200);
});
//DELETE - only one joke
router.delete('/:id', (req,res) => {
  console.log('ID from request: ', req.params.id);
  //SQL query
  const queryText = 'DELETE FROM jokes WHERE id=$1';
  pool.query(queryText, [req.params.id])
  // runs on successful query
  .then((result) => {
    console.log('query results: ', result);
    res.sendStatus(200);
  })
  // error handling
  .catch((err) => {
    console.log('error making select query:', err);
    res.sendStatus(500);
  });
});

module.exports = router;
