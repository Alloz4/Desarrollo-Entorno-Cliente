
function libro(titulo, autor, editorial, anio) {
    this.titulo = titulo;
    this.autor = autor;
    this.editorial = editorial;
    this.anio = anio;
}

let libros = [];
let mostrar = document.getElementById("resultado");

//Guardo en un array los objetos(Libro) que he creado

function guardar() {
    // let mostrar = document.getElementById("resultado");
    let titulo = document.getElementById("titulo").value;
    let autor = document.getElementById("autor").value;
    let editorial = document.getElementById("editorial").value;
    let anio = document.getElementById("anio").value;
    let nuevoLibro = new libro(titulo, autor, editorial, anio);
    libros.push(nuevoLibro);

    mostrar.value += "Añadido correctamente. \n";

}

//Visualizo los libros de ese autor que estoy buscando

function visualizar() {
    // let mostrar = document.getElementById("resultado");
    let autor = document.getElementById("autor").value;
    let encontrado = false;

    for (let i = 0; i < libros.length; i++) {
        if (libros[i].autor == autor) {
            mostrar.value += "Titulo: " + libros[i].titulo + "\n" + "Autor: " + libros[i].autor + "\n" + "Editorial: " + libros[i].editorial + "\n" + "Año: " + libros[i].anio + "\n";
            encontrado = true;
        }
    }
    if (!encontrado) {
        mostrar.value += "No encontrado \n";
    }
}

//Borro lo que hay en el textarea

function borrar() {
    mostrar.value = "";
}

//Elimino por libro y autor

function eliminar() {
    let titulo = document.getElementById("titulo").value;
    let autor = document.getElementById("autor").value;
    let encontrado = false;

    for (let i = 0; i < libros.length; i++) {
        if (libros[i].titulo == titulo && libros[i].autor == autor) {
            mostrar.value += "Libro " + libros[i].titulo + " del autor " + libros[i].autor + " eliminado \n";
            libros.splice(i, 1);
            encontrado = true;
        }
    }

    if (!encontrado) {
        mostrar.value += "El libro que quieres eliminar no esta guardado.";
    }
}