
const express = require( 'express' );
const app = express();
const path = require( 'path' );

// Setup body parser to handle POST body
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
//Jokes Router
const jokesRouter = require('./routers/jokesrouter');
app.use('/songs', jokesRouter);

// let jokes = [
//     {
//       whoseJoke: "Danny",
//       jokeQuestion: "Why do scuba divers fall backwards out of boats?",
//       punchLine: "If they fell forwards they’d still be in the boat!"
//     },
//     {
//       whoseJoke: "Luke",
//       jokeQuestion: "Twofish are in a tank. What did one fish say to the other?",
//       punchLine: "Do you know how to drive this thing?"
//     },
//     {
//       whoseJoke: "Millie",
//       jokeQuestion: "What do you call a pile of cats?",
//       punchLine: "A meowntain!"
//     },
//     {
//       whoseJoke: "dEv",
//       jokeQuestion: "Why should you not play cards in the forest?",
//       punchLine: "Too many Cheetahs!"
//     },
//     {
//       whoseJoke: "Scott",
//       jokeQuestion: "I went to the zoo the other day, it had one dog...",
//       punchLine: "It was a shih tzu."
//     }
//   ];
//   //post jokes
//   app.post('/jokes', function(req, res) {
//     jokes.push(req.body);
//     res.sendStatus(200);
//   });

// send jokes
// app.get('/jokes', function(req, res) {
//   res.send(jokes);
// });
//Set up static PORT
const port = process.env.PORT || 5000;
app.use(express.static('server/public'));

// serve back static files
app.use(express.static('server/public'));

app.listen(port, function(){
  console.log('server running on: ', port);
}); // end spin up server
