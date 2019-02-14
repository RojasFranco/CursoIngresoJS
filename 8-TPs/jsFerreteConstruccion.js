/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo, ancho, radio;
    largo=document.getElementById("Largo").value;
    ancho=document.getElementById("Ancho").value;
    superficie=parseInt(largo)*parseInt(ancho)
    alert('la cantidad de alambre a comprar es '+superficie)

}
function Circulo () 
{
    var radio;
    radio=document.getElementById("Radio").value
    superficie= Math.PI* parseInt(radio)**2
    alert('la cantidad de alamrbre a comprar es '+superficie)
}
function Materiales () 
{
    var largo, ancho, superficie;
    largo=document.getElementById("Largo").value;
    ancho=document.getElementById("Ancho").value;
    superficie=parseInt(largo)*parseInt(ancho);
    alert('se necesitan '+superficie*2+' bolsas de cemento, y '+superficie*3+' bolsas de cal')
}