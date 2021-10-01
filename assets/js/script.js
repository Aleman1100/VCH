//Tooltip

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

//Descatar al pasar el mouse

function myFunction1() {
    document.getElementById("destacado1").classList.add("descatadoP");
  }

function myFunction2() {
    document.getElementById("destacado2").classList.add("descatadoP");
  }

function myFunction3() {
    document.getElementById("destacado3").classList.add("descatadoP");
  }


//Alerta por demora en carga de pagina
  function CargaCompleta() {
    alert("Gracias por la espera, el formulario se encuentra listo");
  }