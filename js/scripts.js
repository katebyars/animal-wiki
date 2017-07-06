$(document).ready(function() {
    $("#formOne").change(function(event) {
      // var animal = $("input:radio[name=animal]:checked").val();
      var animal = $("#animal").val();
    if (animal === "sloths") {
      $('#sloths2').show();
      $("#capybaras2").hide();
      $("#manatees2").hide();
    } else if (animal === "manatees") {
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
