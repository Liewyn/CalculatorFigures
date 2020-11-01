$(document).ready(function () {
  $(document).on("click", ".areaTria", function () {
    
    $.ajax({
      type: "POST",
      url: "/areaTriangulo",
      data: {
        base: $("#areaTriangulo").val(),
        altura: $("#triAltura").val(),
      },
      beforeSend: function (r) {},
      success: function (result) {
        $("#resulAreaaa").val(result)
      },
      error(r) {
        alert("Error");
      },
    });

  });

  $(document).on("click", ".periTria", function () {
    $.ajax({
      type: "POST",
      url: "/periTriangulo",
      data: {
        ladoa: $("#LadoA").val(),
        ladob: $("#LadoB").val(),
        ladoc: $("#LadoC").val(),
      },
      beforeSend: function (r) {},
      success: function (result) {
        $("#periResul").val(result);
      },
      error(r) {
        alert("Error");
      },
    });
  });

  $(document).on("click", ".periCirc", function () {
    $.ajax({
      type: "POST",
      url: "/periCirculo",
      data: { radio: $("#radioC").val() },
      beforeSend: function (r) {},
      success: function (result) {
        $("#showPerimetro").val(result);
      },
      error(r) {
        alert("Error");
      },
    });
  });

  $(document).on("click", ".areaCirc", function () {
    $.ajax({
      type: "POST",
      url: "/areaCirculo",
      data: { radio: $("#radioC").val() },
      beforeSend: function (r) {},
      success: function (result) {
        $("#showArea").val(result);
      },
      error(r) {
        alert("Error");
      },
    });
  });

  $(document).on("click", ".areaRect", function () {
    $.ajax({
      type: "POST",
      url: "/areaRect",
      data: { baseRect: $("#baseRec").val(), alturaRect: $("#altRec").val() },
      beforeSend: function (r) {},
      success: function (result) {
        $("#showAreaRect").val(result);
      },
      error(r) {
        alert("Error");
      },
    });
  });

  $(document).on("click", ".periRect", function () {
    if ($("#altRec").val() == "" || $("#baseRec").val() == "") {
      alert("Rellene ambos campos");
    } else {
      $.ajax({
        type: "POST",
        url: "/periRect",
        data: { baseRect: $("#baseRec").val(), alturaRect: $("#altRec").val() },
        beforeSend: function (r) {},
        success: function (result) {
          $("#showPeriRect").val(result);
        },
        error(r) {
          alert("Error");
        },
      });
    }
  });
});
