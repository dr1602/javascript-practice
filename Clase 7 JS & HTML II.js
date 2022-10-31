// Clase 7 JS & HTML II.js

/* Una vez que conecntamos HTML con JS, ambos archivos se pueden leer mutuamente 
En esta clase veremos como leer HTML desde JS
*/

console.log("Hello, world");

/*
funcioens que nuestro entorno de ejecución o navegador como google chrome,
con node JS (entorno de ejecución de JS en BE), en BE seguimos trabajando con JS
pero en otros puntos por que no interactuamos directamente con los usuarios, ya que no
tenemos un html en el BE,y no tenemos esas funcioanes para manipular html, vamos a leer datos
crear servidores, redes, etc 
*/

/* crea variables que se refiera a los selectores de cada uno de los elementos*/
// es muy similar a css, sobre seleccionar etiquetas, ids, etc como:_
// .parrafito {...}
// #pid {...}

const h1 = document.querySelector("h1");
const p = document.querySelectorAll("p");
// const p = document.getElementById("p");
// const p = document.getElementsByClassName("p");
const parrafito= document.querySelector(".parrafito");
const pid = document.querySelector("#pid");
const input = document.querySelector("input")

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});

// seleccionandolo nos muestra elementos para manipular con nuestro html

console.log(h1);

// una de ls propiedades de input es value

console.log(input.value);

// su valor se puede modificar si le agregas un valor

//tenemos métodos para seleccionar elementos en html
