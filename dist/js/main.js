var cargaPag  = function (){
    mostrarEstudiantes();
    $(".accordion").click(mostrarAcordeon);
    $(".puntos").click(seleccionarPuntaje);
    $("#estudiantes").on("click",".vermas", mostrarPerfil);
}

$(document).ready(cargaPag);

var mostrarEstudiantes = function(){
    $.getJSON(
        "http://localhost:3000/estudiantes.json",

        function(response){
            var plantilla = "<div class='row'>" +
                "<div class='col-xs-4'><img src='**foto**' class='fotoPerfil' alt='fotoPerfil'></div>" +
                "<div class='col-xs-5'><p class='nombrePerfil'>**nombre** **apellido**</p>" +
                    "<p class='edadPerfil'>**edad**</p></div>"+
                "<span class='glyphicon glyphicon-plus-sign vermas' data='**i**'></span>" +
                "</div>";

            var l = response.length;

            for(var i=0; i<l;i++){
                $('#estudiantes').append(plantilla.replace("**foto**", response[i].foto)
                    .replace("**nombre**", response[i].nombre)
                    .replace("**apellido**", response[i].apellido)
                    .replace("**edad**", response[i].edad)
                    .replace("**i**", i+1));

            }
        }
    )
}


var mostrarAcordeon = function(){
    for (var i = 0; i < $(this).length; i++) {
        //this.classList.toggle("active");
        //this.nextElementSibling.classList.toggle("show");
        $(this).next().slideToggle( "slow", function() {
            // Animation complete.
        });
    }
}

var seleccionarPuntaje = function(){
    $(this).toggleClass("seleccionado");
    $(this).siblings().removeClass("seleccionado");
}

/*
    $( ".accordion" ).click(function() {

    });
*/
var mostrarPerfil = function(){
    var indice = $(this).attr("data");
    $(location).attr("href","http://localhost:3000/perfil.html" + "?data=" + indice);
}

