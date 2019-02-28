/*Al comenzar el juego generamos un número
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número
  ingresado es el mismo que el número secreto se dará
  por terminado el juego con un mensaje similar a este:
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto;
var cantidadIntentos=0;
var nroIngresado;

function comenzar()
{
  numeroSecreto = parseInt(Math.random()*100)
  alert(numeroSecreto)
	//Genero el número RANDOM entre 1 y 100
}

function verificar()
{
  nroIngresado=document.getElementById('numero').value
  nroIngresado=parseInt(nroIngresado);
  if (nroIngresado!=numeroSecreto) {
    cantidadIntentos+=1;
    alert(cantidadIntentos)
    if (nroIngresado<numeroSecreto) {
      alert('Falta para llegar al numero')
      document.getElementById('intentos').value=cantidadIntentos
    } else {
      alert('Se paso del numero')
      document.getElementById('intentos').value=cantidadIntentos
    }
} else {
  alert('Usted es un ganador!!! y en solo ' + (cantidadIntentos+1) + ' intento/s');
  document.getElementById('intentos').value=(cantidadIntentos+1)
}
}
