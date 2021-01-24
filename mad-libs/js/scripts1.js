$(document).ready(function() {
  $("#formOne").submit(function(event) {
    const adjective1Input = $("input#adjective1").val();
    const adjective2Input = $("input#adjective2").val();
    const adjective3Input = $("input#adjective3").val();
    const adjective4Input = $("input#adjective4").val();
    const animalInput = $("input#animal").val();
    const body1Input = $("input#body1").val();
    const body2Input = $("input#body2").val();
    const body3Input = $("input#body3").val();
    const moodInput = $("input#mood").val();
    const verb1Input = $("input#verb1").val();
    const verb2Input = $("input#verb2").val();
    const verb3Input = $("input#verb3").val();

    $(".adjective1").text(adjective1Input);
    $(".verb1").text(verb1Input);
    $(".body1").text(body1Input);
    $(".adjective2").text(adjective2Input);
    $(".verb2").text(verb2Input);
    $(".mood").text(moodInput);
    $(".adjective3").text(adjective3Input);
    $(".adjective4").text(adjective4Input);
    $(".body2").text(body2Input);
    $(".body3").text(body1Input);
    $(".verb3").text(verb3Input);
    $(".animal").text(animalInput);

    $("#story").show();

    event.preventDefault();
  });
});

