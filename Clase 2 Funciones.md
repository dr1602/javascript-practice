## Funciones

## 1. Responde las siguientes preguntas en la sección de comentarios:
## ¿Qué es una función?
R. un bloque de codigo puede estar  definido por el cierro de llaves o corchetes en líneas de código.

encapsular en una función es designar en contenedor un bloque de código, para mandarla a llamar, cuándo lo necesitamos.

function nombreCompleto(name, lastName) {
    return name + " " + lastName;
}

nombreCompleto();
//"undefined undefined"

nombreCompleto("Iris", "Alcachofa");
"Iris Alcachofa"

parámetros son los contenedores de una función que se definen para poder dar valores concretos con los cuáles trabajar a la misma función(llamados argumentos)

el nombre y argumentos, puede ser cualquiera, y no sólo los llamados por las variables

incluso la función puede ser compuesta por otras variables.

let nombre = "Tony";
let apellido = "Stark";
let usuarioPlatzi = "Ironman";
let edad = 53;
let correo = "tstark@starkenterprises.com";
let isMayorDeEdad = true; // se lee más fácil que sólo "mayor de edad"
let dineroAhorrado = "$12.4 Billion";
let deudas = "$20.0 Billion";

nombreCompleto(nombre, apellido);

"Tony Stark"

¿qué es una función?

Las funciones nos permiten encapsular (guardar) bloques de código para reutilizarlos y ejecutarlos en el futuro(se tiene que llamar para poder reutilizar).

## ¿Cuándo me sirve usar una función en mi código?
R. nos sirve cuándo tenemos código repetido, bloques de código que realizan las mismas actividades.

Sirven cuando tenemos variables o bloques de código muy parecidos, con cambios que podría ser parámetros o argumentos que podeomos encapsular para reutilizar más de una vez en el futuro.

También cuándo tenemos un archivo de código muy grande, que tienen actividades similares, para que nuestro código sea más legible.

** También nos sirve para mejorar la legibilidad y ordenar nuestros código.

## ¿Cuál es la diferencia entre parámetros y argumentos de una función?
R. 

function nombreCompleto(name, LastName) {
    return name + " " + lastName;
}

nombreCompleto("Natalia", "Villamil")

// Natalia Villamil

Al declarar una función, los parámetros son los que recibe una función cunado la estamos creando.

Cuando ejecutamos la función, enviamos argumentos para que pueda trabajar la función.

las funciones recibe parámetros cuándo las creamos y les enviamos argumentos cuando las ejecutamos.


## 2. Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");

// Mi nombre es Juan DavidCastro Gallego, pero prefiero que me digas juandc.

function saludo(name, lastname, nickname) {
    function nombreCompleto(name, lastname) {
        return name + " " + lastname;
    }
    const completeName = nombreCompleto(name, 
    lastname);

    console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
}

saludo("Juanita", "Gallego", "juanutamonitos");