const h1 = document.querySelector("h1");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const pResult = document.querySelector("#result"); 

// procedemos a escuchar a los elementos

function btnOnClick() {
    console.log("Escuchando el evento de click");
    //console.log(Number(input1.value) + Number(input2.value));
    sumaInput = Number(input1.value) + Number(input2.value);
    pResult.innerText = 'Resultado: ' + sumaInput
}
