function mostrar()
{
    var numero, cantidadPares=0, pares='';
    numero=prompt('Ingrese el numero');
    numero=parseInt(numero)
    for (var i=1; i<=numero; i+=1) {
        if (i%2==0) {
            cantidadPares+=1;
            pares+=i+'\n'
        }
    }
alert('Los numeros pares son \n' + pares + ' y la cantidad de numeros pares es: '+cantidadPares);


}//FIN DE LA FUNCIÓN