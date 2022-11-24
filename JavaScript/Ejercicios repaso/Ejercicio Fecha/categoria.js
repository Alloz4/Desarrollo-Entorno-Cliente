

function categorizar() {

    var cadena = document.getElementsByName("fecha")[0].value;
    var anio = cadena.substring(0, 4);
    let resultado = document.getElementById("categoria");

    var prebenjamin = [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022];
    var benjamin = [2013, 2014];
    var alevin = [2011, 2012];
    var infantil = [2009, 2010];
    var cadete = [2007, 2008];
    var juvenil = [2005, 2006];
    var junior = [2003, 2004];
    var promesa = [2000, 2001, 2002];
    var senior = [];
    for (let i = 1987; i <= 1999; i++) {
        senior.push(i);
    }


    if (prebenjamin.includes(parseInt(anio))) {
        resultado.value += "Si has nacido el " + cadena + " eres Prebenjamin";
    } else if (benjamin.includes(parseInt(anio))) {
        resultado.value += "Si has nacido el " + cadena + " eres Benjamin";
    } else if (alevin.includes(parseInt(anio))) {
        resultado.value += "Si has nacido el " + cadena + " eres Alevin";
    } else if (infantil.includes(parseInt(anio))) {
        resultado.value += "Si has nacido el " + cadena + " eres Infantil";
    } else if (cadete.includes(parseInt(anio))) {
        resultado.value += "Si has nacido el " + cadena + " eres Cadete";
    } else if (juvenil.includes(parseInt(anio))) {
        resultado.value += "Si has nacido el " + cadena + " eres Juvenil";
    } else if (junior.includes(parseInt(anio))) {
        resultado.value += "Si has nacido el " + cadena + " eres Junior";
    } else if (promesa.includes(parseInt(anio))) {
        resultado.value += "Si has nacido el " + cadena + " eres Promesa";
    } else if (senior.includes(parseInt(anio))) {
        resultado.value += "Si has nacido el " + cadena + " eres Senior";
    } else {
        resultado.value += "Si has nacido el " + cadena + " eres Máster";
    }
}
function limpiar() {
    document.getElementById("categoria").value = "";
}
