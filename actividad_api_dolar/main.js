//declaro funcion asincrónica (con async y después await)
async function consumir_datos(){
    //realizo solicitud http a la página para traer la información (método GET):
   const datos = await fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
   // guardo solo datos json, nada de cabeceras ni otros aditivos
   const datos_definitivos = await datos.json()

   datos_definitivos.forEach((element,index) => {
        console.log(`
            ${index} - ${element.casa.nombre} - Compra: ${element.casa.compra} - Venta: ${element.casa.venta}
        `);      
   });
}

//invoco a la función
consumir_datos()