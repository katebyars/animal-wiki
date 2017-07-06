$(document).ready(function() {
    $("#formOne").change(function(event) {
      var animal = $("#animal").val();
    if (animal === "1") {
      $('#sloths2').show();
    } else if (animal === "2") {
      $('#manatees2').show();
    } else {
      $('#capybaras2').show();
    }
    });
  });

  // var animal = $("input:radio[name=animal]:checked").val();
  //
  //   if ("sloths"){
  //   $("#sloths2").toggle();
  // } else if (animal === "manatees")  {
  //   $("#manatees2").show();
  // } else (animal === "capybaras") {
  //   $("capybaras2".show();
  // }
