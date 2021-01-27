$(document).ready(function()  {
  $("form#formone").submit(function() {
  event.preventDefault();
  $("#formone").hide();
  let listArray = [];
  let sortedArray = [];
  let sortedArrayUpper = [];
  const item1 =  $("#item1").val();
  const item2 = $("#item2").val();
  const item3 = $("#item3").val();
  if (item1 === "" || item2 === "" || item3 === "") {
    alert("Please fill out all fields");
    skip();
  } else listArray = listArray.concat(item1, item2, item3);
  sortedArray = listArray.sort();
  sortedArrayUpper = sortedArray.map(list => list.toUpperCase());
  sortedArrayUpper.forEach(function(thing) {
    $("#output").append("<li>" + thing + "</li>");
  });    
 });
});