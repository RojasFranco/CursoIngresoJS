/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
var primerNro;
var segundoNro;
function sumar()
{	
    var suma;
    primerNro=document.getElementById("numeroUno").value;
    segundoNro=document.getElementById("numeroDos").value;
    suma=parseInt(primerNro) + parseInt(segundoNro);
    alert('la suma es ' + suma);
}

function restar()
{
    var resta;
    primerNro=document.getElementById("numeroUno").value;
    segundoNro=document.getElementById("numeroDos").value;
    resta=parseInt(primerNro) - parseInt(segundoNro);
    alert('la resta es ' + resta);
}

function multiplicar()
{ 
    var multiplicacion;
    primerNro=document.getElementById("numeroUno").value;
    segundoNro=document.getElementById("numeroDos").value;
    multiplicacion=parseInt(primerNro) * parseInt(segundoNro);
    alert('la multiplicacion es ' + multiplicacion);
}

function dividir()
{
    var division;
    primerNro=document.getElementById("numeroUno").value;
    segundoNro=document.getElementById("numeroDos").value;
    division=parseInt(primerNro) / parseInt(segundoNro)
    alert('la division es ' + division)
}