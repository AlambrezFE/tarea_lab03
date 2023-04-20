function captura(){
    var monedaOrigen = document.getElementById('moneda_origen').value;
    var monedaDestino = document.getElementById('moneda_destino').value;
    var monto = parseFloat(document.getElementById('monto').value);

    var cambio
    if (monedaOrigen === 'USD' && monedaDestino === 'PEN') {
      cambio = monto * 3.50;
    } else if (monedaOrigen === 'USD' && monedaDestino === 'EUR') {
      cambio = monto * 0.90; 
    } else if (monedaOrigen === 'PEN' && monedaDestino === 'USD') {
      cambio = monto / 3.50; 
    } else if (monedaOrigen === 'PEN' && monedaDestino === 'EUR') {
      cambio = monto / 4.00; 
    } else if (monedaOrigen === 'EUR' && monedaDestino === 'USD') {
      cambio = monto / 0.90;
    } else if (monedaOrigen === 'EUR' && monedaDestino === 'PEN') {
      cambio = monto * 4.00; 
    } else {
      cambio = monto; 
    }
  ;
    alert('El monto calcular es de : '+ cambio + ' ' + monedaDestino);
}

