/*Condicional Switch funcionan similar a la condicion Ifelse
solo que se diferencia en que Switch solo se puede validar una 
condicion entre varios casesy es utilizado cuando no
necesitamos comparar/igualar/negar una condicion de otra
*/

let nombre = prompt("Ingresa tu nombre");
let edad = prompt("Antes de continuar ingrese su edad antes de ingresar al contenido");

switch (edad) {
    case "18":
        alert("Tienes accesso al catalogo de peliculas violentas");
        break;

        case "25":
        alert("Si tienes accesso, enjoy it");
        break; 

        case "35":
        alert("Si tienes accesso al contenido");
        break;

    default:
        alert("Debes tener 20 años para acceder al catalogo");
        break;
}