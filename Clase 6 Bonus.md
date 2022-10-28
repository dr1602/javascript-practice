## Replica el comportamiento de tu condicional anterior con if, else y else if pero ahora solo con if (sin else ni else if)


``` js

fucntion () {
    if (basic) {
        // queremos aqui que termine la función
        return;
    } else if () {

    }
}

```

```js

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

```

```js

function conseguirTipoSuscripcion (suscripcion){
    if (suscripcion == "Free") {
        console.log("Solo puedes tomar los cursos gratis");
        return;
    }
    if (suscripcion == "Basic") {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        return;
    }
    if (suscripcion == "Expert") {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
        return;
    }
    if (suscripcion == "ExpertDuo") {
        console.log("Tú y alguien  más pueden tomar TODOS los cursos de Platzi durante un año");
        return;
    }

    console.warn("Ese tipo de suscripción no  existe");

}

conseguirTipoSuscripcion("Free");

//return nos sirve para romper el código, si es que se cumple.

```

 ## 3. Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).
## 💡 Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays u objetos y un solo condicional. 😏

```js

// explicación para solucionarlo: hacer funciones con ifs que requiera 50, 500 o más validaciones, no es escalable

const tipoDeSuscripciones = {
    free: "Solo puedes tomar los cursos gratis",
    basic: "Puedes tomar casi todos los cursos de Platzi durante un mes",
    expert: "Puedes tomar casi todos los cursos de Platzi durante un año",
    expertduo: "Tú y alguien  más pueden tomar TODOS los cursos de Platzi durante un año",
}

tipoDeSuscripciones.free
//R. "Solo puedes tomar los cursos gratis"

tipoDeSuscripciones.expert
//R. "Puedes tomar casi todos los cursos de Platzi durante un mes"

tipoDeSuscripciones["free"]
//R. "Solo puedes tomar los cursos gratis"
// da lo mismo que tipoDeSuscripciones.free
const ejemploSuscripcion = "free";

tipoDeSuscripciones[ejemploSuscripcion];
//R. "Solo puedes tomar los cursos gratis"
// da lo mismo que tipoDeSuscripciones.free

const tiposDeSuscripciones = {
    free: "Solo puedes tomar los cursos gratis",
    basic: "Puedes tomar casi todos los cursos de Platzi durante un mes",
    expert: "Puedes tomar casi todos los cursos de Platzi durante un año",
    expertduo: "Tú y alguien  más pueden tomar TODOS los cursos de Platzi durante un año",
}

function conseguirTipoSuscripcion(suscripcion) {
    if(tiposDeSuscripciones[suscripcion]) {
        console.log(tiposDeSuscripciones[suscripcion]);
        return;
    }

    console.warn("Ese tipo de suscripción no existe")
}

conseguirTipoSuscripcion("free");

//R = Solo puedes tomar los cursos gratis

conseguirTipoSuscripcion("expert");

//R = Puedes tomar casi todos los cursos de Platzi durante un año

conseguirTipoSuscripcion("expertduo");

//R = Tú y alguien  más pueden tomar TODOS los cursos de Platzi durante un año

conseguirTipoSuscripcion("lalala");

//R = Ese tipo de suscripción no existe


```
## Notas adicionales

Para manipular arrays:

```js
[1, 2, 3].push(4) // [1,2,3,4]
[1, 2, 3].pop() // [1,2]
[1, 2, 3].shift() // [2,3]
[1, 2, 3].unshift(0) // [0,1,2,3]
["a","b"].concat("c") // ["a","b","c"]
["a","b","c"].join("-") // a-b-c
["a","b","c"].slice(1) // ["a","b"]
["a","b","c"].indexOf("b") // 1
["a","b","c"].includes("c") // ture
[3, 5, 6, 8].find((n) => n % 2  === 0) // b
[2, 4, 3, 5].findIndex((n) => n % 2  !== 0) // 2
[3, 4, 8, 6].map((n) => n * 2) // [6,8,16,12]
[1, 4, 7, 8].filter((n) => n % 2 === 0) // [4,8]
[2, 4, 3, 7].reduce((acc, cur) => acc + cur === 0) // 16
[2, 3, 4, 5].every((x) => x < 6) // true
[1, 2, 3, 4].some((n) => n > 6) // true
[1, 2, 3, 5].reverse() // [4,3,2,1]
[3, 5, 7, 8].at(-2) // 7


```