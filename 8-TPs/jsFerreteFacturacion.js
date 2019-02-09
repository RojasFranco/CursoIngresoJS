/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
var precio1,precio2,precio3;
function Sumar () 
{
    precio1=document.getElementById("PrecioUno").value;
    precio2=document.getElementById("PrecioDos").value;
    precio3=document.getElementById("PrecioTres").value;
    suma=parseInt(precio1)+parseInt(precio2)+parseInt(precio3);
    alert("la suma es: "+suma);
}
function Promedio () 
{
    precio1=document.getElementById("PrecioUno").value;
    precio2=document.getElementById("PrecioDos").value;
    precio3=document.getElementById("PrecioTres").value;
    suma=parseInt(precio1)+parseInt(precio2)+parseInt(precio3);
    alert("el promedio es: "+suma/3);
}
function PrecioFinal () 
{
	precio1=document.getElementById("PrecioUno").value;
    precio2=document.getElementById("PrecioDos").value;
    precio3=document.getElementById("PrecioTres").value;
    suma=parseInt(precio1)+parseInt(precio2)+parseInt(precio3);
    alert("el precio final es: "+suma*121/100)
}