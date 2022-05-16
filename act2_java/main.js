function descuento() {
    const seleccion = document.getElementById("slct").value

    let resultado = null;

    if (seleccion == 1) {
        resultado = 2900000 - ( 2900000 * 0.15 )
    }else{
        if (seleccion == 2) {
            resultado = 3350000 - ( 3350000 * 0.05 )
        }else{
            resultado = 3960000 - ( 3960000 * 0.10 )
        }
    }

    document.getElementById("h_resul").textContent = 'El precio con descuento es de = $'+resultado.toFixed(2)
}