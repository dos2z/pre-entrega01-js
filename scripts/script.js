

let preg_1;
let preg_2;
let preg_3;
let preg_4;
let preg_5;
let resultado = 0;

alert("Responda ingresando 'a' , 'b' o 'c'")

preg_1 = prompt("¿Cuánto tarda la luz del sol en llegar a la tierra? a) 8 minutos;  b) 1 Hora  c) 13 minutos");

preg_2 = prompt("¿Cuál es el elemento 1 de la tabla periódica? a) Helio;  b) Hidrógeno;  c) Boro");

preg_3 = prompt("¿Cuál es más alto? a) Aconcagua;  b) Kilimanjaro;  c) Everest");

preg_4 = prompt("La melodia del feliz cumpleaños es igual a:  a) Arroz con leche; b) Payaso PlimPlim;  c) Mambrú se fue a la guerra");

preg_5 = prompt("La identidad secreta de Batman es: a) Bruno Diaz;  b) Clark Kent;  c) Oliver Twist");


if (preg_1 == "a"){
    resultado += 20;
}else {
    resultado += 0;
}
if (preg_2 == "b"){
    resultado += 20;
}else {
    resultado += 0;
}
if (preg_3 == "c"){
    resultado += 20;
}else {
    resultado += 0;
}
if (preg_4 == "b"){
    resultado += 20;
}else {
    resultado += 0;
}
if (preg_5 == "a"){
    resultado += 20;
}else {
    resultado += 0;
}

alert("Acertaste el " + resultado + "%")