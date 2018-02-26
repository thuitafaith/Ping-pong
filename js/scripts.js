//Business logic
var pingPong = function(number) {
  for(var a=0; a<=number.length; a+=1) {
    if (number % 15=== 0){
      return true;
    } else if (number % 5=== 0) {
      return true;
    } else if(number % 3=== 0) {
      return true;
    }

    };
  };

//User Interface logic
$(document).ready(function() {
    $("form#ping-pong").submit(function(event) {
      event.preventDefault();
      var number = parseInt($("input#number").val());
      var result = pingPong(number);
      $("#result").text(result);
    });
  });
