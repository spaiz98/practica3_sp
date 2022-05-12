//función tradicional
function calcular(){
    const d1 = document.getElementById("inp_dato1").value
    const d2 = document.getElementById("inp_dato2").value
    
    const operacion = document.getElementById("slt_operacion").value
    let resultado = null
    if (operacion == 0) {
        //debo calcular corriente
        resultado = d1/d2
    }else{
        if (operacion == 1) {
            //debo calcular tension
            resultado = d1 * d2
        }else{
            //debo calcular resistencia
            resultado = d1/d2
        }
    }
    document.getElementById("h_resultado").textContent = 'resultado = '+resultado.toFixed(2)
}
function setearLabel(){
    const operacion= document.getElementById("slt_operacion").value
    if (operacion == 0) {
        document.getElementById("lbl_dato1").textContent = 'Tension'
        document.getElementById("lbl_dato2").textContent = 'Resistencia'
    }else{
        if (operacion == 1) {
            document.getElementById("lbl_dato1").textContent = 'Corriente'
            document.getElementById("lbl_dato2").textContent = 'Resistencia'
        }else{
            document.getElementById("lbl_dato1").textContent = 'Tension'
            document.getElementById("lbl_dato2").textContent = 'Corriente'
        }
    }
}