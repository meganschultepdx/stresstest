$(document).ready(function() {
  $("#stressForm").submit(function(event) {
    event.preventDefault();

    var total = 0;
    $("input:checkbox[name=stress]:checked").each(function() {
      total += parseInt($(this).val());
    });
      if (total >= 10) {
        $("#testResponses3").show();
        $("#testResponses2, #testResponses1").hide();
      } else if (total >= 5) {
        $("#testResponses2").show();
        $("#testResponses1, #testResponses3").hide();
      } else {
        $("#testResponses1").show();
        $("#testResponses3, #testResponses2").hide();
      }

      });
    });
