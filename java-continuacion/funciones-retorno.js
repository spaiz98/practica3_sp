// comentar parrafo /* escribo acá */

// unicamente en la suma + necesito aclarar que el nro es entero sino lo toma como cadena, ya que se una para concatenar tambn
// value no sirve para almacenar todo tipo de datos

function sumar(a,b){
    const resultado  = parseInt (a) + parseInt (b)
    return resultado
}

function recolectar_datos(){
    const nro1 = document.getElementById("inp_n1").value
    const nro2 = document.getElementById("inp_n2").value

    const respuesta = sumar(nro1,nro2)
    document.getElementById("h_resultado").textContent = respuesta

}