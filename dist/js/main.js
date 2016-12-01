/*
var cargaPag  = function (){
    var tokens = location.href.split("/");
    var html = tokens[tokens.length - 1];
    location.href = location.href.replace(html, '');
    console.log(location.href);
    mostrarEstudiantes();
}

$(document).ready(cargaPag);
*/

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
//            var nombre = "<ul>";
            var l = response.length;
//
            for(var i=0; i<l;i++){
                $('#estudiantes').append(plantilla.replace("**foto**", response[i].foto)
                    .replace("**nombre**", response[i].nombre)
                    .replace("**apellido**", response[i].apellido)
                    .replace("**edad**", response[i].edad));

            }

//
//
//            $("#nombre").html(nombre);
//            $("#apellido").html(apellido);
//            $("#edad").html(edad);
//            $("#foto").html(foto);
        }
    )
}

mostrarEstudiantes();
