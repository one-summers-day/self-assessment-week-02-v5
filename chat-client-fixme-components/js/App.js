
var userSelected;
var userSelectedGroup = {};

var App = {
  initialize: function () {
    // Store initial value of messages.data
    let myAwesomeValue = Messages._data.length;
    // fetch messages and set up repeating fetch
    App.fetch();

    // WARNING: DO NOT MODIFY THE INTERVAL TO BE LESS THAN 1000ms
    // doing so will result in ALL CAMPUSES LOSING ACCESS to parse
    // and students will NOT BE ABLE TO TEST their code -- including YOU! // update every 10 seconds

    // Set-up Click Handler
    $('form.create').on('submit', App.handleSubmit);
  },

  handleSubmit: function(e) {
    e.preventDefault();

    var text = $('#message').val();
    var username = $('#username').val();

    Messages.create(text, username);

    $('.userInput').val('');
    App.fetch();
  },

  fetch: function() {
    Messages.fetch(MessagesView.render);
  }
};
