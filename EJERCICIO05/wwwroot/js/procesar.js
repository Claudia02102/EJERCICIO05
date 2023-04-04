
var ImpTotal = document.getElementById("IT");

function getOperacion() {

    var Sueldo_basico = 350.75;
    var Comision = 0.05 * parseInt(ImpTotal.value);
    var Sueldo_bruto = Sueldo_basico + Comision;
    var Descuento = (0.15 * Sueldo_bruto).toFixed(2);
    var Sueldo_neto = Sueldo_bruto - Descuento;

    document.getElementById("resultados").value = "Sueldo basico: " + Sueldo_basico + "\n" +
        "Comision: " + Comision + "\n" +
        "Sueldo bruto: " + Sueldo_bruto + "\n" +
        "Descuento: " + Descuento + "\n" +
        "Sueldo neto: " + Sueldo_neto;

    return false;
}