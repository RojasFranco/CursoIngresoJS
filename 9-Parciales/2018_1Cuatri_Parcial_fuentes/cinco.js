function mostrar()
{
    var planeta;
    planeta=prompt('ingrese un planeta');
    switch(planeta) {
        case 'tierra':
            alert ('acá vivimos');
            break
        case 'mercurio':
        case 'venus':
            alert ('acá hace mas calor');
            break
        case 'saturno':
        case 'jupiter':
        case 'urano':
        case 'neptuno':
        case 'marte':
            alert('acá hace más frio');
            break
        default:
            alert('no es un planeta')
    }
}
