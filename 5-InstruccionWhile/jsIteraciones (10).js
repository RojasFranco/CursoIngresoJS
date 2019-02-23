function mostrar()
{

  var contador=0,cantidadNegativos=0,cantidadPositivos=0,cantidadCeros=0,cantidadPares=0;
  var sumaNegativos=0,sumaPositivos=0,promedioPositivos,promedioNegativos,diferencia;
	//declarar contadores y variables

	var respuesta="si";

	while(respuesta!="no"){
		do {
      nuevoNumero=prompt('ingrese numero:');
    } while (isNaN(nuevoNumero));
    nuevoNumero=parseInt(nuevoNumero);
    if (nuevoNumero<0) {
      sumaNegativos+=nuevoNumero;
      cantidadNegativos+=1;
    } else {
      if (nuevoNumero>0) {
        sumaPositivos+=nuevoNumero;
        cantidadPositivos+=1;
      }
      else {
        cantidadCeros+=1;
      }
    }
    if (nuevoNumero%2==0) {
      cantidadPares+=1;
    }
    respuesta=prompt('Quiere continuar?');
  }
  promedioPositivos=sumaPositivos/cantidadPositivos;
  promedioNegativos=sumaNegativos/cantidadNegativos;
  diferencia=sumaPositivos-sumaNegativos;
  alert('SumaNegativos:'+sumaNegativos+'\nSumaPositivos:'+sumaPositivos+'\nCantNeg:'+cantidadNegativos+'\nCantPosit:'+cantidadPositivos+'\nCantCeros:'+cantidadCeros+'\nCantPares:'+cantidadPares+'\nPromPosit:'+promedioPositivos+'\nPromNeg:'+promedioNegativos+'\nDiferencia:'+diferencia);



}//FIN DE LA FUNCIÓN
