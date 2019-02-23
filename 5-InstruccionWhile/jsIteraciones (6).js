function mostrar()
{

	var contador=0;
  var acumulador=0;
  var nuevoNumero;
  while (contador<5) {
    nuevoNumero=prompt('Ingrese numero:');
    nuevoNumero=parseInt(nuevoNumero)
    while (isNaN(nuevoNumero)) {
      nuevoNumero=prompt('Ingrese numero:');
      nuevoNumero=parseInt(nuevoNumero);
    }
    contador+=1;
    acumulador+=nuevoNumero;
  }


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN
