/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
    var primerNro;
    var segundoNro;
    var suma;
    primerNro=document.getElementById("numeroUno").value;
    segundoNro=document.getElementById("numeroDos").value;
    suma=parseInt(primerNro)+parseInt(segundoNro);
    alert("la suma es "+suma)

}

