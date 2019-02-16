function mostrar()
{
    var cantLibros, valorCompra, metodoPago, precioFinal, recargo , descuento;
    cantLibros=prompt("ingrese la cantidad de libros");
    cantLibros=parseInt(cantLibros);
    valorCompra=prompt("Ingrese valor de compra total");
    valorCompra=parseInt(valorCompra);
    metodoPago=confirm("abona con tarjeta?");
    descuento=0;
    recargo=0;
    if (cantLibros>2){
        descuento=valorCompra*10/100
    }
    if (valorCompra>2000) {
        descuento=valorCompra*15/100 + descuento
    }
    if (metodoPago) {
        recargo=valorCompra*10/100
    }
    precioFinal=valorCompra-descuento+recargo
    alert("Tiene un descuento de $"+descuento+ " un recargo de $"+recargo+" y su precio final es $"+precioFinal);
}
