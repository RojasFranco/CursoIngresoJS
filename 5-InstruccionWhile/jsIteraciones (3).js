function mostrar()
{

var clave = prompt("ingrese el número clave."), contador=1;
while (clave!='utn750' && contador<3) {
    contador+=1
    clave=prompt("ingrese el número clave.");
}
if (clave!='utn750') {
    alert('cuenta bloqueada');
} else {
    alert('Bienvenido');
}

o

while (clave!='utn750' && contador<4) {
    if (contador==3){
        alert('cuenta bloqueada');
        break/* return*/
    }
    contador+=1;
    clave = prompt("ingrese el número clave.");
}
    alert('bienvenido');

}//FIN DE LA FUNCIÓN
