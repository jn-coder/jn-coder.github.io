$(document).ready(function() {
  $("#triangle").submit(function(event) {
    event.preventDefault();
    const angle1 = parseInt($("#side1").val());
    const angle2 = parseInt($("#side2").val());
    const angle3 = parseInt($("#side3").val()); 
    const angle4 = angle1 + angle2 + angle3;
    if (angle4 !== 180) {
      $('#none').show();
    } else if (angle1 === angle2 && angle1 === angle3 && angle2 === angle3) {
      $('#equilateral').show();
    
    } else if (angle1 === angle2 || angle1 === angle3 || angle2 === angle3) {
      $('#iscoseles').show();

    } else {
      $('#scalene').show();
    }
  });
});    