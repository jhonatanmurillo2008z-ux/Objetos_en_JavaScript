/*Leer el nombre, la edad, el número de ficha y el programa de un aprendiz, y guardarlos en un
objeto. Agregar al objeto una propiedad mayorDeEdad con true o false según la edad.
Mostrar la ficha.*/

function leerAprendiz() {
    let nombre  = prompt("Nombre:");
    let edad = Number(prompt("Edad:"));
    let ficha = prompt("Número de ficha:");
    let programa = prompt("Programa:");

    let aprendiz = {
        nombre: nombre,
        edad: edad,
        ficha: ficha,
        programa: programa,
        mayorDeEdad: edad >= 18
    };

    return aprendiz;
}

function mostrarFicha(aprendiz) {
    console.log("--- Ficha del aprendiz ---");
    console.log("Nombre: " + aprendiz.nombre);
    console.log("Edad: " + aprendiz.edad + " años");
    console.log("Ficha: " + aprendiz.ficha);
    console.log("Programa: " + aprendiz.programa);
    console.log("Mayor de edad: " + (aprendiz.mayorDeEdad ? "sí" : "no"));
}

let aprendiz = leerAprendiz();
mostrarFicha(aprendiz);