function mostrar()
{
    var nota, sexo, cantNotas=0, sumaNotas=0, bandera=true, sexoNotaBaja,cantVaronesMayor6=0, promedio;
    while (cantNotas<5) {
        do {
            nota=prompt('Ingrese nota');
        } while (isNaN(nota) || nota>10 || nota<0);
        do {
            sexo=prompt('ingrese sexo')
        } while (sexo!='f' && sexo!='m');
        nota=parseInt(nota)
        cantNotas+=1
        sumaNotas+=nota
        if (bandera) {
            bandera=false
            notaMasBaja=nota
        } 
        if (nota<=notaMasBaja) {
            notaMasBaja=nota;
            sexoNotaBaja=sexo
        }
        if (nota >=6 && sexo=='m') {
            cantVaronesMayor6+=1
        }

    }
    promedio=sumaNotas/(cantNotas)
    alert('El promedio es:'+promedio+'\nLa nota mas baja es'+notaMasBaja+' y es '+sexoNotaBaja+'\nLa cant varones:'+cantVaronesMayor6);

}
