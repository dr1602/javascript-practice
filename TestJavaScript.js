/*

Variables y Operaciones

1. Responde las siguientes preguntas en la sección de comentarios:
- ¿Qué es una variable y para qué sirve?
R. Es la asignación de una palabra a un valor y sirve para almacenar un valor en la memoria.

- ¿Cuál es la diferencia entre declarar e inicializar una variable?
R. La diferencia es que declarar sirve para establecer una variable mientras que inicializar le da un valor a esa variable.

- ¿Cuál es la diferencia entre sumar números y concatenar strings?
R. Sumar números en JS es una operación aritmética, mientras que concatenar strings en JS es unir cadenas de texto.

- ¿Cuál operador me permite sumar o concatenar?
R. El operador "+"

2. Determina el nombre y tipo de dato para almacenar en variables la siguiente información:
- Nombre: Tony "String"
- Apellido: Stark "String"
- Nombre de usuario en Platzi: Ironman "String"
- Edad: 53 "Number"
- Correo electrónico: tstark@starkenterprises.com "String"
- Mayor de edad: True "Boolean"
- Dinero ahorrado: $12.4 Billion "String"
- Deudas: $20.0 Billion "String"

3. Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.

R. */

var nombre = "Tony"
var apellido = "Stark"
var UsuarioPlatzi = "Ironman"
var edad = 53
var correo = "tstark@starkenterprises.com"
var mayor = true
var ahorros = "$12.4 Billion"
var deudas = "$20.0 Billion"

/* 
4. Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:
- Nombre completo (nombre y apellido)
- Dinero real (dinero ahorrado menos deudas)
*/

var nombre = "Tony"
var apellido = "Stark"
var UsuarioPlatzi = "Ironman"
var edad = 53
var correo = "tstark@starkenterprises.com"
var mayor = true
var ahorros = "$12.4 Billion"
var deudas = "$-20.0 Billion"

var NombreCompleto = nombre + " " + apellido;
var DineroReal = Number(ahorros.substring(1,3)) + Number(deudas.substring(1,4));

console.log(NombreCompleto)
console.log(DineroReal)

/*
Funciones

1. Responde las siguientes preguntas en la sección de comentarios:
- ¿Qué es una función?
R. serie de instrucciones que llevan a cabo una tarea o calculen un valor.

- ¿Cuándo me sirve usar una función en mi código?
R. cuando vas a repetir una serie de tareas en tu código

- ¿Cuál es la diferencia entre parámetros y argumentos de una función?
R. la diferencia es que los parámetros son las variables listadas en la definición de una función, mientras que los argumentos son los valores reales pasados a la función.

2. Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
*/

function perfilPlazti () {
    var name = prompt("Ingresa tu nombre");
    var lastname = prompt("Ingresa tu apellido");
    var completeName = name + " " + lastname; 
    var nickname = prompt("Ingresa tu gamertag");

    console.log("Mi nombre es" + completeName + ", pero prefiero que me digas " + nickname + ".");
};

perfilPlazti();

/*
Condicionales

1. Responde las siguientes preguntas en la sección de comentarios:
- ¿Qué es un condicional?
R. son partes de código que se ejecutan cuando una condición es verdadera.

- ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?
R.
if, else of, else: valida si una condición es verdadera o falsa
switch: valida si ciertos condiciones se cumplen o no
var x = z === y ? : valida si una variable es verdadera o falsa

- ¿Puedo combinar funciones y condicionales?
R. sí, puedes crear funciones que contengan condicionales para validar, por ejemplo, una lista de datos, o puedes alimentar un condicional del resultado de una función, como el procesamiento de una serie de objetos y validar si cumple con el criterio deseado.

2. Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}

R:
*/

function tipoDeSuscripcion (){

    var substype = prompt("¿Cuál es el tipó de subscrición que tienes? Free, Basic, Expert o ExpertPlus");


    if (substype == "Free" || substype == "free" ) {
            console.log("Solo puedes tomar los cursos gratis");
    }   else if (substype == "Basic" || substype == "basic") {
            console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
    }   else if (substype == "Expert" || substype == "expert") {
            console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
    }   else if (substype == "ExpertPlus" || substype == "expertplus" || substype == "Expertplus" || substype == "expertPlus") {
            console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
    }   else {
        console.log("Disculpe, no reconozco ese valor. Inténtelo más tarde");
    }
}

tipoDeSuscripcion();

/*
3. Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).
💡 Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays u objetos y un solo condicional. 😏

*/

function tipoDeSuscripcion (){

    var substype = prompt("¿Cuál es el tipó de subscrición que tienes? Free, Basic, Expert o ExpertPlus");


    if (substype == "Free" || substype == "free" ) {
            console.log("Solo puedes tomar los cursos gratis");
    }   if (substype == "Basic" || substype == "basic") {
            console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
    }   if (substype == "Expert" || substype == "expert") {
            console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
    }   if (substype == "ExpertPlus" || substype == "expertplus" || substype == "Expertplus" || substype == "expertPlus") {
            console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
    }   if (substype !== "Free" && substype !== "free" && substype !== "Basic" && substype !== "basic" && substype !== "Expert" && substype !== "expert" && substype !== "ExpertPlus" && substype !== "expertplus" && substype !== "Expertplus" && substype !== "expertPlus") {
        console.log("Disculpe, no reconozco ese valor. Inténtelo más tarde");
    }
}

tipoDeSuscripcion();

// Bonus

function tipoDeSubs() {
    var usersubs = prompt("¿Cuál es el tipó de subscrición que tienes? Free, Basic, Expert o ExpertPlus");

    if (usersubs === "Free" || usersubs === "free" || usersubs === "Basic" || usersubs === "basic" || usersubs === "Expert" || usersubs === "expert" || usersubs === "ExpertPlus" || usersubs === "expertplus" || usersubs === "Expertplus" || usersubs === "expertPlus") {
                var substypes = [
                { type: "Free", benefits: "Solo puedes tomar los cursos gratis"},
                { type: "free", benefits: "Solo puedes tomar los cursos gratis"},
                { type: "Basic", benefits: "Puedes tomar casi todos los cursos de Platzi durante un mes"},
                { type: "basic", benefits: "Puedes tomar casi todos los cursos de Platzi durante un mes"},
                { type: "Expert", benefits: "Puedes tomar casi todos los cursos de Platzi durante un año"},
                { type: "expert", benefits: "Puedes tomar casi todos los cursos de Platzi durante un año"},
                { type: "ExpertPlus", benefits: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"},
                { type: "Expertplus", benefits: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"},
                { type: "expertPlus", benefits: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"},
                { type: "expertplus", benefits: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"},
            ];
            
            var filteredSubs = substypes.filter( function(substype) {
                return substype.type === usersubs
            });
    
            console.log(filteredSubs)
    }   else {
            console.log("Disculpe, no reconozco ese valor. Inténtelo más tarde");
    }
}

tipoDeSubs();

/*

Ciclos

1.  Responde las siguientes preguntas en la sección de comentarios:
- ¿Qué es un ciclo?
R. son partes de un código que se ejecutan siempre que una condición se cumpla y para cuando esta condición deja de cumplirse.

- ¿Qué tipos de ciclos existen en JavaScript?
R. existen: for & while

- ¿Qué es un ciclo infinito y por qué es un problema?
R. sucede cuando un ciclo no tienen definida una condición para que se detenga, es un problema porque una de las consecuencias es que pueden saturar la memoria una computadora pues se ejecuta indefinidamente, entre otras.

- ¿Puedo mezclar ciclos y condicionales?
Sí, pueden haber ciclos contenidos en condicionales y viceversa.

2. Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}

R. */

var i = 0;

while (i < 5) {
    console.log("El valor de i es: " + i);
    i++
}

var i = 10;

while (i >= 2) {
    console.log("El valor de i es: " + i);
    i--
}

/*

 3. Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.
💡 Pista: puedes usar la función prompt de JavaScript.

R.
*/

function sumaBasica(){
    var i = 0;

    while (i <= 5){
        var respuesta = Number(prompt("¿Cuánto es 2 + 2?"));
        
        if ( Number(respuesta) == 4) {
            console.log("Respuesta correcta");
            i = i+6;
        }    else{
            console.log("¡Introduzca otro valor!");
            i++
        }
    };
}

sumaBasica();

/* 
1 Responde las siguientes preguntas en la sección de comentarios:
- ¿Qué es un array?
R. es una variable que guarda en la memoria una serie de elementos, cinluidos los objetos
- ¿Qué es un objeto?
R. son elementos que contienen una serie de características contenidas como nombre, tipo, precio, etc. 

- ¿Cuándo es mejor usar objetos o arrays?
R. un objeto, cuando las características de un elemento no cambian, y un array, cuando dichas características si cambian y no tiene nombres de valores predefinidos.
- ¿Puedo mezclar arrays con objetos o incluso objetos con arrays?
R. Sí se pueden contener objetos en arrays y viceversa

2️ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.
R.*/

function arrayFunction(){
    var contenedor = [];
    var i = Number(prompt("Elije el número de objetos que quiers ingresar:"));
    for(var i; i >= 1; i=i-1){
        contenedor.push(prompt("Ingresa un número (tienes "+i+" oportunidades más)"))
    };

    console.log(contenedor[0]);
}

arrayFunction();

/*3️ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).
R*/

function arrayFunction(){
    var contenedor = [];
    var i = Number(prompt("Elije el número de objetos que quiers ingresar:"));

    for(var i; i >= 1; i=i-1){
        contenedor.push(prompt("Ingresa un número (tienes "+i+" oportunidades más)"));
    };

    for(var i; i < contenedor.length; i++){
        console.log(contenedor[i]);
    };
}

arrayFunction();

/*4️ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).
R*/

function auto (MARCA, MODELO, ANNIO){
    this.marca = MARCA;
    this.modelo = MODELO;
    this.annio = ANNIO;
}

var autos = [];
var limite = prompt("¿Cuántos autos quires ingresar?");

for(let i = 0; i<limite; i++){
    var marca = prompt("Ingresa la marca del carro");
    var modelo = prompt("Ingresa el modelo del carro");
    var annio = prompt("Ingresa el año del carro");
    autos.push(new auto(marca,modelo,annio));

    var finalizar = prompt("Presion S para continuar o N para parar")
    if( finalizar === "N" ) {
        console.log(autos[i].marca);
        console.log(autos[i].modelo);
        console.log(autos[i].annio);
        i=limite;
    }   else if ( finalizar === "n" ) {
        console.log(autos[i].marca);
        console.log(autos[i].modelo);
        console.log(autos[i].annio);
        i=limite;
    }  else {
        console.log(autos[i].marca);
        console.log(autos[i].modelo);
        console.log(autos[i].annio);;
    }

}    