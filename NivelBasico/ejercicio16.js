/*DOM:  Document object Model (Estructura del documento HTML). 
Lo mas usado en JavaScript..
Js puede acceder al DOM y atravesz de el puede modificar la pagina 
de hecho, puede modificar todos los estilos CSS, eliminar o añadir 
elementos y atributos relacionado de la pagina. Tambien, reacciona 
a todos los elementos de la pagina.
*/

//Se puede considerar como una variable global
let datos = document.getElementById("datos");
let numero = "Leo";

// Funcion

const nombreUsuario = () => {
  let nombre = prompt("Ingrese su nombre");
  alert("Tu nombre es " + nombre);
};
numero = "Leonardo";
console.log(numero);

// Funcion vacia
//Eventos (Onclick desde JavaScript)
datos.onclick = function () {
  nombreUsuario();
};
