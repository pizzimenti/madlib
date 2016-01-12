$(document).ready(function() {
  $('#blanks form').submit(function(event) {
var person1Input = $("input#person1").val();
var person2Input = $("input#person2").val();
var insultInput = $("input#insult").val();
var weatherInput = $("input#weather").val();
var bodypartInput = $("input#bodypart").val();
var toolnameInput = $("input#toolname").val();
var activityInput = $("input#activity").val();
var clothingInput = $("input#clothing").val();


    $('.person1').append(person1Input);
    $('.person2').append(person2Input);
    $('.insult').append(insultInput);
    $('.weather').append(weatherInput);
    $('.bodypart').append(bodypartInput);
    $('.toolname').append(toolnameInput);
    $('.activity').append(activityInput);
    $('.clothing').append(clothingInput);

    $('#story').show();

    event.preventDefault();
  });
});
