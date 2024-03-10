let textoEntrada;

// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

function criptografar() {
  textoEntrada = capturarTexto();
  let textoSaida = textoEntrada;
  textoSaida = textoSaida.replaceAll('e', 'enter');
  textoSaida = textoSaida.replaceAll('i', 'imes');
  textoSaida = textoSaida.replaceAll('a', 'ai');
  textoSaida = textoSaida.replaceAll('o', 'ober');
  textoSaida = textoSaida.replaceAll('u', 'ufat');
  console.log(`Texto criptografado: ${textoSaida}`);
  document.getElementById('mensagem-padrao').innerHTML = 'Texto criptografado:';
  document.getElementById('paragrafo-saida').innerHTML = textoSaida;
  return textoSaida;
}

function descriptografar() {
  textoEntrada = capturarTexto();
  let textoSaida = textoEntrada;
  textoSaida = textoSaida.replaceAll('enter', 'e');
  textoSaida = textoSaida.replaceAll('imes', 'i');
  textoSaida = textoSaida.replaceAll('ai', 'a');
  textoSaida = textoSaida.replaceAll('ober', 'o');
  textoSaida = textoSaida.replaceAll('ufat', 'u');
  console.log(`Texto descriptografado: ${textoSaida}`);
  document.getElementById('mensagem-padrao').innerHTML = 'Texto descriptografado:';
  document.getElementById('paragrafo-saida').innerHTML = textoSaida;
  return textoSaida;
}

function capturarTexto() {
  return document.querySelector('textarea').value;
}