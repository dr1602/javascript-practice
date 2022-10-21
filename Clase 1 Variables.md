## Variables y Operaciones

## Responde las siguientes preguntas en la sección de comentarios:

## ¿Qué es una variable y para qué sirve?
R. Espacios en memoria donde podemos guardar información en el formato de los distintos tipos de datos [number, string, boolean, object, array, fucntions, etc]

## ¿Cuál es la diferencia entre declarar e inicializar una variable?

let nombre = "David"

// var, let, const - formas de crear variables. a veces var falla en closures y scopes

nombre = 'Iris'

const apellido = "Martinez"

apellido = "Cabrera"  -> error

una cosas es decirle a tu consola que existe una variable, y otra distinta darle un valor. Como cambiar el valor de un "var" o un "let".

** declarar es generar la variable, inicializar es darle un valor y reinicializar es cambiarle el valor a la variable.

** declarar es cuando le decimos a JavaScript que vamos a crear una variable con un nombre x, mientras que inicializar (o reinicializar) es asignarle un valor a esa variable

## ¿Cuál es la diferencia entre sumar números y concatenar strings?

## ¿Cuál operador me permite sumar o concatenar?
R. en las variables no sólo podemos guardar valores, sino también se pueden guardar operadores para obtener valores dependientes de otros strings, números, varibales, etc

let suma = 2 + 2

suma

- 4

let sumaStrings= "hola, " + "Juan"

sumaStrings

"hola, Juna"

** el operdador que nos permite sumar o concatenar es +, este operador nos permite sumar números cuando lo usamos con números. pero cuando son strings lo que hace unir (concatenar) strings.

## Determina el nombre y tipo de dato para almacenar en variables la siguiente información:

- Nombre: Tony "String"
- Apellido: Stark "String"
- Nombre de usuario en Platzi: Ironman "String" - cuidar para que las usuarias cuiden sintáxis
- Edad: 53 "Number"
- Correo electrónico: tstark@starkenterprises.com "String" - cuidar para que las usuarias cuiden sintáxis
- Mayor de edad: True "Boolean"
- Dinero ahorrado: $12.4 Billion "String"
- Deudas: $20.0 Billion "String"

## Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.

** por convención no se crean las variables empezando con mayúscula porque eso se reserva para las clases o prototipos - en programación orientada a objetos. hay otras conveciones como camel case que si aplican en este caso

R. */

let nombre = "Tony";
let apellido = "Stark";
let usuarioPlatzi = "Ironman";
let edad = 53;
let correo = "tstark@starkenterprises.com";
let isMayorDeEdad = true; // se lee más fácil que sólo "mayor de edad"
let dineroAhorrado = "$12.4 Billion";
let deudas = "$20.0 Billion";

/* 

## Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:
## Nombre completo (nombre y apellido)
## Dinero real (dinero ahorrado menos deudas)
*/

```

let nombre = "Tony";
let apellido = "Stark";
let usuarioPlatzi = "Ironman";
let edad = 53;
let correo = "tstark@starkenterprises.com";
let isMayorDeEdad = true; // se lee más fácil que sólo "mayor de edad"
let dineroAhorrado = "$12.4 Billion";
let deudas = "$20.0 Billion";

let nombreCompleto = nombre + " " + apellido;
let dineroReal = Number(ahorros.substring(1,3)) + Number(deudas.substring(1,4));

console.log(nombreCompleto)
console.log(dineroReal)

```