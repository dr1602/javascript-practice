// pasaremos la lógica de escuchar eventos a js para que html quede máslimp, será con addEventListene

const h1 = document.querySelector("h1");
const form =document.querySelector("#form");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const pResult = document.querySelector("#result"); 

// procedemos a escuchar a los elementos

// btn.addEventListener("nombre del evento", código JavaScript);

// btn.addEventListener("click", btnOnClick);

//form.addEventListener("submit", sumarInputValues);

//Otra forma de resolver el problema:

btn.addEventListener("click", sumarInputValues);

/* 
evento submit para leer un formulario

se borran las inputs y el directorio cambia a terminación ?
*/

/*  
 en html btnOnClcick se escribe btnOnClcick() mientras que en JavaScript se escribe:
lo que sucede es que en html se mandaba a ejecutar inmediatamente la función, pero el
addEventListener, primero tienes que cargar la función para que se ejecute con el evento,
pero si agregamos paréntesis, le pediríamos que lo ejecute inmediatamente
 */

/*
function btnOnClick() {
    console.log("Escuchando el evento de click");
    //console.log(Number(input1.value) + Number(input2.value));
    const sumaInputs = Number(input1.value) + Number(input2.value);
    pResult.innerText = 'Resultado: ' + sumaInputs;
}
*/

function sumarInputValues(event) {
    //console.log({event});
    //event.preventDefault();
    // llama a la propiedad default prevented para que no ejecute lo que por defecto debería ejecutar el elemento (el refresh)
    //console.log(Number(input1.value) + Number(input2.value));
    const sumaInputs = Number(input1.value) + Number(input2.value);
    pResult.innerText = 'Resultado: ' + sumaInputs;
}

//señalando que no sea del tipo que señala el formulario, sino tipo "button"