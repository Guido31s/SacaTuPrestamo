$(document).ready(function () {
  //Se declara un constructor para conseguir los datos del usuario
  class Usuario {
    constructor(
      nombre,
      apellido,
      documento,
      email,
      telefono,
      monto,
      anios,
      cuotas,
      devolver
    ) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.documento = documento;
      this.email = email;
      this.telefono = telefono;
      this.monto = parseFloat(monto);
      this.anios = parseInt(anios);
      this.cuotas = parseInt(cuotas);
      this.devolver = devolver;
    }
  }
  //Se crea un array donde se almacenaran los usuarios
  const datosDeUsuario = [];

  //Utilizando jQuery.
  $("#formulario").submit(function (e) {
    e.preventDefault();

    let nombre = $("#nombre").val();
    let apellido = $("#apellido").val();
    let documento = $("#documento").val();
    let email = $("#email").val();
    let telefono = $("#telefono").val();
    let monto = $("#monto").val();
    let anios = $("#anios").val();
    let devolver = $("#monto").val() * 1.25;
    let cuotas = ($("#monto").val() * 1.25) / ($("#anios").val() * 12);

    datosDeUsuario.push(
      new Usuario(
        nombre,
        apellido,
        documento,
        email,
        telefono,
        monto,
        anios,
        cuotas,
        devolver
      )
    );

    $("#inputNombre").val(nombre);
    $("#inputApellido").val(apellido);
    $("#inputDocumento").val(documento);
    $("#inputEmail").val(email);
    $("#inputTelefono").val(telefono);
    $("#inputMonto").val(monto);
    $("#inputAños").val(anios);
    $("#inputDevolver").val(devolver);
    $("#inputCuotas").val(parseInt(cuotas));

    const datosJSON = JSON.stringify(datosDeUsuario);
    localStorage.setItem("guardarDatos", datosJSON);
    localStorage.getItem("guardarDatos");

    setTimeout($("#datos").fadeIn(1500), 2000);

    $("#cancelar").css("display", "block");
    $("#confirmar").css("display", "block");
  });

  //Animaciones de los botones.
  $("#confirmar").click(() => {
    $("#datos").fadeOut(500);
    $("#confirmar").hide();
    $("#formulario")[0].reset();
    $("#cancelar").hide();
  });

  $("#cancelar").click(() => {
    $("#confirmar").hide();
    $("#cancelar").hide();
    $("#datos").hide();
    $("#formulario")[0].reset();
  });
  //Animacion del TITULO
  $(".letraSize h1").slideUp(2000).slideDown(2000);
  $(".letraSize p").slideUp(1000).slideDown(1000);

  // jQuery con AJAX. Confirmacion del form.
  $("#formContacto").submit(function (e) {
    e.preventDefault();
    console.log("Envío realizado");
    const datosForm = {
      nombre: $("#nombreContacto").val(),
      Apellido: $("#apellidoContacto").val(),
      Email: $("#emailContacto").val(),
      Mensaje: $("#mensajeContacto").val(),
    };

    //Se resetea el Form
    $("#formContacto")[0].reset();

    $.ajax({
      method: "POST",
      url: "https://jsonplaceholder.typicode.com/posts",
      data: datosForm,
      success: function (data) {
        console.log("informacion recibida", data);
        $("#alerta").css("display", "block");
      },
      error: function (error) {
        console.log("Hubo un error en el envío");
      },
    });
  });
});
