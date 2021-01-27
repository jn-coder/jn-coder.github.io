// Business Logic

let favThing = [];


// UI Logic
$(document).ready(function() {
  $("form#favorite").submit(function() {
    event.preventDefault();
    let topThree = [];
    let favThing = [$("#fav1").val(), $("#fav2").val(), $("#fav3").val(), $("#fav4").val(), $("#fav5").val()];
    topThree.push(favThing[0],favThing[1],favThing[2]);
    topThree.forEach(function(thing)  {
      $("#output").append("<li>" + thing + "</li>"); 
    });
  });
});

