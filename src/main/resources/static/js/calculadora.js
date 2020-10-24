$(document).ready(function () {
  //area triangulo
  $(document).on("click", ".areaTria", function () {
    var resul = trianguloArea($("#areaTriangulo").val(), $("#triAltura").val());
    $("#resulArea").val(resul);
  });

  //peri triangulo
  $(document).on("click", ".periTria", function () {
    var resul = trianguloPerimetro(
      $("#LadoA").val(),
      $("#LadoB").val(),
      $("#LadoC").val()
    );
    $("#periResul").val(resul);
  });

  //peri circulo
  $(document).on("click", ".periCirc", function () {
    var resul = perimetroCir($("#radioC").val());
    $("#showPerimetro").val(resul);
  });

  //area circulo
  $(document).on("click", ".areaCirc", function () {
    var resul = circuloArea($("#radioC").val());
    $("#showArea").val(resul);
  });

  //area rect
  $(document).on("click", ".areaRect", function () {
    var resul = ($("#altRec").val() * $("#baseRec").val());
    $("#showAreaRect").val(resul);
  });

  //peri rect
  $(document).on("click", ".periRect", function () {
    if($("#altRec").val() == "" || $("#baseRec").val() == ""){
      alert("Rellene ambos campos")
    }else{
      var resul = ( (2*$("#altRec").val()) + (2*$("#baseRec").val())  );
      $("#showPeriRect").val(resul);
    }
 
  });


});

const trianguloArea = (a, b) => {
  return (a * b) / 2;
};

const trianguloPerimetro = (a, b, c) => {
  return parseFloat(a) + parseFloat(b) + parseFloat(c);
};

const circuloArea = (r) => {
  return Math.PI * Math.pow(r, 2);
};

const perimetroCir = (r) => {
  return 2 * Math.PI * r;
};
