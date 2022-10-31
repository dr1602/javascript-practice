// Clase 8 JS & HTML III.js
// Cómo escribir html desde JS, como párrafos, etiquetas, etc.

console.log("Hello, world");

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

console.log(h1);

console.log(input.value);

// h1.innerHTML = "¡Pero qué cambio! <br> ¿No?";
h1.innerText = "¡Pero qué cambio! <br> ¿No?";

// hay varias opcioness para modificar una clase
// para modificar un atributo, se pueden utilizar

console.log(h1.getAttribute("pantalla"));
console.log(h1.getAttribute("class"));

// getAttribute nos ayuda a leer los atributos de un elemnto

h1.setAttribute("class", "rojo");
console.log(h1.getAttribute("class"));

// setAttribute es para modificar la clase

/*
son formas para cambiar atributos, pero si queremos cambiar clases en específico, 
hay otra función
*/

h1.classList.add("naranja");
console.log(h1.getAttribute("class"));

h1.classList.remove("rojo");
console.log(h1.getAttribute("class"));

h1.classList.toggle("morado");
console.log(h1.getAttribute("class"));

// cambia entre clases

h1.classList.contains("morado");
console.log(h1.getAttribute("class"));

//devuelve falso o verdadero.

/* esta función nos sirve para cambiar elementos de HTML,
con la etiqueta que hemos seleccionado,
cambiamos el html no texto, mira... */

// podemos ponerle un valor a un input, sin get and set attribute,
//p podemos entrar directamente a su value

input.value = "4, 5, 6"

// también podemos cambiar su place holder, y cualquier otro atrbuto

// ahora vamos a crear unelemento desde cero

console.log(document.createElement("img"));

console.log(document.createElement("span"));

const img =     document.createElement("img");
img.setAttribute("src","https://e0.pxfuel.com/wallpapers/146/254/desktop-wallpaper-catrina-face-day-of-the-dead-orange-adriana-gironda-adriana-gironda-rosa-skull-girl-rise-ted-flower-calavera-dia-de-los-muertos.jpg");
img.setAttribute("alt","catrina de pxfuel");

console.log(img);

pid.innerHTML = "";
pid.appendChild(img);

// pid.appendChild

// para crear el elemento html que queramos

// lo importante es que nuestro html cambie cada que nuestras usuarias interactuen con nuestro sitio

