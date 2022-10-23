## Condicionales

## 1. Responde las siguientes preguntas en la sección de comentarios:

## ¿Qué es un condicional?
R. es la forma en la que ejecutamos un bloque de código u otro, dependiendo de una condición.

Son la forma en que ejecutamos un bloque de códgp u otro, dependiendo de alguna condición o validación.

## ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?
R.
existen los condicionales IF (else y else if), SWITCH (case, default), hay otra forma de hacer condicionales son palabra clave, son arreglos que se llegan como cuando usamos condicionales complejos siendo una forma corta y más fácil de leer.

La diferencia es que el condicional SWITCH, nos ayuda a validar por medio de casos si esa varianle cumple alguna condición. Todos los casos validan la misma variable,

en el caso de if, no siempre se hace la validación de la misma variable inicial.

El condicional IF (con else y else if) nos permite hacer validaciones completamente distintas (si queremos), en cada validación o condicional. En cambio, en el switch, todos los cases se compraran contra la misma variable o condición que definimos en el switch,

## ¿Puedo combinar funciones y condicionales?
R. sí, las funciones pueden encapsular cualquier bloque de código, incluyendo condicionales. los condicionales son buenos para las funciones, ya que nis ayuda a hacer validaciones adicionales.

## 2. Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

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

// return hace que se termine de ejecutar una función, similar al break pero en un condicional if. 

R:

function() {
    if(tipoDeSuscripción == "Free") {
    console.lo("Solo puedes tomar los cursos gratis");
    return;
    } else if ( tipoDeSuscripción == "Basic" ) {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
    return;
    } else if ( tipoDeSuscripción == "Expert" ) {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
    return;
    } else if ( tipoDeSuscripción == "ExpertDuo" ) {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
    return;
}

*/