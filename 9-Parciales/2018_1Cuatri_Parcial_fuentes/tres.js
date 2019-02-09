function mostrar()
{
    var precio;
    var descuento;
    var precioFinal;
    precio=prompt("Ingrese precio");
    descuento=prompt("Ingrese % de descuento");
    precioFinal=parseInt(precio)*(100-parseInt(descuento))/100;
    document.getElementById("elPrecioFinal").value=precioFinal;
}
