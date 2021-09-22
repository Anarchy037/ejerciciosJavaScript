//Tipos de Datos: Enteros, boolianos, etc.

let nombre = "Pepa"; // Dato String (Muestra las comillas)
let edad = 25; // Dato Entero o se conoce como int
let sueldo = 25.5; //Dato tipo float o decimal
let hijos = false; //DAto tipo boolean
let celular = "123456789"; //Datos que se ponen tipo String (No se hacen operaciones matematicas)
let cedula = "123456789";
let fechaRegistro = new Date();
//Con new Date te saca la fecha completa, pero si se coloca solo Date aparece la fecha presente y en el futuro no cambia
//camelCase

console.log(
  "Hola " +
    nombre +
    " su edad es:" +
    edad +
    " tu sueldo es: " +
    sueldo +
    " tienes hijos: " +
    hijos + 
    fechaRegistro
);
//El signo + se usa para concatenar (Unir)
