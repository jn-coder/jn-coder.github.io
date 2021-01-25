$(document).ready(function() {
  $("form#age").submit(function(event) {
    event.preventDefault();
    console.log("Submit button pressed!");
    const age2 = parseInt($("#age1").val()); 
  if (age2 >= 18) {
    $('#old').show();
} else {
    $('#young').show();
  }
  });
});