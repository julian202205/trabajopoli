function convertCurrency() {
    var amount = parseFloat(document.getElementById('amount').value);
    var fromCurrency = document.getElementById('fromCurrency').value;
    var toCurrency = 'COP'; // Moneda colombiana

    // Aquí iría la lógica para obtener la tasa de cambio y realizar la conversión

    var result = amount * 4000; // Suponiendo una tasa fija para fines de ejemplo
    document.getElementById('result').innerHTML = amount + ' ' + fromCurrency + ' = ' + result.toFixed(2) + ' ' + toCurrency;
}