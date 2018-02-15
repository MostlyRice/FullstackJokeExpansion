
const express = require( 'express' );
const app = express();
const path = require( 'path' );
const jokes = require ('./router/jokesRouter');
// Setup body parser to handle POST body
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// send jokes
app.use('/jokes',jokes);
//Set up static PORT
const port = process.env.PORT || 5000;
app.use(express.static('server/public'));

// serve back static files
app.listen(port, function(){
  console.log('server running on: ', port);
}); // end spin up server
