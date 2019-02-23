function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;

  var respuesta='si';
  while(respuesta=='si') {
    nuevoNumero=prompt('Ingrese numero:');
    while (isNaN(nuevoNumero)) {
      nuevoNumero=prompt('Ingrese numero:');
    }
    nuevoNumero=parseInt(nuevoNumero);
    if (nuevoNumero<0) {
      negativo*=nuevoNumero;
    }
    else {
      positivo+=nuevoNumero;
    }
    respuesta=prompt('Quiere continuar?');
  }


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN
