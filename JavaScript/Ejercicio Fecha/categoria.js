

function categorizar() {

    var cadena = document.getElementsByName("fecha")[0].value;
    var anio = cadena.substring(0, 4);
    let resultado = document.getElementById("categoria");

    if (anio >= 2015) {
        resultado.value += "Su categoría es: Prebenjamín";
    } else if (anio == 2013 || anio == 2014) {
        resultado.value += "Su categoría es: Benjamín o Sub 8";
    } else if (anio == 2011 || anio == 2012) {
        resultado.value += "Su categoría es: Alevín o Sub 12";
    } else if (anio == 2009 || anio == 2010) {
        resultado.value += "Su categoría es: Infantil o Sub 14";
    } else if (anio == 2007 || anio == 2008) {
        resultado.value += "Su categoría es: Cadete o Sub 16";
    } else if (anio == 2005 || anio == 2006) {
        resultado.value += "Su categoría es: Juvenil o Sub 18";
    } else if (anio == 2003 || anio == 2004) {
        resultado.value += "Su categoría es: Junior o Sub 20";
    } else if (anio == 2000 || anio == 2001 || anio == 2002) {
        resultado.value += "Su categoría es: Promesa o Sub 23";
    } else if (anio <= 1999 && anio >= 1987) {
        resultado.value += "Su categoría es: Sénior";
    } else {
        resultado.value += "Su categoría es: Máster";
    }
}

function limpiar() {
    document.getElementById("categoria").value = "";
}