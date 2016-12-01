





















































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
                "<img src='**foto**' id='fotoPerfil' alt='fotoPerfil'>" +
                "<p id='nombrePerfil'>Nombre: **nombre**</p>" +
                "<p id='apellidoPerfil'>Apellido: **apellido**</p>" +
                "<p id='edadPerfil'>Edad: **edad**</p>" +
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
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
    }
}

var seleccionarPuntaje = function(){
    $(this).toggleClass("seleccionado");
    $(this).siblings().removeClass("seleccionado");
}
