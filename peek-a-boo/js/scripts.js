$(document).ready(function() {
  $(".clickable").click(function() {
    $("#kitten-showing").toggle();
    $("#kitten-hidden").toggle();
  });
});