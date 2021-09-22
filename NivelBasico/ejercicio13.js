

let nombre = prompt("Ingresa tu nombre");
alert("Hola " + nombre);

let color = prompt("Ingresa tu color favorito");

switch (color) {
    case "amarillo":
        alert(nombre + " Eres una persona alegre");
        break;

          case "azul":
              alert(nombre + " Eres una persona apasionada");
              break;

                case "verde":
                    alert(nombre + " Eres una persona saludable");
                    break; 

    default:
        alert("Por favor elige entre amarillo, azul o verde");
        break;
}