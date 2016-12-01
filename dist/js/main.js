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
            var nombre = "<ul>";
            var apellido = "<ul>";
            var edad = "<ul>";
            var foto = "<ul>";
            var l = response.length;

            for(var i=0; i<l;i++){
                nombre += "<li>"+ response[i].nombre+"</li>";
                apellido += "<li>"+ response[i].apellido+"</li>";
                edad += "<li>"+ response[i].edad+"</li>";
                foto += "<li>"+ response[i].foto+"</li>";
                
            }

            nombre += "</ul>";
            apellido += "</ul>";
            edad += "</ul>";
            foto += "</ul>";

            $("#nombre").html(nombre);
            $("#apellido").html(apellido);
            $("#edad").html(edad);
            $("#foto").html(foto);
        }
    )
}

mostrarEstudiantes();