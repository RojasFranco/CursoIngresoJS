
function mostrar()
{
    var ancho;
    var largo;
    ancho=prompt("cuanto mide el ancho del rectangulo?");
    largo=prompt("cuando mide el largo del rectangulo");
    perimetro=parseInt(ancho)*2 + parseInt(largo)*2;
    alert('el perimetro del rectangulo es '+ perimetro)
}
