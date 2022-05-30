//uso de objetos y propiedades
let usuario = {
    nombre:'Juan',
    apellido:'Perez',
    dni:33258741,
    correo:{
        gmail:'itscipolletti@gmail.com',
        outlook:'itscipolletti@outlook.com.ar'
    },
    localidad:'Cipolletti'
}

// mostrar una propiedad que esta dentro de otra - forma 1
// const gmail = usuario.correo.gmail
// const outlook = usuario.correo.outlook

//forma 2 - destructuring object
const { gmail,outlook } = usuario.correo 


//mostrar una propiedad de un objeto
console.log(`
    Apellido: ${usuario.apellido}
    Nombre: ${usuario.nombre}
    Gmail: ${gmail}
    Outlook: ${outlook}
    `)



