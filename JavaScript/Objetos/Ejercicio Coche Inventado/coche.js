function Coche(marca, modelo, potencia, color) {
    this.marca = marca;
    this.modelo = modelo;
    this.potencia = potencia;
    this.color = color;
}

let coches = [];
let mostrar = document.getElementById("eleccion");


function guardar() {
    let marca = document.getElementById("marca").value;
    let modelo = document.getElementById("modelo").value;
    let potencia = document.getElementById("cv").value;
    let color = document.getElementsByName("color");
    for (let i = 0; i < color.length; i++) {
        if (color[i].checked) {
            color = color[i].value;
        }
    }
    var coche = new Coche(marca, modelo, potencia, color);
    coches.push(coche);
    mostrar.value += "Se ha guardo el coche que has introducido. \n";
}

function visualizar() {
    let marca = document.getElementById("marca").value;
    let encontrado = false;
    for (let i = 0; i < coches.length; i++) {
        if (coches[i].marca == marca) {
            encontrado = true;
            mostrar.value += "Marca: " + coches[i].marca + "\nModelo: " + coches[i].modelo + "\nPotencia: " + coches[i].potencia + "CV\nColor: " + coches[i].color + "\n\n";
        }
    }
    if (!encontrado) {
        mostrar.value += "No se ha encontrado ningun coche de la marca que buscas.\n";
    }
}

function borrar() {
    mostrar.value = "";
}
//elimino por modelo

function eliminar() {
    let modelo = document.getElementById("modelo").value;
    let marca = document.getElementById("marca").value;
    let encontrado = false;
    for (let i = 0; i < coches.length; i++) {
        if (coches[i].modelo == modelo) {
            encontrado = true;
            mostrar.value += "Se ha eliminado el modelo " + coches[i].modelo + "de la marca " + coches[i].marca + "\n";
            coches.splice(i, 1);
        }
    }
    if (!encontrado) {
        mostrar.value += "No se ha encontrado ninguna marca para eliminar."
    }
}