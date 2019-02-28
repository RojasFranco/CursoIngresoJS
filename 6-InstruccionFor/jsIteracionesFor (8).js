function mostrar()
{
    var numero,bandera=true;
    /*numero primo es divisible por si mismo y por 1*/
    do {
        numero=prompt('Ingresa un numero');    
    } while (isNaN(numero));
    numero=parseInt(numero)
    for (var i=2; i<numero; i+=1) {
        if (numero%i==0) {
            bandera=false
        }
    }
    if (bandera) {
        alert('El numero '+numero+' es un numero primo')
    } else {
        alert('El numero '+numero+' no es un numero primo');
    }



}//FIN DE LA FUNCIÓN