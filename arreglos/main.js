//funcion flecha
//function operar() {
//    console.log('Probando...')
//}
//
// const calcular() => {
   // console.log('Probando...')
//}

// crear array 
let arreglo = ['JavaScript','Php','Java','Csharp']

// cantidad de elementos de un array = longitud
let longitud = arreglo.length
console.log('Longitud: '+longitud)

// primer elemento de un array
console.log('Primer elemento: '+arreglo[0] )

// ultimo elemento de un array
console.log('Ultimo elemento: '+arreglo[longitud-1])

// array completo
console.log('El array completo es: '+arreglo)

// recorrer array con foreach
arreglo.forEach(element => {
        console.log(element)
});

//recorrer array con foreach y mostrar índice
arreglo.forEach( (element,index) => {
    console.log(index+'-'+element)
});

// agregar un elemento al final del array
arreglo.push('Go')
console.log(arreglo)

// eliminar el ultimo elemento del array (no necesita el indice ni nada)
arreglo.pop()
console.log(arreglo)

// agregar un elemento al principio del array
arreglo.unshift('Go')
console.log(arreglo)

// eliminar primer elemento de un arreglo
arreglo.shift()
console.log(arreglo)

// conocer el indice de un elemento
const indice = arreglo.indexOf('Java')
console.log('El indice de java es: '+indice)
console.log(arreglo[indice])

// eliminar un elemento conociendo su indice
// const eliminar = arreglo.splice(indice,1)
// console.log(arreglo)
// console.log('Elemento eliminado: '+eliminar)

// eliminar más de un elemento
const elim = arreglo.splice(indice,2)
console.log(arreglo)
console.log('Los elementos eliminados son: '+elim)

// clonar - hacer copia de un array
let copia = arreglo.slice()
console.log('Copia del arreglo: '+copia)
console.log(copia.push('Go'))
console.log('Agregando elemento a copia: '+copia)
