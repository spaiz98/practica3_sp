// caso 1
// Es mejor let que var, ya que let nos permite tratar variables globales y locales.
// -> Estamos declarando una variable

let num = 10

if(num == 10){
    num = 22
    console.log(num)
}

console.log(num)

//caso 2 --- Uso de var --- Es desprolijo ya que declara la variable como global, la use como la use.

var num2 = 55
if (num2 == 55){
    num2 = 77
    console.log(num2)
}

console.log(num2)

