
let palabras = [];


//repetir el bucle hasta que el usuario pulse cancelar o deje el prompt vacío

while (true) {
    let palabra = prompt("Introduce una palabra");
    if (palabra == null || palabra == "") break;
    palabras.push(palabra);
}

palabras.sort();

let mapa = mapaderepeticiones(palabras);

document.write("<h1>Palabras repetidas</h1>");

for (let [clave, valor] of mapa) {

    document.write(clave + " se repite " + valor + " veces<br>");

}

function mapaderepeticiones(palabras) {
    let map = new Map();
    for (var i = 0; i < palabras.length; i++) {
        if (map.has(palabras[i])) {
            map.set(palabras[i], map.get(palabras[i]) + 1);
        } else {
            map.set(palabras[i], 1);
        }
    }
    return map;
}





