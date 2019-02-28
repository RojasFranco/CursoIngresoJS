function mostrar()
{
    var primerNro, segundoNro, concatenados='',resultado;
    primerNro=prompt('Ingrese un numero');
    segundoNro=prompt('Ingrese otro numero');
    if (primerNro==segundoNro) {
        concatenados=primerNro+segundoNro
        alert(concatenados)
    }   else{
            primerNro=parseInt(primerNro);
            segundoNro=parseInt(segundoNro);
            if (primerNro>segundoNro) {
                resultado=primerNro-segundoNro
                alert(resultado)
            } else {
                resultado=primerNro+segundoNro
                alert(resultado)
                if (resultado>10) {
                    alert('la suma es '+resultado+ ' y supero el 10')
                }
        }
    }
}
