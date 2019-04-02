$(document).ready(function() {
  $("$stressForm").submit(function(event) {
    event.preventDefault();

    $("input:checkbox[name=warningSigns]:checked").each(function() {
      var warningSigns = $(this).val();

    if (warningSigns === "window" && warningSigns === "sleep" && symptoms === "sick") {
      $("#testResponses1").show();
      $("#testResponses2, testResponses3").hide();
    } else if ()

  });

});
