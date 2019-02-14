/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var tempFahrenheit, tempCentigrados;
    tempFahrenheit=document.getElementById("Temperatura").value;
    tempCentigrados=(parseInt(tempFahrenheit)-32)*5/9
    alert(tempFahrenheit+' Fahrenheit son '+tempCentigrados+' centigrados')
}

function CentigradosFahrenheit () 
{
    var tempCentigrados, tempFahrenheit;
    tempCentigrados=document.getElementById("Temperatura").value
    tempFahrenheit=(parseInt(tempCentigrados)*9/5)+32
    alert(tempCentigrados+' centigrados son '+tempFahrenheit+' Fahrenheit')
}
