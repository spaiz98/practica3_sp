// declaro array
let lenguajes = ["Python", "JavaScript", "Csharp", "C++" , "Java" , "PHP" , "Ruby"]
console.log(lenguajes)

// 1. Agregar en lenguaje ‘Go’ al final del arreglo.
lenguajes.push('Go')
console.log(lenguajes)

// 2. Eliminar el primer lenguaje del arreglo
lenguajes.shift()
console.log(lenguajes)

// 3. Agregar al inicio del arreglo el lenguaje ‘Kotlin’
lenguajes.unshift('Kotlin')
console.log(lenguajes)

// 4. Eliminar el lenguaje Java y Php mediante el uso de splice(posición,elementos)
const indice = lenguajes.indexOf('Java')
console.log('El indice de java es: '+indice)
const indice2 = lenguajes.indexOf('PHP')
console.log('El indice de php es: '+indice2)

const eliminar = lenguajes.splice(indice,2)
console.log('Elementos eliminados: '+eliminar)
console.log(lenguajes)

// 5. Agregar los lenguajes Rust y Swift respectivamente, después de JavaScript
const indice3 = lenguajes.indexOf('JavaScript')
console.log('El indice de javascript es: '+indice3)
lenguajes.splice(2,0,"Rust","Swift")

console.log('El arreglo final es: '+lenguajes)

function imprimir(){
    let longitud = lenguajes.length
    let ultimo = lenguajes[longitud-1]
    let tercero = lenguajes[2]

    document.getElementById("parrafo").textContent=`
        -- La longitud del arreglo es: ${longitud}
    `
    document.getElementById("parrafo2").textContent=`
        -- El último elemento es: ${ultimo}
    `
    document.getElementById("parrafo3").textContent=`
        -- El tercer elemento es: ${tercero}
    `
}

function recorrer(){
    lenguajes.forEach(element => {
        console.log(element)
        });   
}
