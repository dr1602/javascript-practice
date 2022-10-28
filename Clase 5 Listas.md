## Listas

## 1 Responde las siguientes preguntas en la sección de comentarios:

## - ¿Qué es un array?
R. es una lista de elementos, ya sea con palabras clave para identificarlos, o no, con o sin orden.

```js
const array = [1, "jaja", true, false];
```

javascript permite que guardes cualquier tipo de dato en un array, sin importar el límite, mientras que otros array pueden limitar ambas posibilidades.

## - ¿Qué es un objeto?
R. es una lista de elementos PERO cada elemento tiene un nombre clave.

```js
const obj = {
    nombre: "fulanito",
    edad: 3,
};
```

cada uno del los elementos tiene un nombre clave o "key". muy útil para guardar usuarios, por ejemplo.

## - ¿Cuándo es mejor usar objetos o arrays?
R. Arrays cuando lo que haremos en un elemento es igual en los demás (la regla se puede incumplir). Mientras que un objeto es cuando los de nombres de cada elemento son importantes para nuestro algoritmo.

## - ¿Puedo mezclar arrays con objetos o incluso objetos con arrays?
R. Si, los arrays pueden guardar objetos, y los objetos pueden guardar arrays entre sus propiedaeds.

```js
const obj = {
    nombre: "fulanito",
    edad: 3,
    comidaFavorita: ["Pollo frito", "vegetal"],
};
```

```js
const array = [1, "jaja", true, false, {nombre: "Lala", edad:19}];
```

## 2️ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.
## R.

``` js

function arrayFunction(){
    var contenedor = [];
    var i = Number(prompt("Elije el número de objetos que quiers ingresar:"));
    for(var i; i >= 1; i=i-1){
        contenedor.push(prompt("Ingresa un número (tienes "+i+" oportunidades más)"))
    };

    console.log(contenedor[0]);
}

arrayFunction();

```

``` js

function imprimirPrimerElementoArray(arr){
    console.log(arr[0]);
}

imprimirPrimerElementoArray(["Juanita", "Rigobero", "Natilla"]);

imprimirPrimerElementoArray();

// Juanita

```

``` js

function imprimirPrimerElementoArray(arr){
    console.log(arr[1]);
}

imprimirPrimerElementoArray(["Juanita", "Rigobero", "Natilla"]);

imprimirPrimerElementoArray();

// Rigoberto

```

## /*3️ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

## R*/

```js

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

```

```js

function imprimirElementoPorElemento(){
    for (let i = 0; i < arr.lenght ; i++) {
        console.log(arr[i]);
    }
}

arrayFunction();

imprimirElementoPorElemento(["Juanita", "Rigobero", "Natilla"]);

// poner < y no <=

```

Todos los arreglos tienen una propiedad que se llamaa length - array.length -,nos va a decir cuántos elementos tiene el array

## 4️ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

## R

```js
const obj = {
    nombre: "fulanito",
    edad: 3,
    comidaFavorita: ["Pollo frito", "vegetal"],
};

obj

obj.nombre

obj.edad

obj.comidaFavorita

```

como no tiene propiedad 1 o 2, no se puede alamcenar.

la solución, convertir en array todas las propiedades del objeto

Object.values()

``` js

Object.values(obj)

/*
0: "fulanito"
1: 3
2: (2) ['Pollo frito', 'vegetal']
length: 3
[[Prototype]]: Array(0)

*/

const obj = {
    nombre: "fulanito",
    edad: 3,
    comidaFavorita: ["Pollo frito", "vegetal"],
};

function imprimirElementoPorElementoObjeto(obj){
    const arr = Object.values(obj);
    for (let i = 0; i < 
    arr.length ; i++) {
        console.log(arr[i]);
    }
}

imprimirElementoPorElementoObjeto(obj);



```
