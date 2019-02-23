function mostrar()
{

	var contador=0;
	var acumulador=0;
  var respuesta='si';
  while (respuesta=='si') {
      do {
        nuevoNumero=prompt('Ingrese numero:');
      } while (isNaN(nuevoNumero));
    nuevoNumero=parseInt(nuevoNumero);
    contador+=1;
    acumulador+=nuevoNumero;
    respuesta=prompt('Quiere continuar?');
  }
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;
}
