let pregunta;
let rta;
let resultado;


function devolucion() {
    if (rta == true) {
        resultado += 20;
        console.log("Correcto")
    } else {
        resultado += 0;
        console.log("Incorrecto")
    }
}

console.log("Responda ingresando 'a' , 'b' o 'c', para pasar debe superar el 70%; si no, debera repetir el cuestionario")

while (resultado != 100) {

    resultado = 0
    pregunta = prompt("¿Cuánto tarda la luz del sol en llegar a la tierra? a) 8 minutos;  b) 1 Hora  c) 13 minutos").toLowerCase();
    rta = pregunta == "a"
    devolucion()

    pregunta = prompt("¿Cuál es el elemento 1 de la tabla periódica? a) Helio;  b) Hidrógeno;  c) Boro").toLowerCase();
    rta = pregunta == "b"
    devolucion()

    pregunta = prompt("¿Cuál es más alto? a) Aconcagua;  b) Kilimanjaro;  c) Everest").toLowerCase();
    rta = pregunta == "c"
    devolucion()

    pregunta = prompt("La melodia del feliz cumpleaños es igual a:  a) Arroz con leche; b) Payaso PlimPlim;  c) Mambrú se fue a la guerra").toLowerCase();
    rta = pregunta == "b"
    devolucion()

    pregunta = prompt("La identidad secreta de Batman es: a) Bruno Diaz;  b) Clark Kent;  c) Oliver Twist").toLowerCase();
    rta = pregunta == "a"
    devolucion()

    console.log("Acertaste el " + resultado + "%")
}

console.log("¡Felicitaciones!")

