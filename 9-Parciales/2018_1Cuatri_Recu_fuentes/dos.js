function mostrar()
{
    var compra, compraConDescuento, compraFinal;
    compra=prompt("De cuanto es tu compra?");
    compraConDescuento=parseInt(compra)*90/100;
    compraFinal=compraConDescuento*121/100;
    alert("tu compra es de "+compra+" tenes un descuento del 10%, queda en "+compraConDescuento+", mas el iva es "+compraFinal);
}