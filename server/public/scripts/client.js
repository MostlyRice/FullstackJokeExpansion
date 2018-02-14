console.log('client.js sourced');

class joke {
  constructor(whoseJoke, questionIn, punchLine){
    this.whoseJoke = whoseJoke;
    This.questionIn= questionIn;
    this.punchLine= punchLine;
  }
}
$(onReady);
function onReady(){
  console.log('Dom Ready');
  getJokes();

  $('#addjokebutton').on('click', sendJokes);
}
function sendJokes() {
  let joker = $('#whoseJokeIn').val();
  let joke = $('#questionIn').val();
  let punch = $('#punchlineIn').val();

  let joketoSend = new joke(Joker, joke, punch);
  $.ajax({
    type: 'POST',
    url: '/jokes',
    success: function(response) {
      console.log("success on jokes GET!", result)
      let joker = $('#whoseJokeIn').val('');
      let joke = $('#questionIn').val('');
      let punch = $('#punchlineIn').val('');
      //display
      getjokes();
    },
    error: function() {
      console.error("failure on jokes GET!")
    }
  })
}

  function getJokes() {
      $.ajax({
          method: 'GET',
          url: '/jokes',
          success: function(response) {
              $('#outputDiv').empty();

              for (let i=0; i < response.length; i++) {
                  const joke = response[i];
                  $('#outputDiv').prepend('<div class="joke-block"><p class="joke-whoseJoke">' + joke.whoseJoke + '</p><p class="joke-question">' + joke.jokeQuestion + '</p><p class="joke-punchLine">' + joke.punchLine + '</p></div>');
              }
          }
      });
  }
