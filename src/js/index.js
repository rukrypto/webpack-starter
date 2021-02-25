import '../css/styles.css';
import '../scss/styles.scss';
import '../css/testing.css';
import '../scss/testing.scss';

document.body.onload = addElement;

function addElement () {
  // crea un nuevo div
  // y añade contenido
  var newDiv = document.createElement("div");
  const newContent = document.createTextNode("Holddfsa!¿Qué tal?ddddd");
  newDiv.appendChild(newContent); //añade texto al div creado.

  // añade el elemento creado y su contenido al DOM
  var currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
}