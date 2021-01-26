// Business Logic
let stacee = 0;
let lonny = 0;
let drew = 0;
let sherrie = 0;
let constance = 0; 

// User Interface Logic

$(document).ready(function() {
  $("form#quiz").submit(function() {
    event.preventDefault();
    const hair = $("input:radio[name=hair]:checked").val();
    const song = $("input:radio[name=song]:checked").val();
    const life = $("input:radio[name=life]:checked").val();
    const favorite = $("input:radio[name=favorite]:checked").val();
    const work = $("input:radio[name=work]:checked").val();
    const name = $("input:radio[name=name]:checked").val();

    if (hair === "brown") {
    stacee = stacee + 1;
    } else if (hair === "black") {
      lonny = lonny + 1;
    } else if (hair === "curly") {
      sherrie = sherrie + 1;
    } else if (hair === "shaggy") {
      drew = drew + 1;
    } else constance = constance + 1;

    if (song === "paradise") {
      stacee = stacee + 1;
    } else if (song === "built") {
      lonny = lonny + 1;
    } else if (song === "hero") {
      drew = drew + 1;
    } else if (song === "stop") {
      drew = drew + 1;
    } else if (song === "love") {
      sherrie = sherrie + 1;
    } else constance = constance + 1;

    if (life === "idol") {
      stacee = stacee + 1;
    } else if (life === "gay") {
      lonny = lonny + 1;
    } else if (life === "oklahoma") {
      sherrie = sherrie + 1;
    } else if (life === "chick") {
      drew = drew + 1;
    } else constance = constance + 1;

    if (favorite === "dennis") {
      lonny = lonny + 1;
    } else if (favorite === "drew") {
      sherrie = sherrie + 1;
    } else if (favorite === "sherrie") {
      drew = drew + 1;
    } else if (favorite === "constance") {
      stacee = stacee + 1;
    } else constance = constance + 1;

    if (work === "idol") {
      stacee = stacee + 1;
    } else if (work === "bar") {
      lonny = lonny + 1;
    } else if (work === "strip club") {
      sherrie = sherrie + 1;
    } else if (work === "boy band") {
      drew = drew + 1;
    } else constance = constance + 1;

    if (name === "stacee") {
      stacee = stacee + 1;
    } else if (name === "drew") {
      drew = drew + 1;
    } else if (name === "constance") {
      constance = constance + 1;
    } else sherrie = sherrie + 1;

    if (stacee > lonny && stacee > drew && stacee > sherrie && stacee > constance) {
      alert('You are Stacee Jaxx, 1 of 2 hot guys in the movie! He is a bit weird but he is a rock idol! You have your own style and you love rock and roll music! You are very hott and you are outgoing');
    } else if (lonny > stacee && lonny > drew && lonny > sherrie && lonny > constance) {
      alert('You are Lonny, the guy who is gay with Dennis (I think that is how it turned out) and you are outgoing and weird and you are very unique and work at the bar.');
    } else if (drew > stacee && drew > lonny && drew > sherrie && drew > constance) {
      alert('You are Drew! You dont like the rap (I dispise rap) and you fell head over heels for Sherrie and you love rock and roll and you are good at playing the guitar and singing.');
    }
    

  });
});