function mostrar()
{
    var edad;
    edad=document.getElementById("edad").value;
    if (edad>17){
        alert('la persona es mayor de edad')
    }
    else {
        alert('la persona es menor de edad')
    }
}