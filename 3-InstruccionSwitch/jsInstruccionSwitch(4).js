function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
    switch(mesDelAño) {
        case 'Febrero':
            alert('tiene 28 días');
            break;
        case 'Enero':
        case 'Marzo':
        case 'Mayo':
        case 'Julio':
        case 'Agosto':
        case 'Octubre':
        case 'Diciembre':
            alert('Tiene 31 días');
            break;
        default:
            alert('Tiene 30 días');
    }
//alert (mesDelAño);
	
	



}//FIN DE LA FUNCIÓN