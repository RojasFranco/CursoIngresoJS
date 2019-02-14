function mostrar()
{
    var edad;
    edad = document.getElementById("edad").value
    if (edad>12){
        if (edad>17){
            alert('es mayor de edad')
        } else {
            alert('es adolescente')
        } 
    } else {
        alert('es menor de edad')
    }

}