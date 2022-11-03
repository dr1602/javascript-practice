var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39,
    SPACE: 32
  };

const up = document.querySelector("#up");
const down =document.querySelector("#down");
const left = document.querySelector("#left");
const right = document.querySelector("#right");
document.addEventListener("keydown", dibujarTeclado);

function dibujarTeclado(evento) {
  console.log(evento.keyCode);

  switch (evento.keyCode)
  {
    case teclas.UP:
      console.log("arriba");
      up.setAttribute("src","https://img.icons8.com/cotton/512/circled-chevron-up.png");
      up.setAttribute("alt","upColour");
    break;
    case teclas.DOWN:
      console.log("abajo");
      down.setAttribute("src","https://img.icons8.com/cotton/512/circled-chevron-down--v2.png");
      down.setAttribute("alt","downColour");
    break;
    case teclas.LEFT:
      console.log("izquierda");
      left.setAttribute("src","https://img.icons8.com/cotton/512/circled-chevron-left--v2.png");
      left.setAttribute("alt","leftColour");
    break;
    case teclas.RIGHT:
      console.log("derecha");
      right.setAttribute("src","https://img.icons8.com/cotton/512/circled-chevron-right--v2.png");
      right.setAttribute("alt","rightColour");
    break;
    case teclas.SPACE:
      console.log("¡Otra tecla!");
      up.setAttribute("src","https://img.icons8.com/windows/512/circled-chevron-up.png");
      up.setAttribute("alt","up");
      down.setAttribute("src","https://img.icons8.com/cotton/512/circled-chevron-down--v1.png");
      down.setAttribute("alt","down");
      left.setAttribute("src","https://img.icons8.com/cotton/512/circled-chevron-left--v1.png");
      left.setAttribute("alt","left");
      right.setAttribute("src","https://img.icons8.com/cotton/512/circled-chevron-right--v1.png");
      right.setAttribute("alt","right");
    break;
    default:
    break;
  }
}
