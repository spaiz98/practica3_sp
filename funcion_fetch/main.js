//declaro funcion asincrónica (con async y después await)
async function consumir_datos(){
    //realizo solicitud http a la página para traer la información (método GET)
   const datos = await fetch('https://jsonplaceholder.typicode.com/users')
   // guardo solo datos json, nada de cabeceras ni otros aditivos
   const datos_definitivos = await datos.json()

   datos_definitivos.forEach(element => {
        console.log(element.name)       
   });
}

//invoco a la función
consumir_datos()