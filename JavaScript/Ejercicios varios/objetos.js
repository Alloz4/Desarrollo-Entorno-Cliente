var jugador = {
    fuerza: 1,
    incrementaarFuerza: function () {
        this.fuerza++;
    },
    consultarFuerza: function () {
        console.log("La fuerza del jugador es: " + this.fuerza);
    }
}

jugador.consultarFuerza();

jugador.incrementaarFuerza();

jugador.consultarFuerza();
