function dibujarEscalera() {

    valor = Number(prompt("Introduce el número de escalones de la escalera: "));
    var dibujo = document.getElementById("dibujo");


    for (var i = 0; i < valor; i++) {
        for (var j = valor; j > i; j--) {
            dibujo.value += " ";
        }
        for (var k = 0; k <= i; k++) {
            dibujo.value += "*";
        }
        dibujo.value += "\r";
    }
}