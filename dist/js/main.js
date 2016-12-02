





















































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
            /*
            var plantilla = "<div class='row'>" +
                "<div class='col-xs-6'><img src='**foto**'></div>" +
                "<p>Nombre: **nombre**</p>" +
                "<p>Apellido: **apellido**</p>" +
                "<p>Edad: **edad**</p>" +
            */
            var plantilla = "<div class='row'>" +
                "<div class='col-xs-4'><img src='**foto**' id='fotoPerfil' alt='fotoPerfil'></div>" +
                "<div class='col-xs-5'><p id='nombrePerfil'>**nombre** **apellido**</p>" +
                    "<p id='edadPerfil'>**edad**</p></div>"+
                "<a href='perfil.html'><span class='glyphicon glyphicon-plus-sign'></span></a>"+
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

