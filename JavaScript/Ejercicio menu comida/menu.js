function eleccion() {
    var primero = document.getElementsByName("primero")[0];
    var segundo = document.getElementsByName("segundo")[0];
    var postre = document.getElementsByName("postre");
    for (let i = 0; i < postre.length; i++) {
        if (postre[i].checked) {
            var postreElegido = postre[i].value;
        }
    }


    var resultado = document.getElementsByName("menu")[0];

    var menu = "Su primer plato es: " + primero.value + "\nSu segundo plato es:  " + segundo.value + "\nSu postre es: " + postreElegido;


    resultado.value = menu;

}