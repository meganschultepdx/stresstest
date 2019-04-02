$(document).ready(function() {
  $("#stressForm").submit(function(event) {
    event.preventDefault();

    $("input:checkbox[name=warningSigns]:checked").each(function() {
    var warningSigns = $(this).val();
    $("input:checkbox[name=symptoms]:checked").each(function() {
      var symptoms = $(this).val();

    if (warningSigns === "window" && warningSigns === "sleep" && symptoms === "sick") {
      $("#testResponses1").show();
      $("#testResponses2, #testResponses3").hide();
    } else if (warningSigns === "emotion" || warningSigns === "anger" || symptoms === "brain") {
      $("#testResponses2").show();
      $("#testResponses1, #testResponses3").hide();
    } else {
      $("#testResponses3").show();
      $("#testResponses1, #testResponses2").hide();
    }

  });
    });
  });
});
