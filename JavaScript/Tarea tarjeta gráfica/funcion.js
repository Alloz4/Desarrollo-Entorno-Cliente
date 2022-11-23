// 1. Crear un array de objetos con los datos de las tarjetas gráficas
// 2. Crear una función que añada una tarjeta gráfica al array
// 3. Crear una función que muestre en el textarea las tarjetas gráficas
// 4. Crear una función que elimine una tarjeta gráfica del array
// 5. Crear una función que borre los campos del formulario


function Ordenador(marca, modelo, memoria, microprocesador, grafica, portatil) {
    this.marca = marca;
    this.modelo = modelo;
    this.memoria = memoria;
    this.microprocesador = microprocesador;
    this.grafica = grafica;
    this.portatil = portatil;
}

var tarjeta = new Array();

function accion(tarea) {
    switch (tarea) {
        case "Añadir":
            añadir();
            break;
        case "Consultar":
            consultar();
            break;
        case "Eliminar":
            eliminar();
            break;
        case "Borrar":
            borrar();
            break;
    }
}


function añadir() {
    var marca = document.getElementsByName("marca")[0].value;
    var modelo = document.getElementById("modelo").value;
    var memoria = document.getElementById("memoria").value;
    var microprocesador = document.getElementById("microprocesador").value;
    var grafica = document.getElementById("grafica").value;
    var portatil = document.getElementsByName("portatil");
    for (var i = 0; i < portatil.length; i++) {
        if (portatil[i].checked) {
            portatil = portatil[i].value;
        }
    }
    var ordenador = new Ordenador(marca, modelo, memoria, microprocesador, grafica, portatil);
    tarjeta.push(ordenador);

    document.getElementById("area").value += "Añadido correctamente \n";
}

//que numero de la loteria de navidad va a ser el ganador

var numero = Math.floor(Math.random() * 1000000);
console.log(numero);


function consultar() {

    var texto = document.getElementById("area");

    //consultar por modelo
    var modelo = document.getElementById("modelo").value;
    var encontrado = false;
    for (var i = 0; i < tarjeta.length; i++) {
        if (tarjeta[i].modelo == modelo) {
            texto.value += "Marca: " + tarjeta[i].marca + "\n" + " Modelo: " + tarjeta[i].modelo + "\n" + " Memoria: " + tarjeta[i].memoria + "\n" + " Microprocesador: " + tarjeta[i].microprocesador + "\n" + " Gráfica: " + tarjeta[i].grafica + "\n" + " Portátil: " + tarjeta[i].portatil + "\n";

            encontrado = true;

        }
    }

    if (!encontrado) {
        texto.value += "No encontrado \n";
    }
}

function eliminar() {
    //eliminar por modelo
    var modelo = document.getElementById("modelo").value;
    var encontrado = false;
    for (var i = 0; i < tarjeta.length; i++) {
        if (tarjeta[i].modelo == modelo) {
            tarjeta.splice(i, 1);
            encontrado = true;
        }
    }

    if (!encontrado) {
        texto.value += "No encontrado";
    } else {
        texto.value += "Eliminado";
    }
}

function borrar() {
    document.getElementById("area").value = "";
    document.getElementsByName("marca")[0].value = "";
    document.getElementById("modelo").value = "";
    document.getElementById("memoria").value = "";
    document.getElementById("microprocesador").value = "";
    document.getElementById("grafica").value = "";
    document.getElementsByName("portatil")[0].value = "";
}