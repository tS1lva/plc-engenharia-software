function somar (numero1, numero2) {
  if (erroString(numero1, numero2)) {
    return "Erro"
  }
  return numero1 + numero2;
}

function x (n1, n2) {
  if (erroString(n1, n2)) {
    return "Erro"
  }
  return n1 * n2;
}

function erroString (n1, n2) {
  if (typeof n1 != 'number' || typeof n2 != 'number') {
    return true
  }
  else {
    return false
  }
}

exports.somar = somar;
exports.x = x;