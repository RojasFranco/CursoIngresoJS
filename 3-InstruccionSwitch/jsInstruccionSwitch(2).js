function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
    switch(mesDelAño) {
        case 'Julio':/*no hace falta agregar nada ya que al no haber un break sigue con agosto*/
        case 'Agosto':
            alert('Abrigate que hace frio');
            break;
        case 'Enero':
        case 'Febrero':
        case 'Marzo':
        case 'Abril':
        case 'Mayo':
        case 'Junio':
            alert('Falta para el invierno');
            break;
        default:
            alert('Ya pasamos el frio, ahora calor!!!');
        /*hubiese quedado mejor poniendo los casos donde falta para el invierno en default*/
    }
alert (mesDelAño);




}//FIN DE LA FUNCIÓN