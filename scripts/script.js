let pregunta;
let rta;
let resultado;

alert("Responda ingresando 'a' , 'b' o 'c'")

function devolucion() {
    if (rta == true) {
        resultado += 20;
        alert("Correcto")
    } else {
        resultado += 0;
        alert("Incorrecto")
    }
}

alert("Responda ingresando 'a' , 'b' o 'c'")
while (resultado != 110) {
    resultado = 0
    pregunta = prompt("¿Cuánto tarda la luz del sol en llegar a la tierra? a) 8 minutos;  b) 1 Hora  c) 13 minutos");
    rta = pregunta == "a"
    devolucion()

    pregunta = prompt("¿Cuál es el elemento 1 de la tabla periódica? a) Helio;  b) Hidrógeno;  c) Boro");
    rta = pregunta == "b"
    devolucion()

    pregunta = prompt("¿Cuál es más alto? a) Aconcagua;  b) Kilimanjaro;  c) Everest");
    rta = pregunta == "c"
    devolucion()

    pregunta = prompt("La melodia del feliz cumpleaños es igual a:  a) Arroz con leche; b) Payaso PlimPlim;  c) Mambrú se fue a la guerra");
    rta = pregunta == "b"
    devolucion()

    pregunta = prompt("La identidad secreta de Batman es: a) Bruno Diaz;  b) Clark Kent;  c) Oliver Twist");
    rta = pregunta == "a"
    devolucion()

    alert("Acertaste el " + resultado + "%")
    resultado += 10;

}

alert("¡Felicitaciones!")
