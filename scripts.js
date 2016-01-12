$(document).ready(function() {
  $('#blanks form').submit(function(event) {
var person1Input = $("input#person1").val();
var person2Input = $("input#person2").val();
var insultInput = $("input#insult").val();
var weatherInput = $("input#weather").val();
var bodypartInput = $("input#bodypart").val();
var toolnameInput = $("input#toolname").val();
var activityInput = $("input#activity").val();


    $('.person1').append("TEST");
    $('.person2').append("TEST");
    $('.insult').append("TEST");
    $('.weather').append("TEST");
    $('.bodypart').append("TEST");
    $('.toolname').append("TEST");
    $('.activity').append("TEST");

    $('#story').show();

    event.preventDefault();
  });
});
