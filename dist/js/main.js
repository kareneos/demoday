





















































var cargaPag  = function (){
    mostrarEstudiantes();
    $(".accordion").click(mostrarAcordeon);
    $(".puntos").click(seleccionarPuntaje);
}

$(document).ready(cargaPag);

var mostrarEstudiantes = function(){
    $.getJSON(
        "http://localhost:3000/estudiantes.json",

        function(response){

            var plantilla = "<div>" +
                "<img src='**foto**'>" +
                "<p>Nombre: **nombre**</p>" +
                "<p>Apellido: **apellido**</p>" +
                "<p>Edad: **edad**</p>" +
                "</div>";

            var l = response.length;

            for(var i=0; i<l;i++){
                $('#estudiantes').append(plantilla.replace("**foto**", response[i].foto)
                    .replace("**nombre**", response[i].nombre)
                    .replace("**apellido**", response[i].apellido)
                    .replace("**edad**", response[i].edad));

            }
        }
    )
}

var mostrarAcordeon = function(){
    for (var i = 0; i < $(this).length; i++) {
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
    }
}

var seleccionarPuntaje = function(){
    $(this).toggleClass("seleccionado");
    $(this).siblings().removeClass("seleccionado");
}
