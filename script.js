function carregarHino() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'data/hinario-ctp.json', false);  // false = síncrono
  xhr.send(null);
  if (xhr.status === 200) {
    const hinos = JSON.parse(xhr.responseText);
    // Resto do código que processa os hinos...
  }
}
carregarHino();