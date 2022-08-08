function guardar(){
    let nuevo_cliente = {
        nombre:document.getElementById("inp_nombre").value,
        apellido:document.getElementById("inp_apellido").value,
        dni:document.getElementById("inp_dni").value
    }

    if ("lista_clientes" in localStorage){
        let grilla_clientes = JSON.parse(localStorage.getItem("lista_clientes"))
            grilla_clientes.push(nuevo_cliente)
            localStorage.setItem("lista_clientes",JSON.stringify(grilla_clientes))
    }else{
        let grilla_clientes = []
        grilla_clientes.push(nuevo_cliente)
        localStorage.setItem("lista_clientes",JSON.stringify(grilla_clientes))
    }

    // invocamos a la funcion, la ejecutamos
    obtener_clientes()

    vaciar()
}

function obtener_clientes(){
    if("lista_clientes" in localStorage){
        let lista_clientes = JSON.parse(localStorage.getItem("lista_clientes"))

        let filas = []

        lista_clientes.forEach ((element,index) => {
            let fila = ` 
            <tr>
                <td>${index+1}</td>
                <td>${element.nombre}</td>
                <td>${element.apellido}</td>
                <td>${element.dni}</td>
                <td>
                    <button onclick="eliminar_cliente(${index})" class="btn btn-danger btn-sm"><i class="fa fa-trash"></i></button>
                    <button onclick="editar(${index})" class="btn btn-primary btn-sm"><i class="fa fa-edit"></i></button>
                </td>
            </tr>
            
            `
            filas.push(fila)
        });

        document.getElementById("tbody").innerHTML = filas.join('')

    }

}

// ejecutamos la funcion desde un principio
obtener_clientes()

function eliminar_cliente(index){
    let lista_clientes = JSON.parse(localStorage.getItem("lista_clientes"))
    lista_clientes.splice(index,1)

    localStorage.setItem("lista_clientes", JSON.stringify(lista_clientes))

    obtener_clientes()
}

function editar(index){
    let lista_clientes = JSON.parse(localStorage.getItem("lista_clientes"))
    document.getElementById("inp_nombre").value = lista_clientes[index].nombre
    document.getElementById("inp_apellido").value = lista_clientes[index].apellido
    document.getElementById("inp_dni").value = lista_clientes[index].dni

    // guardo el indice para utilizarlo en la función actualizar
    localStorage.setItem("indice",index)

    // oculto el btn guardar, y muestro el btn actualizar
    document.getElementById("btn_guardar").style.display = 'none'
    document.getElementById("btn_act").style.display = 'block'
}

function actualizar(index){
    let lista_clientes = JSON.parse(localStorage.getItem("lista_clientes"))
    let indice = localStorage.getItem("indice")
    lista_clientes[indice].nombre = document.getElementById("inp_nombre").value
    lista_clientes[indice].apellido = document.getElementById("inp_apellido").value
    lista_clientes[indice].dni = document.getElementById("inp_dni").value

    localStorage.setItem("lista_clientes", JSON.stringify(lista_clientes))
   
    obtener_clientes()

    document.getElementById("btn_act").style.display = 'none'
    document.getElementById("btn_guardar").style.display = 'block'

    vaciar()
}

function vaciar(index){
document.getElementById("form_cliente").reset()
}

// agregar boton cancelar -> que aparezca en actualizar, y apague el act,vacie y aparezca el guardar

// con eliminar que aparezca ventana flotante por si estamos seguros 