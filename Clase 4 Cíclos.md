## Ciclos

## 1.  Responde las siguientes preguntas en la sección de comentarios:

## - ¿Qué es un ciclo?
R. es la forma de ejecutar
unos mismos de bloque hasta que se cumpla una condición

la forma de ejecutar un bloque de código hasta que se cumpla cierta condición. (es muy parecido a los condicionales)

## - ¿Qué tipos de ciclos existen en JavaScript?
R. While, do while, .

While == do while, la diferencia es que el while hace la validación antes de ejecutar la primera vez el bloque de código, el do while primero ejecuta el código y luego hace la validación.

la diferencia primordial entre el while y el for, es que en el for, se defina la variable, el punto en el que se detendrá el bloque de código, y un cambio forzoso que debe tener la varible del bloque de código.

let i = 0, i < 4, 5++

Otra diferencia es que el "for" nos deja definir una variable como parte de sus parámetros, y para "if, else, else if", se tiene que definir la variable aparte.

## - ¿Qué es un ciclo infinito y por qué es un problema?
R. un ciclo infinito es cuando nuestra validación nunca se cumple y se siguen ejecutando hasta que nuetro navegador o shell se detiene, la aplicación dejará de funcionar.

Es cuando la validación de nuestros condicionales nunca se cumple y termina tosteando (defiando) la aplicación (e. j. cuando el navegador ya no puede más de tanta ejecución de ese bloque de código).

## - ¿Puedo mezclar ciclos y condicionales?
R. sí, de hecho los ciclos son un tipo de condicional que se sigue ejecutando hasta que se cumple una función cambiante.

tener una condicional no nos inhibe de tener más condicionales en un bloque de código.

Sí, aunque los cilcos son  una especie condicionales, nada nos impide agregar más condicionales dentro del ciclo. 

También se puede ejecutar un condicional dentro de un ciclo, siempre que la lógica de nuestro código no lo pida.

## 2. Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}

R. */

let i = 0;

while (i < 5) {
    console.log("El valor de i es: " + i);
    i++;
}

let i = 10;

while (i >= 2) {
    console.log("El valor de i es: " + i);
    i--;
}

/*

## 3. Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.
## 💡 Pista: puedes usar la función prompt de JavaScript.

## R.

``` js
while (respuesta =! "4") {
    let pregunta = prompt("¿Cuánto es 2 + 2?");
    respuesta = pregunta;
}
```