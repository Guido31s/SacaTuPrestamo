$(document).ready(function () {
//Se declara un constructor para conseguir los datos del usuario
class Usuario {
    constructor(nombre, apellido, email, monto, pagar) {
            this.nombre = nombre;
            this.apellido = apellido;
            this.email = email;
            this.monto = parseFloat(monto);
            this.pagar = parseInt(pagar);
    }
   
    prestamoAceptado() {
            this.prestamo = true;
            console.log("Gracias por confiar en nosotros");
    }

}
//Se crea un array donde se almacenaran los usuarios
 const datosDeUsuario = [];
 
//Utilizando jQuery.
$("#formulario").submit(function (e) { 

e.preventDefault();

let nombre = $("#nombre").val();
let apellido = $("#apellido").val();
let email =$("#email").val();
let monto = $("#monto").val();
let pagar = $("#pagar").val();
let totalPagar = $("#monto").val() * 1.25;
let montoDevolver = ($("#monto").val() * 1.25) / ($("#pagar").val() * 12);

datosDeUsuario.push(new Usuario(nombre, apellido, email, monto, pagar));

for (const datos of datosDeUsuario) {
 
    $("#users").append(`
    <div id="datos">
    <div class="card card-body bg-white mt-3">
     <div class="form-group">
     <p>Nombre</p>
              <div class="input-group">
                <input type="text" class="form-control"placeholder="${datos.nombre}" disabled>
              </div>        
        </div>
        <div class="form-group">
        <p>Apellido</p>
              <div class="input-group">
                <input type="text" class="form-control"placeholder="${datos.apellido}" disabled>
              </div>
            </div>
        <div class="form-group">
        <p>Email</p>
              <div class="input-group">
                <input type="text" class="form-control"placeholder="${datos.email}" disabled>
              </div>
        </div>
        <p>Monto Solicitado</p>
        <div class="form-group">
              <div class="input-group">
                <input type="text" class="form-control"placeholder="${datos.monto}" disabled>
              </div>
     </div>
        <div class="form-group">
        <p>Años a pagar</p>
              <div class="input-group">
                <input type="text" class="form-control"placeholder="${datos.pagar}" disabled>
              </div>           
        </div>
        <div class="form-group">
        <p>Monto a devolver</p>
              <div class="input-group">
                <input type="text" class="form-control"placeholder="${totalPagar}" disabled>
              </div>        
        </div>
        <div class="form-group">
        <p>Cuotas por mes</p>
              <div class="input-group">
                <input type="text" class="form-control"placeholder="${parseInt(montoDevolver)}" disabled>
              </div>      
        </div>
    </div>
    `)
    $("#crearBoton").append(`<button id="ocultar" class="btn btn-block btn-success text-center">Ocultar Informacion</button>
    `)
    ;

}
const datosJSON = JSON.stringify(datosDeUsuario);
localStorage.setItem("guardarDatos", datosJSON);
localStorage.getItem("guardarDatos");
});

//Animaciones de los botones.
$("#crearBoton").click(() => { 
    $("#datos").slideToggle(1000)
    if ($("#ocultar").text() === "Ocultar Informacion") {
        $("#ocultar").text("Mostrar Informacion")
        $("#ocultar").animate({width: "48.69%"})

    } else {$("#ocultar").text("Ocultar Informacion")
    $("#ocultar").animate({width: "48.69%"}).animate({width: "100%"})};

});
//Animacion del TITULO
$(".letraSize h1").slideUp(2000).slideDown(2000);
$(".letraSize p").slideUp(1000).slideDown(1000);

// jQuery con AJAX. Confirmacion del form.
$("#formContacto").submit(function (e) {
  e.preventDefault();
  console.log("Envío realizado");
  const datosForm = {nombre: $("#nombreContacto").val(),
  Apellido: $("#apellidoContacto").val(),
  Email: $("#emailContacto").val(),
  Mensaje: $("#mensajeContacto").val()
};

//Se resetea el Form
$("#formContacto")[0].reset();


  $.ajax({
    method: "POST",
    url: "https://jsonplaceholder.typicode.com/posts",
    data: datosForm,
    success: function (data) {
      console.log("informacion recibida", data);
  
        $("#modalContacto").append(`<div class="alert alert-success text-center" role="alert">
        El formulario ha sido enviado con exito!
      </div>`)


    },
    error: function (error) {
      console.log("Hubo un error en el envío");
    },
  });
});
})