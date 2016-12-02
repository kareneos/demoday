var mostrarDatosAlumna = function(){
    $.ajax({
        url: "http://localhost:3000/estudiantes.json",
        type: "GET",
        success: function(response){
        	var template = '<div class="col-lg-5 text-center">'+
                    '<img src=**foto** class="profile">'+
                '</div>'+
                '<div class="col-lg-7">'+
                    '<div class="identidad">'+
                        '<p>**nombre**</p>'+
                        '<p>**apellido**</p>'+
                        '<p>**edad**</p>'+
                    '</div>'+
                '</div>';

            var rutadata = location.search;
            var igual = rutadata.indexOf("=");
            var i = rutadata.substr(igual + 1);

            $('#mostrarDatos').append(template.replace("**foto**", response[i-1].foto)
                    .replace("**nombre**", response[i-1].nombre)
                    .replace("**apellido**", response[i-1].apellido)
                    .replace("**edad**", response[i-1].edad));
        }
    });
}
mostrarDatosAlumna();
