function guardar(){
    let nueva_ip = {
        direccionip:document.getElementById("inp_dir").value,
        puerto:document.getElementById("inp_puerto").value,
        pais:document.getElementById("sel").value,
        velocidad:document.getElementById("inp_vel").value,
        tipo:document.querySelector('input[name=radio]:checked').value
    }

    if ("lista_ip" in localStorage){
        let grilla_ip = JSON.parse(localStorage.getItem("lista_ip"))
            grilla_ip.push(nueva_ip)
            localStorage.setItem("lista_ip",JSON.stringify(grilla_ip))
    }else{
        let grilla_ip = []
        grilla_ip.push(nueva_ip)
        localStorage.setItem("lista_ip",JSON.stringify(grilla_ip))
    }

    obtener_ip()
    vaciar()

}


function obtener_ip(){
    if("lista_ip" in localStorage){
            let lista_ip = JSON.parse(localStorage.getItem("lista_ip"))
    
            let filas = []
    
            lista_ip.forEach ((element,index) => {
                let fila = ` 
                <tr>
                    <td>${element.direccionip}</td>
                    <td>${element.puerto}</td>
                    <td>${element.pais}</td>
                    <td>${element.velocidad}</td>
                    <td>${element.tipo}</td>
                    <td>
                        <button onclick="eliminar_ip(${index})" class="btn btn-danger btn-sm"><i class="fa fa-trash"></i></button>
                        <button onclick="editar(${index})" class="btn btn-primary btn-sm"><i class="fa fa-edit"></i></button>
                    </td>
                </tr>
                
                `
                filas.push(fila)
            });

        document.getElementById("tbody").innerHTML = filas.join('')
    
    }
}

obtener_ip()

function eliminar_ip(index){
    let lista_ip = JSON.parse(localStorage.getItem("lista_ip"))
    lista_ip.splice(index,1)

    localStorage.setItem("lista_ip", JSON.stringify(lista_ip))

    obtener_ip()
}

function editar(index){
    let lista_ip = JSON.parse(localStorage.getItem("lista_ip"))
    document.getElementById("inp_dir").value = lista_ip[index].direccionip
    document.getElementById("inp_puerto").value = lista_ip[index].puerto
    document.getElementById("sel").value = lista_ip[index].pais
    document.getElementById("inp_vel").value = lista_ip[index].velocidad
    document.querySelector('input[name=radio]:checked').value = lista_ip[index].tipo

    // guardo el indice para utilizarlo en la función actualizar
    localStorage.setItem("indice",index)

    // oculto el btn guardar, y muestro el btn actualizar
    document.getElementById("btn_guardar").style.display = 'none'
    document.getElementById("btn_act").style.display = 'block'
}

function actualizar(index){
    let lista_ip = JSON.parse(localStorage.getItem("lista_ip"))
    let indice = localStorage.getItem("indice")
    lista_ip[indice].direccionip = document.getElementById("inp_dir").value
    lista_ip[indice].puerto = document.getElementById("inp_puerto").value
    lista_ip[indice].pais = document.getElementById("sel").value
    lista_ip[indice].velocidad = document.getElementById("inp_vel").value
    lista_ip[indice].tipo = document.querySelector('input[name=radio]:checked').value

    localStorage.setItem("lista_ip", JSON.stringify(lista_ip))

    obtener_ip()

    document.getElementById("btn_act").style.display = 'none'
    document.getElementById("btn_guardar").style.display = 'block'

    vaciar()
}

function vaciar(){
    document.getElementById("form_direcciones").reset()
}