function mostrar()
{

	var contador=0;
  var minimo=0,maximo=0;
	var respuesta='si';
  var bandera=true;
	while(respuesta!='no') {
    do {
      nuevoNumero=prompt('Ingrese numero:');
    }
    while (isNaN(nuevoNumero));
    nuevoNumero=parseInt(nuevoNumero);
    if (bandera) { /*para tomar el 1er nro ingresado como min y como max*/
      bandera=false /* para no evaluar mas la condicion*/
      maximo=nuevoNumero;
      minimo=nuevoNumero;
    } else {
      if (nuevoNumero<minimo) {
        minimo=nuevoNumero;
      }
      if (nuevoNumero>maximo) {
        maximo=nuevoNumero;
      }
    }
    respuesta=prompt('Quiere continuar?');
  }
  document.getElementById('maximo').value=maximo;
  document.getElementById('minimo').value=minimo;




}//FIN DE LA FUNCIÓN
