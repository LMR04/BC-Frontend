const inputDisplay = document.getElementById("inputDisplay"); //Consulta un elemento por su atributo id "inputDisplay"
//const inputDisplay = document.querySelector("#inputDisplay"); es lo mismo que la linea de arriba, pero con querySelector

const button = document.querySelectorAll(".button"); //Consulta todos los elementos con la clase "button" y los guarda en un array

console.log(inputDisplay);
console.log(inputDisplay.value);

inputDisplay.value = "Hola Mundo"; 