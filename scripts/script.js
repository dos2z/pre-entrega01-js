let pregunta;
let rta;
let resultado = 0; //tengo que inicializarla antes de entrar al bucle por la condición -resultado < 70-


function devolucion() {
    if (rta == true) {
        resultado += 20;
        alert("Correcto")
    } else {
        resultado += 0;
        alert("Incorrecto")
    }
}

alert("Responda ingresando 'a' , 'b' o 'c', para pasar debe superar el 70%; si no, debera repetir el cuestionario -- para salir escriba 'salir'")

while (resultado < 70) {
   
    resultado = 0
    pregunta = prompt("¿Cuánto tarda la luz del sol en llegar a la tierra? a) 8 minutos;  b) 1 Hora  c) 13 minutos").toLowerCase();
    if (pregunta == "salir") {
        alert("Saliendo del cuestionario")
        break
    }
    rta = pregunta == "a"
    devolucion()

    pregunta = prompt("¿Cuál es el elemento 1 de la tabla periódica? a) Helio;  b) Hidrógeno;  c) Boro").toLowerCase();
    if (pregunta == "salir") {
        alert("Saliendo del cuestionario")
        break
    }
    rta = pregunta == "b"
    devolucion()

    pregunta = prompt("¿Cuál es más alto? a) Aconcagua;  b) Kilimanjaro;  c) Everest").toLowerCase();
    if (pregunta == "salir") {
        alert("Saliendo del cuestionario")
        break
    }
    rta = pregunta == "c"
    devolucion()

    pregunta = prompt("La melodia del feliz cumpleaños es igual a:  a) Arroz con leche; b) Payaso PlimPlim;  c) Mambrú se fue a la guerra").toLowerCase();
    if (pregunta == "salir") {
        alert("Saliendo del cuestionario")
        break
    }
    rta = pregunta == "b"
    devolucion()

    pregunta = prompt("La identidad secreta de Batman es: a) Bruno Diaz;  b) Clark Kent;  c) Oliver Twist").toLowerCase();
    if (pregunta == "salir") {
        alert("Saliendo del cuestionario")
        break
    }
    rta = pregunta == "a"
    devolucion()

    alert("Acertaste el " + resultado + "%")
    if (resultado < 70) {
        alert("Otro intento ...")
    } else {
        alert("¡Felicitaciones!")
    }
}



