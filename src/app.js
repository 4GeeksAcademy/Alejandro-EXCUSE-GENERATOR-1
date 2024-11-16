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

  let QuienRandom = quien[Math.floor(Math.random() * quien.length)];
  let AccionRandom = accion[Math.floor(Math.random() * accion.length)];
  let QueRandom = que[Math.floor(Math.random() * que.length)];
  let CuandoRandom = cuando[Math.floor(Math.random() * cuando.length)];

  let excusa =
    QuienRandom + " " + AccionRandom + " " + QueRandom + " " + CuandoRandom;

  document.querySelector("#excusa").innerHTML = excusa;

  console.log(
    QuienRandom + " " + AccionRandom + " " + QueRandom + " " + CuandoRandom
  );
};
