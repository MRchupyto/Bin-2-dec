
function calcular() {
    var bienomal = document.getElementById('bienomal')
    var valor = document.getElementById('valor').value
    var resultado = document.getElementById('resultado')
    resultado.innerHTML = parseInt(valor, 2);
    var ultimodigito = valor.charAt(valor.length - 1)
    if (valor == '') {
        resultado.innerHTML = ''
        }
        if (ultimodigito == 0 || ultimodigito == 1) {

            bienomal.innerHTML = 'Decimal generado!'

        } else {
            resultado.innerHTML = '&#129335 Esperando por un numero valido...'

        }
        if (ultimodigito >> 1 || ultimodigito >> 9999999) {

            bienomal.innerHTML = 'El numero introducido no es valido , introduce solamente (0--1)'
        }
        if (ultimodigito == '') {
            bienomal.innerHTML = ''
        }
    }
