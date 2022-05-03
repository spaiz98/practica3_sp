// función tradicional
// () --> no es paréntesis son los argumentos de la función
// function mostrar(){
    //alert('Probando función...')
//}

// ejecutar función---
//mostrar()

// esto de abajo lo va a leer primero si no llamamos la función
// console.log('Probando...')

// Una función invoca a otra...
function mostrar(mensaje){
    alert(mensaje)
}

function operar(){
    const m = 'Probando envío de parámetros'
    //ejecutando la función mostrar
    mostrar(m)
}

