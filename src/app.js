/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let quien = ["El perro", "Mi abuela", "El gato"];
  let accion = ["se comió", "se merendó", "se cenó"];
  let que = ["mis deberes", "mi comida", "mis apuntes"];
  let cuando = ["antes de clase", "mientras dormía", "cuando estudiaba"];

  let QuienRandomIndex = quien[Math.floor(Math.random() * quien.length)];
  let AccionRandomIndex = accion[Math.floor(Math.random() * accion.length)];
  let QueRandomIndex = que[Math.floor(Math.random() * que.length)];
  let CuandoRandomIndex = cuando[Math.floor(Math.random() * cuando.length)];

  let excusa =
    QuienRandomIndex +
    " " +
    AccionRandomIndex +
    " " +
    QueRandomIndex +
    " " +
    CuandoRandomIndex;

  document.querySelector("#excusa").innerHTML = excusa;

  console.log(
    QuienRandomIndex +
      " " +
      AccionRandomIndex +
      " " +
      QueRandomIndex +
      " " +
      CuandoRandomIndex
  );
};
