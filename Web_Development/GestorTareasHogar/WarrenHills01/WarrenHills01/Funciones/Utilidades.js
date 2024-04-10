function RealizaCambio() {

    var numero = document.getElementById("MontoColones").value;

    $.ajax({
        type: 'POST',
        url: '/Utilidad/RealizaCambio',//aqui se va al controlador
        data: {
            montoColones: numero
        },
        cache: false, //siempre sera false
        dataType: 'Json', //lo que retorna el ajax
        success: function (data) {

            document.getElementById("CambioCompra").value = data.montoDolaresTCC;
            document.getElementById("CambioVenta").value = data.montoDolaresTCV;

            
            // data.compra.valor.toFixed(1) asi se redondea en js
        },
        error: function (data) {
            alert("en caso que falle");
        }


    });
}

function ActulizaTarea() {
    var tarea = document.getElementById("ItemId").value;
    var descripcion = document.getElementById("DescripTarea").value;

    

    $.ajax({
        type: 'POST',
        url: '/Tarea/ActualizaTarea',//aqui se va al controlador
        data: {
            dia: tarea,
            tarea: descripcion
        },
        cache: false, //siempre sera false
        dataType: 'Json', //lo que retorna el ajax
        success: function (data) {
            //aca es donde se necesita cerrar la caja de accion (actulizar o finaliar tarea)
            /*$('#exampleModalAl').modal('hide');*/
            alert("Actulizacion exitosa de " + descripcion)
            window.location.reload();
            


        },
        error: function (data) {
            alert("en caso que falle");
        }


    });
    
}

function ActulizaTarea2() {
    var tarea = document.getElementById("ItemId2").value;
    var descripcion = document.getElementById("DescripTarea2").value;
    var Modal = new bootstrap.Modal(document.getElementById("exampleModal1"), {
        keyboard: false
    })
    //var data = JSON.stringify({
    //    'diaSemana': tarea,
    //    'tipoTarea': descripcion
    //});

    $.ajax({
        type: 'POST',
        url: '/Tarea/ActualizaTarea',//aqui se va al controlador
        data: {
            dia: tarea,
            tarea: descripcion
        },
        cache: false, //siempre sera false
        dataType: 'Json', //lo que retorna el ajax
        success: function (data) {
            
            Modal.hide();
            alert("Actulizacion exitosa de " + descripcion)
            window.location.reload();//recarga la pantalla al finalizar el ajax


            // data.compra.valor.toFixed(1) asi se redondea en js
        },
        error: function (data) {
            alert("en caso que falle");
        }


    });

}

//finaliza limpieza 
function finalizaTarea1() {

    var tarea01 = document.getElementById("tarea").innerHTML;
    var comentario = document.getElementById("comentarioTarea").value;
    $.ajax({
        type: 'POST',
        url: '/Tarea/Realizartarea',//aqui se va al controlador
        data: {
            tarea: tarea01,
            coment: comentario
        },
        cache: false, //siempre sera false
        dataType: 'Json', //lo que retorna el ajax
        success: function (data) {

            
            alert("Se finalizo la tarea con exito");
            window.location.reload();//recarga la pantalla al finalizar el ajax


            // data.compra.valor.toFixed(1) asi se redondea en js
        },
        error: function (data) {
            alert("en caso que falle");
        }


    });

    

    
}
//finaliza saca basura
function finalizaTarea2() {


    var tarea02 = document.getElementById("tarea2").innerHTML;
    var comentario2 = document.getElementById("comentarioTarea2").value;

    $.ajax({
        type: 'POST',
        url: '/Tarea/Realizartarea',//aqui se va al controlador
        data: {
            tarea: tarea02,
            coment: comentario2
        },
        cache: false, //siempre sera false
        dataType: 'Json', //lo que retorna el ajax
        success: function (data) {

            alert("Se finalizo la tarea con exito");
            window.location.reload();//recarga la pantalla al finalizar el ajax


            // data.compra.valor.toFixed(1) asi se redondea en js
        },
        error: function (data) {
            alert("en caso que falle");
        }


    });
    

    


}