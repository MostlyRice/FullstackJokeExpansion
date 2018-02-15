console.log('client.js sourced');

class joke {
  constructor(whosejoke, questionIn, punchline){
    this.whosejoke = whosejoke;
    This.questionIn= questionIn;
    this.punchline= punchline;
  }
}
$(onReady);
function onReady(){
  console.log('Dom Ready');
  getJokes();

  $('#addjokebutton').on('click', sendJokes);
}
function sendJokes() {
  let joker = $('#whosejokeIn').val();
  let joke = $('#questionIn').val();
  let punch = $('#punchlineIn').val();
  let funny = $('#funninessIn').val();
  let joketoSend = new joke(Joker, joke, punch);
  $.ajax({
    type: 'POST',
    url: '/jokes',
    success: function(response) {
      console.log("success on jokes GET!", result)
      let joker = $('#whosejokeIn').val('');
      let joke = $('#questionIn').val('');
      let punch = $('#punchlineIn').val('');
      let funniness = new Number( $('#funninessIn').val(''); )
      //display
      getjokes();
    },
    error: function() {
      console.error("failure on jokes GET!")
    }
  })
}
//grabs jokes from the router/server
  function getJokes() {
      $.ajax({
          method: 'GET',
          url: '/jokes',
          success: function(response) {
            console.log(response);
              $('#outputDiv').empty();
              for (let i=0; i < response.length; i++) {
                  const joke = response[i];
                  $('#outputDiv').prepend('<div class="joke-block"><p class="joke-whosejoke">' + joke.whosejoke + '</p><p class="joke-question">' + joke.jokequestion + '</p><p class="joke-punchline">' + joke.punchline + '</p><p class="joke-funniness">' + joke.funniness'</p></div>');
              }
          }
      });
  }
  //delete jokes
  function deleteJoke(id){
      $.ajax({
          method: 'DELETE',
          url: '/jokes/' + id,
          success: function(response) {
              console.log('delete joke: ', response);
              getJokes();
          }
      });
  }
