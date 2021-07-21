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
 
    $("#users").fadeIn(1500).append(`
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
    $("#crearBoton").append(`<button id="ocultar" class="btn btn-block btn-success">Ocultar Informacion</button>
    `)
    ;

}
const datosJSON = JSON.stringify(datosDeUsuario);
localStorage.setItem("guardarDatos", datosJSON);
localStorage.getItem("guardarDatos");

});

$("#crearBoton").click(() => { 
    $("#datos").toggle(1000)
    if ($("#ocultar").text() === "Ocultar Informacion") {
        $("#ocultar").text("Mostrar Informacion")
    } else {$("#ocultar").text("Ocultar Informacion")};

});
$(".letraSize h1").slideUp(2000).slideDown(2000);

$(".letraSize p").slideUp(1000).slideDown(1000);
})

