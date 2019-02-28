function mostrar()
{
 var numero, cantidadDivisores=0, divisores='';
 numero=prompt('Ingrese numero');
 numero=parseInt(numero)
 for (var i=0; i<=numero; i+=1) {
     if (numero%i==0) {
         cantidadDivisores+=1;
         divisores+=i+'\n';
     }
 }
alert('Los divisores son:\n'+divisores+'y la cantidad de divisores es: '+cantidadDivisores)


}//FIN DE LA FUNCIÓN