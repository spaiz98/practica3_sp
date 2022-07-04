function guardar(){
    let nuevo_cliente = {
        nombre:document.getElementById("inp_nombre").value,
        apellido:document.getElementById("inp_apellido").value,
        dni:document.getElementById("inp_dni").value
    }

    //pregunto si ya existe este alojamiento
    if("lista_clientes" in localStorage){
        //convierto a texto, lo que está por json en predeterminado)
        let grilla_clientes = JSON.parse(localStorage.getItem("lista_clientes"))
        grilla_clientes.push(nuevo_cliente)
        localStorage.setItem("lista_clientes", JSON.stringify(grilla_clientes))
    }else{
        //si no existe lo creo, esto puede alojar solo cadena de texto
        let grilla_clientes = []
        grilla_clientes.push(nuevo_cliente)
        // json.stringify es para convertir un array en json(puro texto)
        localStorage.setItem("lista_clientes", JSON.stringify(grilla_clientes))
    }
}

//function auxiliar(){
    // voy al storage y contengo lo que tiene adentro
    //const datos = localStorage.getItem("clientes")
    //console.log(datos)
//}