//Business logic












//User Interface logic
$(document).ready(function() {
    $("form#ping-pong").submit(function(event) {
      event.preventDefault();
      var year = parseInt($("input#number").val());
      var result = pingPong(number);
      $("#result").text(result);
    });
  });
